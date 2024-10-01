//Import dependencies
const {DataTypes} = require("sequelize");
const sequelize = require("../config/connection.js");

//Define Table CAR

const car = sequelize.define(
    "car",{
        id_car:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        brand:{
            type: DataTypes.INTEGER(45),
            allowNull: false,
        },
        model:{
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        year: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        type_car: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plate_number:{
            type:DataTypes.STRING(8),
            allowNull: false,
        },
    }
);