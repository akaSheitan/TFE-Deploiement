const controller = require("../controllers/widget.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/widget/all", controller.allAccess);
  app.post("/api/widget/find", controller.findWidget);
};