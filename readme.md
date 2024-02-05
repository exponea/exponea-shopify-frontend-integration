# Shopify Front-end integration for Exponea

This repository contains .liquid snippets that enable standardized front-end tracking of e-commerce events on your Shopify Plus website.

## Installation

You need to copy each .liquid snippet to the respective .liquid file in your Shopify theme.

1. Go to your Shopify Admin Panel > Online Store > Themes > Actions > Edit Code

2. Find the respective files: `main-product.liquid`, `main-collection-product-grid.liquid`, and `main-search.liquid` and copy and paste the contents of each of the respective snippets from this repository to the top of the file. Make sure to maintain the valid syntax of HTML: paste the files inside the contents of `<head>`. If there are no `<head>` tags present in your liquid file, you can add them yourself at the top of the file.

3. Copy and paste the contents of the `theme.liquid` snippet from this repository to the end of the `<head>` tag of the `theme.liquid` file in Shopify. Replace the placeholders `<<PROJECT API_ENDPOINT>>`, `<<PROJECT TOKEN>>` and `<<CART_COOKIE_NAME>>` - see below for more information on what these values should be.

> [!WARNING]
> `checkout.liquid` is deprecated. Use the `checkout-pixel.js` instructions outlined in step 4 and skip step 5. For stores which have not yet upgraded, skip to step 5. More information can be found [here](https://shopify.dev/docs/themes/architecture/layouts/checkout-liquid). 

4. To track your checkout flow, you need to create a Shopify pixel. To do this, go to Shopify Admin Panel > Settings > Customer events > Add custom pixel. Call it something descriptive, such as `bloomreach-checkout-pixel`, then copy the contents of `checkout-pixel.js` in this repository. You need to update the placeholder values `<<PROJECT API_ENDPOINT>>`, `<<PROJECT TOKEN>>` and `<<SHOPIFY DOMAIN>>`. Click Save and then Connect.

> [!CAUTION]
> Only follow step 5 if you are using `checkout.liquid` in your Shopify theme.

5. Copy and paste the contents of the `checkout.liquid` snippet from this repository to the end of the `<head>` tag of the `checkout.liquid` file in Shopify. Replace the placeholders `<<PROJECT API_ENDPOINT>>` and `<<PROJECT TOKEN>>`.

6. Save your theme.

Note on placeholder fields:

- `<<CART_COOKIE_NAME>>` - this is the name of the cart cookie from Shopify, most commonly called "cart".
- `<<PROJECT API_ENDPOINT>>` - this can be found in your Exponea project settings, most commonly "https://api.exponea.com"
- `<<PROJECT TOKEN>>` - this can be found in your Exponea project settings
- `<<SHOPIFY DOMAIN>>` - this is your store's URL, such as `650302-4.myshopify.com`, `guitar-store.com` etc.

If you're unsure about any of the values above, please ask your Consultant / CSM for advice.

## Usage

Once the theme changes are saved, Exponea will initialize and start tracking front-end events.

The following events are tracked:
- `session_start`
- `session_end` 
- `page_visit`
- `view_item`
- `view_category`
- `search`
- `checkout`

## Other notes

These snippets have been developed, tested and validated for Shopify stores with no plugins. If your store is using any plugins, valid functionality is not guaranteed (e.g. if you are using a custom 3rd party checkout page, the `checkout` event tracking will not work).