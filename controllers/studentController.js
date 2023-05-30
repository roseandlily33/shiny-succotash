const {Student, Course} = require('../models');

module.exports = {
    async getStudents(req, res) {
        try{
            const students = await Student.find();
            res.json(students);

        } catch(err){
            res.status(500).json(err);
        }
    },
    async getOneStudent(req, res){
        try{

        } catch(err){
            res.status(500).json(err);
        }
    },
    async createStudent(req, res){
        try{
            
        }catch(err){
            res.status(500).json(err);
        }
    },
    async deleteStudent(req, res){
        try{

        } catch(err){
            res.status(500).json(err);
        }
    },
    async addAssignment(req, res){
        try{

        } catch(err){
            res.status(500).json(err);
        }
    },
    async deleteAssignment(req, res){
        try{

        } catch(err){
            res.status(500).json(err);
        }
    }

}
