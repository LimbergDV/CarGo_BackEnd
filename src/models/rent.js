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
        },
        id_customer: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "customers",
                key: "id_customer"
            },
        },
        id_car:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "cars",
                key: "id_car"
            },
        },
    },
    {
        tableName: "rent",
        timestamps: false,
    }
);