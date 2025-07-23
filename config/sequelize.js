const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

/* const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database/db.sqlite",
    logging: console.log
}) */

module.exports = sequelize;
