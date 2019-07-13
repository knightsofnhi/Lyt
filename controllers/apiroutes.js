const router = require("express").Router();
const db = require("../models");

router.get("/api/artist", async (req, res) => res.json((await db.Product.findAll({}))));

router.post("/api/artist", (req, res) => res.json({}));
router.get("/api/artist/:id", async (req, res) => {
    res.json(await db.Product.findOne({
        where: {
            id: req.params.id
        }
    }))
});
module.exports = router;