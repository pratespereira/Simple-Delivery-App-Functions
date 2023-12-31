const express = require("express");
const ProductController = require("../controllers/Product.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const sellerMiddleware = require("../middlewares/seller.middleware");

const router = express.Router();

router.get("/", (req, res, next) =>
  new ProductController(req, res, next).getAll()
);
router.get("/:id", (req, res, next) =>
  new ProductController(req, res, next).getById()
);
router.post("/", (req, res, next) =>
  new ProductController(req, res, next).create()
);
router.put("/:id", (req, res, next) =>
  new ProductController(req, res, next).update()
);
router.patch("/stock/:id", authMiddleware, sellerMiddleware, (req, res, next) =>
  new ProductController(req, res, next).increment()
);
router.delete("/:id", (req, res, next) =>
  new ProductController(req, res, next).remove()
);

module.exports = router;
