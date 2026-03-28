const Module = require('../models/Module');
const Course = require("../models/Course");


// Create Module
const createModule = async (req, res) => {
    try {
        const { title, description, content } = req.body;
        const module = new Module({ title, description, content });
        await module.save();
        res.status(201).json({
            msg: "Module created successfully",
            data: module
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get All Modules
const getModules = async (req, res) => {
    try {
        const modules = await Module.find();
        res.status(200).json({
            msg: "Modules retrieved successfully",
            data: modules
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Module By ID
const getModuleById = async (req, res) => {
    try {
        const module = await Module.findById(req.params.id);
        if (!module) {
            return res.status(404).json({ message: 'Module not found' });
        }
        res.status(200).json(module);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




// Update Module
const updateModule = async (req, res) => {
    try {
        const { title, description, content } = req.body;
        const module = await Module.findByIdAndUpdate(req.params.id, { title, description, content }, { new: true });
        if (!module) {
            return res.status(404).json({ message: 'Module not found' });
        }
        res.status(200).json(module);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Delete Module
const deleteModule = async (req, res) => {
    try {
        const module = await Module.findByIdAndDelete(req.params.id);
        if (!module) {
            return res.status(404).json({ message: 'Module not found' });
        }
        res.status(200).json({ message: 'Module deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createModule,
    getModules,
    getModuleById,
    updateModule,
    deleteModule,
};

