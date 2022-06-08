const db = require("../models");
const widgetMod = db.widgetMod;
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
exports.findWidget = (req, res) => {
    widgetMod.findOne({ id: "629a5ed82f6d9bf0c71333f9" },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.status(200).send(data);
            }
        });
}

