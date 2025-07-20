import order from "../models/order.js";


export const placeorder = async (req, res) => {
    const order = new order(req.body);
    await order.save();
    res.status(201).json(order);
};

export const getOrders = async (req,res) => {

    const orders = await order.find().populate('items.menuitem');
    res.json(orders);
};

export const updateOrderstatus = async (req, res) => {
    const {id} = req.params;
    const {status} = req.body;
    const updated = await order.findByIdAndUpdate(id, {status}, {new:true});
    res.json(updated);
};

