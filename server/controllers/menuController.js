import menu from "../models/menu.js";

export const getmenu = async (req, res) => {
    const items = await menu.find();
    res.json(items);
    
};

export const createMenu = async (req,res) => {
    const item = new menu(req.body);
    await item.save();
    res.status(201).json(item);
    
};

export const updateMenu = async (req, res) => {
    const {id} = req.params;
    const updated = await menu.findByIdAndUpdate(id, req.body, {new:true});
    res.json(updated);
};

export const deleteMenu = async (req, res) => {
    const {id} = req.params;
    await menu.findByIdAndDelete(id);
    res.json({message: 'Item deleted'});
    
};