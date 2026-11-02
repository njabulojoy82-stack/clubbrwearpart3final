# clubbrWear — Part 3 Website Project

## About
This is a beginner-level HTML, CSS and JavaScript website for the fictional South African streetwear brand clubbrWear. The existing Part 2 pages and images were retained and updated with Part 3 functionality.

## Pages
- `index.html` — Home
- `products.html` — Products and clickable product gallery
- `services.html` — Services and accordion
- `about.html` — Brand information and FAQ accordions
- `enquiry.html` — Product/custom/bulk enquiry form with client-side validation and estimated subtotal response
- `contact.html` — General contact form, mailto preparation and Johannesburg map

## Features added
- SEO page titles, meta descriptions, keywords, descriptive image alt text, clean page links, internal navigation and responsive layout
- JavaScript validation and user-facing feedback for both forms
- Enquiry response and estimated subtotal for items with listed prices
- General contact form prepares an email to `info@clubbrwear.co.za` using the visitor's email application; this is not a server-side email sender
- Responsive image lightbox for product images
- Accordion interactions, CSS animation/transitions, reduced-motion support
- Leaflet map with OpenStreetMap tiles showing Johannesburg as a general location
- `robots.txt` and `sitemap.xml`

## Before publishing
1. Replace `https://example.com/clubbrwear/` in canonical links, `robots.txt` and `sitemap.xml` with the actual deployed website URL.
2. Confirm the email address, telephone number, prices, product stock and business location before using this as a real business site. They are demonstration details in this student project.
3. Test all forms and links on desktop and mobile.
4. Upload the folder to a static hosting platform such as GitHub Pages or Netlify. A static form's mailto action requires the visitor to have an email app configured. For actual online form delivery, connect a trusted form service or server endpoint.

## Changelog (Part 3)
- Updated all six HTML pages with SEO title tags, meta descriptions, keywords, responsive viewport settings, robots metadata, canonical placeholders and descriptive image alt text.
- Improved navigation and added a skip-to-content link for accessibility.
- Added responsive CSS layout, focus styles, hover transitions, a simple page entrance animation and a reduced-motion media query.
- Added a product gallery lightbox to `products.html` so images can be opened in a larger view and closed with a button, outside click or Escape key.
- Added accordion interactions to the Services and About pages for expandable information.
- Added required-field and format validation to the enquiry and contact forms, with clear error feedback.
- Added enquiry processing that returns a product-specific summary and estimated subtotal when a listed item and quantity are selected. Custom and bulk enquiries return a quote-needed response.
- Added contact form handling that compiles the entered details into a `mailto:` email addressed to the listed recipient.
- Added a Leaflet/OpenStreetMap location map on the Contact page, clearly marked as a general Johannesburg location.
- Added `robots.txt` and `sitemap.xml` to support crawler instructions and site discovery.
- Added project documentation and publishing notes.

## GitHub commit suggestions
Use descriptive commits as you work, for example:
- `Improve SEO metadata across website pages`
- `Add enquiry and contact form validation`
- `Implement product image lightbox and accordions`
- `Add Johannesburg map and sitemap files`
- `Document Part 3 changes in README`

## References
- OpenStreetMap contributors (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org/ (Accessed: 2 November 2026).
- Leaflet (n.d.) *Leaflet: an open-source JavaScript library for mobile-friendly maps*. Available at: https://leafletjs.com/ (Accessed: 2 November 2026).
