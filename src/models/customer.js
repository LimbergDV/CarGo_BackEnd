//Import dependencies
const {DataTypes} = require("sequelize");
const sequelize =require("../config/connection.js");

//Define Table CUSTOMER
const Customer = sequelize.define(
    "Customer",{
        id_customer:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
    }
);