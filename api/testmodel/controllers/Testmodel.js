'use strict';

/**
 * Testmodel.js controller
 *
 * @description: A set of functions called "actions" for managing `Testmodel`.
 */

module.exports = {

  /**
   * Retrieve testmodel records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.testmodel.search(ctx.query);
    } else {
      return strapi.services.testmodel.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a testmodel record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.testmodel.fetch(ctx.params);
  },

  /**
   * Count testmodel records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.testmodel.count(ctx.query);
  },

  /**
   * Create a/an testmodel record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.testmodel.add(ctx.request.body);
  },

  /**
   * Update a/an testmodel record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.testmodel.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an testmodel record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.testmodel.remove(ctx.params);
  }
};
