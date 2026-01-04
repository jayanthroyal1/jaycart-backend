import Product from "../../models/Product";

export const productResolvers = {
  Query: {
    products: async (_, { filter = {}, page, limit, sort }) => {
      const query = {};

      // Text search
      if (filter.search) {
        query.$text = { $search: filter.search };
      }

      // Category filter
      if (filter.category) {
        query.category = filter.category;
      }

      // Price range filter
      if (filter.minPrice || filter.maxPrice) {
        query.price = {};
        if (filter.minPrice) query.price.$gte = filter.minPrice;
        if (filter.maxPrice) query.price.$lte = filter.maxPrice;
      }

      // Sorting
      let sortOption = { createdAt: -1 };
      if (sort === "PRICE_ASC") sortOption = { price: 1 };
      if (sort === "PRICE_DESC") sortOption = { price: -1 };

      const skip = (page - 1) * limit;

      const [products, total] = await Promise.all([
        Product.find(query).sort(sortOption).skip(skip).limit(limit),
        Product.countDocuments(query),
      ]);

      return {
        products,
        total,
        page,
        limit,
      };
    },
  },
};
