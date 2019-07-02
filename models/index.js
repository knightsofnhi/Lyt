const router = require("express").Router();
const db = require("../models");

router.get("/api/products", async (req, res) => res.json((await db.Product.findAll({}))));

router.post("/api/product", (req, res) => res.json({}));
router.get("/api/product/:id", async (req, res) => {
    res.json(await db.Product.findOne({
        where: {
            id: req.params.id
        }
    }))
});
module.exports = router;