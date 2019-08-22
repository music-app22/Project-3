const express = require('express');
// const routes = require('./routes')
const app = express();
let PORT = process.env.PORT || 3000;

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes")(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

//app.use(routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
});