const homeRoutes = require("./home_route");
const productRoutes = require("./product_route");

module.exports = (app) => {
    app.use('/', homeRoutes);

    app.use("/products",  productRoutes);
}