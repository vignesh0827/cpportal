const { ModelName } = require('../models');

exports.getAll = async (req, res) => {
    try {
        const records = await ModelName.findAll();
        res.json(records);
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching Records', error });
    }
};

exports.getById = async (req, res) => {
    try {
        const record = await ModelName.findByPk(req.params.id);
        if (!record) return res.status(404).json({ message: 'Record Not Found' });

        res.json(record);
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching Record', error });
    }
};

exports.create = async (req, res) => {
    try {
        const record = await ModelName.create(req.body);
        res.status(201).json(record);
    } catch (error) {
        res.status(500).json({ message: 'Error Creating Record', error });
    }
};

exports.update = async (req, res) => {
    try {
        const record = await ModelName.findByPk(req.params.id);
        if (!record) return res.status(404).json({ message: 'Record Not Found' });

        await record.update(req.body);
        res.json({ message: 'Record Updated Successfully', record });
    } catch (error) {
        res.status(500).json({ message: 'Error Updating Record', error });
    }
};

exports.delete = async (req, res) => {
    try {
        const record = await ModelName.findByPk(req.params.id);
        if (!record) return res.status(404).json({ message: 'Record Not Found' });

        await record.destroy();
        res.json({ message: 'Record Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error Deleting Record', error });
    }
};
