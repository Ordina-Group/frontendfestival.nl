terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.110.0"
    }
  }

  #   backend "azurerm" {
  #     resource_group_name  = "frontendfestival"
  #     storage_account_name = "storage-account"
  #     container_name       = "tfstate"
  #     key                  = "prod.terraform.tfstate"
  #   }
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

resource "azurerm_app_service_managed_certificate" "frontendfestival" {
  custom_hostname_binding_id = azurerm_app_service_custom_hostname_binding.frontendfestival.id
}

resource "azurerm_app_service_certificate_binding" "frontendfestival" {
  hostname_binding_id = azurerm_app_service_custom_hostname_binding.frontendfestival.id
  certificate_id      = azurerm_app_service_managed_certificate.frontendfestival.id
  ssl_state           = "SniEnabled"
}

resource "azurerm_app_service_source_control" "frontendfestival" {
  app_id   = azurerm_linux_web_app.frontendfestival.id
  repo_url = "https://github.com/Ordina-Group/frontendfestival.nl"
  branch   = "main"
}
