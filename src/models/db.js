const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
    dialect: "postgres",
    database: "shortener",
    username: "me",
    password: "passwd",
});

const URLs = db.define("urls", {
    id: {
        primaryKey: true,   // unique by default
        type: DataTypes.INTEGER,
    },
    code: {
        type: DataTypes.STRING(7),
        unique: true
    },
    link: {
        type: DataTypes.TEXT,
        allowNull: false
    },

});

module.exports = {
    db,
};
