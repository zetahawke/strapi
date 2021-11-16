'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  find(params, _populate) {
    //  return strapi.query('mini-sites').find(params, ['banners', 'banners.slides']);
    return strapi.query('mini-sites').find(params, [
      'navbars','navbars.content_tag', 'navbars.navbar_items', 'navbars.navbar_items.content_tag',
      'banners', 'banners.content_tag', 'banners.slides', 'banners.slides.content_tag',
      'carousels', 'carousels.content_tag', 'carousels.carousel_items', 'carousels.carousel_items.content_tag',
      'filters_sections', 'filters_sections.content_tag', 'filters_sections.filters_items', 'filters_sections.filters_items.content_tag',
      'footers', 'footers.content_tag',
    ]);
  },
};
