module.exports = app => {
    const customers = require("./customer.controller.js");

    // Retrieve all Customers
    app.get("/customers", customers.findAll);

};