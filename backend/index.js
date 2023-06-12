const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// db.sequelize.sync({force: false, logging: false})
// .then(() => {
//         console.log("Synced db.");
//     })
//     .catch((err) => {
//         console.log("Failed to sync db: " + err.message);
//     });
    
    // db.sequelize.sync()
    
    // ----------------- sample route ------------------ 
    // const routes = require('./Routes/routes');
    // const { create } = require('domain');
    // app.use("/data", routes);

    app.get("/", (req, res) => {
        res.json({ message: "Welcome to Sequelize application." });
    });
    
    const userCtrl = require("./Controller/controller")

    app.get("/add", userCtrl.addData);
    app.get("/delete", userCtrl.delData);
    app.get("/update", userCtrl.updateData);
    app.get("/clean", userCtrl.cleanData);
    app.get("/add/bulk", userCtrl.bulkAdd);
    app.get("/query/one", userCtrl.getOne);
    app.get("/query/all", userCtrl.fetchAll);
    app.get("/query", userCtrl.quryData);

    
    // create();

const PORT = 5000;

app.listen(PORT, () => { console.log("Listening to the port 5000") })