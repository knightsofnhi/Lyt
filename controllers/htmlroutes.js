const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html")));
router.get("/artists/:id", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/artists.html")));
module.exports = router;