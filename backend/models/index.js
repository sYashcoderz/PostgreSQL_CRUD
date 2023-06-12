const Sequelize = require('sequelize');

// Creating new Object of Sequelize
const sequelize = new Sequelize('Dark_web', 'postgres', 'sfdc', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate().then(() => {
    console.log("Successfully Connected to Postgres DB");
}).catch(err => {
    console.log("error", err)
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./models")(sequelize, Sequelize);
db.sequelize.sync({force:false})
.then(()=>{
    console.log("yes re sync");
})
.catch((err)=>{
    console.log(err);
})

// Export for creating models
module.exports = db;