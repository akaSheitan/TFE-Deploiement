const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const serveStatic = require("serve-static")

const dbConfig = require("./app/config/db.config");
var path = require('path');

const app = express();

const nameOfDb = 'customer';
// activate cors for security
/*var corsOptions = {
  origin: "https://data.mongodb-api.com/app/data-tonhu/endpoint/data/beta"
};
app.use(cors(corsOptions)); */

app.use(serveStatic(path.resolve(__dirname+"/dist")));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "Emuix-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);
// simple route
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist/index.html'));
  // res.json({ message: "Welcome to Emuix application." });
  // res.sendFile(__dirname +'/../Front-end/dist/index.html');
  // res.sendFile(path.join(__dirname, '/../Front-end/dist/index.html'));
});
// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
const Role = db.role;
db.mongoose
  .connect(`mongodb+srv://Yannick:azerty12345@cluster0.9xc5d.mongodb.net/${nameOfDb}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}