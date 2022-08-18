'use strict';

/**
 * content-filter service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::content-filter.content-filter');
