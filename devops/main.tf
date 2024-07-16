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

resource "azurerm_static_web_app_custom_domain" "frontendfestival" {
  static_web_app_id = azurerm_static_web_app.frontendfestival.id
  domain_name       = "frontendfestival.nl"
  validation_type   = "dns-txt-token"
}

resource "azurerm_static_web_app_custom_domain" "wwwFrontendfestival" {
  static_web_app_id = azurerm_static_web_app.frontendfestival.id
  domain_name       = "www.frontendfestival.nl"
  validation_type   = "cname-delegation"

  lifecycle {
    ignore_changes = [
      validation_type # When refreshing this is null, so it will always try to update
    ]
  }
}

output "dns_records" {
  value = <<EOT
${azurerm_static_web_app_custom_domain.frontendfestival.domain_name} ALIAS ${azurerm_static_web_app.frontendfestival.default_host_name}
${azurerm_static_web_app_custom_domain.frontendfestival.domain_name} TXT ${azurerm_static_web_app_custom_domain.frontendfestival.validation_token}
${azurerm_static_web_app_custom_domain.wwwFrontendfestival.domain_name} CNAME ${azurerm_static_web_app.frontendfestival.default_host_name}
EOT
  sensitive = true
}

output "github_actions_secret" {
  value = azurerm_static_web_app.frontendfestival.api_key
  sensitive = true
}
