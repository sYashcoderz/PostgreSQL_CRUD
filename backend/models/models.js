module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("Dark_Tech", {
        ID: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        Gender: {
            type: Sequelize.STRING
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
    });
    return Tutorial;
};