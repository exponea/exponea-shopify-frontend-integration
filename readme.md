# Shopify Front-end integration for Exponea

This repository contains .liquid snippets that can enable standardized front-end tracking of e-commerce events on your Shopify Plus website.
## Installation

You need to copy each .liquid snippet to the respective .liquid file in your Shopify theme.

1. Go to your Shopify admin panel > Online Store > Themes > Actions > Edit Code
2. Find the respective files: `product.liquid`, `collection.liquid`, and `search.liquid` and copy and paste the contents of each of the respective snippets from this repository to the top of the file. Make sure to maintain the valid syntax of HTML (e.g. paste the files inside the contents of `<head>` rather than outside.
3.  Copy and paste the contents of the `theme.liquid` snippet from this repository to the end of the `<head>` tag of the `theme.liquid` file in Shopify. Replace the initialization configuration of the file with the configuration that you have received in the email with set-up instructions (i.e. replace the configuration object with `<<PROJECT TOKEN>>`, `<<CART_COOKIE_NAME>>` and `<<PROJECT API_ENDPOINT>>` with provided data). Note that the `<<PROJECT API_ENDPOINT>>` also needs to be changed on line 2 - SDK loading script.
4.  Copy and paste the contents of the `checkout.liquid` snippet from this repository to the end of the `<head>` tag of the `checkout.liquid` file in Shopify. Replace the initialization configuration of the file with the configuration that you have received in the email with set-up instructions (i.e. replace the configuration object with `<<PROJECT TOKEN>>` and `<<PROJECT API_ENDPOINT>>` with provided data). Note that the `<<PROJECT API_ENDPOINT>>` also needs to be changed on line 2 - SDK loading script.
5. Save the theme and Exponea will initialize automatically.

## Usage

Once the theme changes are saved, Exponea will initialize and start tracking the front-end events automatically.
The following events are tracked:
- `session_start`
- `session_end` 
- `page_visit`
- `view_item`
- `view_category`
- `search`
- `checkout`

You can find the description of the events and their attributes in the [official Exponea Shopify Tracking document]().

## Other notes

These snippets have been developed, tested and validated for Shopify stores with no plugins. If your store is using any plugins, valid functionality is not guaranteed (e.g. if you are using a custom 3rd party checkout page, the `checkout` event tracking will not work).
