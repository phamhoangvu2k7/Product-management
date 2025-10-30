const express = require('express');
require('dotenv').config();

const database = require("./config/database");
database.connect();

const systemConfig = require("./config/system")
const route = require("./routes/client/index_route");
const routeAdmin = require("./routes/admin/index_route");

const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

// App Locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.use(express.static("public"));

// Routes
route(app);
routeAdmin(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});