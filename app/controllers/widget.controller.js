const db = require("../models");
const widgetMod = db.widgetMod;
exports.allAccess = (req, res) => {
    widgetMod.find(
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.status(200).send(data);
            }
        });
};
exports.findWidget = (req, res) => {
    widgetMod.findOne({ id: req.body.id },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.status(200).send(data);
            }
        });
}

