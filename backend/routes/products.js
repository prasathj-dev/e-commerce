import express from "express";
import { Product } from "../models/Product.js";
import { Op } from "sequelize";

const router = express.Router();

// router.get("/", async (req, res) => {
//   const search = req.query.search;

//   let products;
//   if (search) {
//     products = await Product.findAll();

//     // Filter products by case-insensitive search on name or keywords
//     const lowerCaseSearch = search.toLowerCase();

//     products = products.filter((product) => {
//       const nameMatch = product.name.toLowerCase().includes(lowerCaseSearch);

//       const keywordsMatch = product.keywords.some((keyword) =>
//         keyword.toLowerCase().includes(lowerCaseSearch)
//       );

//       return nameMatch || keywordsMatch;
//     });
//   } else {
//     products = await Product.findAll();
//   }

//   res.json(products);
// });

// export default router;

router.get("/", async (req, res) => {
  console.log(req);
  try {
    const { search = "", page = 1, limit = 10 } = req.query;

    const offset = (page - 1) * limit;

    // WHERE condition
    const whereCondition = search
      ? {
          [Op.or]: [
            { name: { [Op.iLike]: `%${search}%` } },
            { keywords: { [Op.contains]: [search] } },
          ],
        }
      : {};

    const { rows, count } = await Product.findAndCountAll({
      where: whereCondition,
      limit: Number(limit),
      offset,
      order: [["createdAt", "DESC"]],
    });

    res.json({
      data: rows,
      page: Number(page),
      limit: Number(limit),
      total: count,
      hasMore: offset + rows.length < count,
      nextPage: offset + rows.length < count ? Number(page) + 1 : null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
