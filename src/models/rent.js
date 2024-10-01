//Import dependencies
const {DataTypes} = require("sequelize");
const sequelize = require("../config/connection.js");

const rent = sequelize.define(
    "rent",{
        id_car:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        start_date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        total_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
);