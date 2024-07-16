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
  validation_type   = "cname-delegation"
}

resource "azurerm_static_web_app_custom_domain" "wwwFrontendfestival" {
  static_web_app_id = azurerm_static_web_app.frontendfestival.id
  domain_name       = "www.frontendfestival.nl"
  validation_type   = "cname-delegation"
}
