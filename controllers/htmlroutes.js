const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html")));
router.get("/product/:id", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/product.html")));
module.exports = router;