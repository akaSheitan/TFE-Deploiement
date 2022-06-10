const controller = require("../controllers/jsfile.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/jsfile/findall", controller.allAccess);
//   app.post("/api/widget/find", controller.findWidget);
};