const { studentInfo } = require('../models');

exports.getAllStudents = async (req, res) => {
    try {
        const students = await studentInfo.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching Students', error });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = await studentInfo.findByPk(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student Not Found' });

        res.json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching Student', error });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const student = await studentInfo.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error Creating Student', error });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const student = await studentInfo.findByPk(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student Not Found' });

        await student.update(req.body);
        res.json({ message: 'Student Updated Successfully', student });
    } catch (error) {
        res.status(500).json({ message: 'Error Updating Student', error });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const student = await studentInfo.findByPk(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student Not Found' });

        await student.destroy();
        res.json({ message: 'Student Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error Deleting Student', error });
    }
};
