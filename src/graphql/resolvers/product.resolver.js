import Product from "../../models/Product.js";

export const productResolvers = {
  Query: {
    products: async (_, { filter = {}, page = 1, limit = 10, sort }) => {
      const query = {};

      if (filter.search) {
        query.$text = { $search: filter.search };
      }

      if (filter.category) {
        query.category = filter.category;
      }

      if (filter.minPrice || filter.maxPrice) {
        query.price = {};
        if (filter.minPrice) query.price.$gte = filter.minPrice;
        if (filter.maxPrice) query.price.$lte = filter.maxPrice;
      }

      const total = await Product.countDocuments(query);
      const products = await Product.find(query)
        .skip((page - 1) * limit)
        .limit(limit);

      return {
        products: products || [],
        total,
        page,
        limit,
      };
    },
  },
};
