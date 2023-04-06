import Order from '../models/Order.js'

export const createOrder = async (req, res, next) => {
    const newOrder = new Order(req.body)

    try {
        const saveOrder = await newOrder.save();
        res.status(200).json(saveOrder)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const updateOrder = async (req, res, next) => {

    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true})
        res.status(200).json(updatedOrder)
    } catch (err) {
        next(err);
    }
}

export const deleteOrder = async (req, res, next) => {
    try {
        await Order.findByIdAndDelete(
            req.params.id)
        res.status(200).json("Card has been deleted.")
    } catch (err) {
        next(err);
    }
}

export const getUserOrders = async (req, res, next) => {

    try {
        const orders = await Order.find({userId: req.params.userId});
        res.status(200).json(orders);
    } catch (err) {
        next(err);
    }
}

export const getAllOrders = async (req, res, next) => {

    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (err) {
        next(err);
    }
}