'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

const miniSiteEmbeddedRelations = [
  'navbars','navbars.content_tag', 'navbars.content_tag.image',
  'navbars.navbar_items', 'navbars.navbar_items.content_tag', 'navbars.navbar_items.content_tag.image',
  'banners', 'banners.content_tag', 'banners.content_tag.image',
  'banners.slides', 'banners.slides.content_tag', 'banners.slides.content_tag.image',
  'carousels', 'carousels.content_tag', 'carousels.content_tag.image',
  'carousels.carousel_items', 'carousels.carousel_items.content_tag', 'carousels.carousel_items.content_tag.image',
  'filters_sections', 'filters_sections.content_tag', 'filters_sections.content_tag.image',
  'filters_sections.filter_items', 'filters_sections.filter_items.content_tag', 'filters_sections.filter_items.content_tag.image',
  'filters_sections.filter_items.filter_item_products', 'filters_sections.filter_items.filter_item_products.content_tag', 'filters_sections.filter_items.filter_item_products.content_tag.image',
  'featured_products', 'featured_products.content_tag', 'featured_products.content_tag.image',
  'featured_products.featured_product_items', 'featured_products.featured_product_items.content_tag', 'featured_products.featured_product_items.content_tag.image',
  'footers', 'footers.content_tag', 'footers.content_tag.image',
]

module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  find(params, _populate) {
    //  return strapi.query('mini-sites').find(params, ['banners', 'banners.slides']);
    return strapi.query('mini-sites').find(params, miniSiteEmbeddedRelations);
  },
  /**
   * Promise to fetch one records
   *
   * @return {Promise}
   */
  findOne(params, _populate) {
    //  return strapi.query('mini-sites').find(params, ['banners', 'banners.slides']);
    return strapi.query('mini-sites').findOne(params, miniSiteEmbeddedRelations);
  },
};
