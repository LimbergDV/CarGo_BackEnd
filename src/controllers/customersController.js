//Import dependencies
const {Customer} = require("../models/customer.js");

exports.addCustomer = async (req, res) =>{
    try {
        const { name, last_names, phone_number, CURP, number_license, birthdate} = req.body;
        await Customer.create({name, last_names, phone_number, CURP, number_license, birthdate});
        res.status(201).send("Resource created successfully");
    } catch (err) {
        return res.status(500).send(`Error has occurred: ${err}`)
    }
};

exports.getCustomer = async (req, res) => {
    try {
        const id_customer = req.params.id;
        const customer = await Customer.find({where: {id_customer: id_customer}});
        res.status(200).json({customer});
        
    } catch (err) {
        return res.status(500).send(`Error has occurred: ${err}`);
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const { name, last_names, phone_number, CURP, number_license, birthdate} = req.body;
        const id_customer = req.params.id;

        const customer = await Customer.update({ name, last_names, phone_number, CURP, number_license, birthdate}, {where: {id_customer: id_customer}});
        res.status(200).send("Resource updated successfully");

    } catch (err) {
        return res.status(500).send(`Error has occurred: ${err}`);
    }
};

exports.deleateCustomer = async(req, res) => {
    try {
        const id_customer = req.params.id;
        const customer = await Customer.destroy({where: {id_customer: id_customer}});
        res.status(200).send("Resource deleted successfully");
    } catch (err) {
        return res.status(500).send(`Error has ocurred: ${err}`);
    }
};