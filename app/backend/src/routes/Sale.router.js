const express = require("express");
const SaleController = require("../controllers/Sale.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", (req, res, next) =>
  new SaleController(req, res, next).getAll()
);
router.get("/:id", (req, res, next) =>
  new SaleController(req, res, next).getById()
);
router.get("/user/:id", (req, res, next) =>
  new SaleController(req, res, next).getByUserId()
);
router.get("/seller/:id", (req, res, next) =>
  new SaleController(req, res, next).getBySellerId()
);
router.post("/", authMiddleware, (req, res, next) =>
  new SaleController(req, res, next).create()
);

router.patch("/status/:id", (req, res, next) =>
  new SaleController(req, res, next).update()
);
router.delete("/:id", (req, res, next) =>
  new SaleController(req, res, next).remove()
);

module.exports = router;
