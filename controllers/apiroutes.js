const router = require("express").Router();
const db = require("../models");

router.get("/api/artists", async (req, res) => res.json((await db.Artists.findAll({}))));

router.post("/api/artists", (req, res) => res.json({}));
router.get("/api/artists/:id", async (req, res) => {
    res.json(await db.artists.findOne({
        where: {
            id: req.params.id
        }
    }))
});
module.exports = router;