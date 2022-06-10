// const db = require("../models");
// const widgetMod = db.widgetMod;
const path = require('path');
exports.allAccess = (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../../JsScript/weather.js'))
};

