'use strict';

/**
 * personal-information service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personal-information.personal-information');
