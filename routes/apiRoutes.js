module.exports = function (app) {
  app.get("/api/artists", function (req, res) {

    var dbQuery = ("SELECT * FROM artists WHERE ?", {
      artistLocation: "Allston"
    });

    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      console.log(result)
      res.json(result);
    })
  })
}