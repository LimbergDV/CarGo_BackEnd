const db = require('../models');
const Customer = db.customer;

exports.createCustomer = async (req, res) =>{
    try {
        console.log('Request Body', req, res);
        const newCustomer = await Customer.create(req.body);
        res.status(201).json(newCustomer)
    } catch (err) {
        console.log(err);
        return res.status(500).json(`Error al crear el cliente`);
    }
};

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.json(customers)
    } catch (err) {
        console.log(err);
        return res.status(500).json({err: "Error al obtener los clientes"});
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el cliente' });
    }
};

exports.updateCustomer = async (req, res) => {
    const {id} = req.params;
    const updatedCustomerData = req.body;
    try {
        const [updatedRows]= await Customer.update(updatedCustomerData,{
            where: {id_customer: id}
        });

        if (updatedRows === 0) {
            return res.status(404).json({message: 'Cliente no encontrado'});
        }
        const updatedCustomer = await Customer.findByPk(id);
        res.status(200).json(updatedCustomer);
    } catch (err) {
        res.status(500).json({message:'Error al actualizar cliente'});
    }
};

exports.deleateCustomer = async (req, res) => {
    try {
        const customerId = req.params.id;
        const deleateCustomer = await Customer.destroy({
            where: { id_customer: customerId }
        });

        if (deleateCustomer) {
            return res.status(204).send();
        } else {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        return res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
};