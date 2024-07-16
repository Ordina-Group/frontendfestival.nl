terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.110.0"
    }
  }

  # Comment this block when setting up the first time and init locally to create the storage account
  # then, apply, uncomment, init again and apply again.
  backend "azurerm" {
    resource_group_name  = "frontendfestival"
    storage_account_name = "frontendfestivalstorage"
    container_name       = "tfstate"
    key                  = "prod.terraform.tfstate"
  }
}

provider "azurerm" {
  skip_provider_registration = true
  features {}
}

resource "azurerm_resource_group" "frontendfestival" {
  name     = "frontendfestival"
  location = "westeurope"
  tags = {
    environment       = "production"
    source            = "Terraform"
    contact           = "Roderick Huijgen <roderick.huijgen@ordina.nl>"
    technical-contact = "Robbin Schepers <robbin.schepers@ordina.nl>"
  }
}

resource "azurerm_storage_account" "frontendfestival" {
  name                     = "frontendfestivalstorage"
  resource_group_name      = azurerm_resource_group.frontendfestival.name
  location                 = azurerm_resource_group.frontendfestival.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  allow_nested_items_to_be_public = false
}

resource "azurerm_storage_container" "tfstate" {
  name                  = "tfstate"
  storage_account_name  = azurerm_storage_account.frontendfestival.name
  container_access_type = "private"
}

resource "azurerm_static_web_app" "frontendfestival" {
  name                = "frontendfestival"
  resource_group_name = azurerm_resource_group.frontendfestival.name
  location            = azurerm_resource_group.frontendfestival.location
}

# resource "azurerm_static_web_app_custom_domain" "frontendfestival" {
#   static_web_app_id = azurerm_static_web_app.frontendfestival.id
#   domain_name       = "frontendfestival.nl"
#   validation_type   = "cname-delegation"
# }
#
# resource "azurerm_static_web_app_custom_domain" "wwwFrontendfestival" {
#   static_web_app_id = azurerm_static_web_app.frontendfestival.id
#   domain_name       = "www.frontendfestival.nl"
#   validation_type   = "cname-delegation"
# }

resource "azurerm_service_plan" "frontendfestival" {
  name                = "frontendfestival"
  resource_group_name = azurerm_resource_group.frontendfestival.name
  location            = azurerm_resource_group.frontendfestival.location
  os_type             = "Linux"
  sku_name            = "P0v3"
}

resource "azurerm_linux_web_app" "frontendfestival" {
  name                = "frontendfestival"
  resource_group_name = azurerm_resource_group.frontendfestival.name
  location            = azurerm_service_plan.frontendfestival.location
  service_plan_id     = azurerm_service_plan.frontendfestival.id

  https_only = true

  site_config {
    always_on        = false
    http2_enabled    = true
    app_command_line = "pm2 start ecosystem.config.cjs --no-daemon"

    application_stack {
      node_version = "20-lts"
    }
  }
}

resource "azurerm_app_service_custom_hostname_binding" "frontendfestival" {
  hostname            = "frontendfestival.nl"
  app_service_name    = azurerm_linux_web_app.frontendfestival.name
  resource_group_name = azurerm_resource_group.frontendfestival.name
}

resource "azurerm_app_service_custom_hostname_binding" "wwwFrontendfestival" {
  hostname            = "www.frontendfestival.nl"
  app_service_name    = azurerm_linux_web_app.frontendfestival.name
  resource_group_name = azurerm_resource_group.frontendfestival.name
}

resource "azurerm_app_service_managed_certificate" "frontendfestival" {
  custom_hostname_binding_id = azurerm_app_service_custom_hostname_binding.frontendfestival.id
}
resource "azurerm_app_service_managed_certificate" "wwwFrontendfestival" {
  custom_hostname_binding_id = azurerm_app_service_custom_hostname_binding.wwwFrontendfestival.id
}

resource "azurerm_app_service_certificate_binding" "frontendfestival" {
  hostname_binding_id = azurerm_app_service_custom_hostname_binding.frontendfestival.id
  certificate_id      = azurerm_app_service_managed_certificate.frontendfestival.id
  ssl_state           = "SniEnabled"
}

resource "azurerm_app_service_certificate_binding" "wwwFrontendfestival" {
  hostname_binding_id = azurerm_app_service_custom_hostname_binding.wwwFrontendfestival.id
  certificate_id      = azurerm_app_service_managed_certificate.wwwFrontendfestival.id
  ssl_state           = "SniEnabled"
}

resource "azurerm_app_service_source_control" "frontendfestival" {
  app_id   = azurerm_linux_web_app.frontendfestival.id
  repo_url = "https://github.com/Ordina-Group/frontendfestival.nl"
  branch   = "main"
}
