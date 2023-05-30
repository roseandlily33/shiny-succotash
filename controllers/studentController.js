const {Student} = require('../models');

//Aggregate function for total of students
const headCount = async() => {
    const numOfStu = await Student.count();
    return numOfStu;
}

module.exports = {
    async getStudents(req, res) {
        try{
            const students = await Student.find();
            const allStudents = {
                students, 
                headCount: await headCount()
            }
            res.json(allStudents);
        } catch(err){
            res.status(500).json(err);
        }
    },
    async getOneStudent(req, res){
        try{
            const oneStudent = await Student.findOne({_id: req.params.studentId});
            const onlyOne = {
                oneStudent,
                grade: await grade(oneStudent._id)
            }
            res.json(onlyOne);
        } catch(err){
            res.status(500).json(err);
        }
    },
    async createStudent(req, res){
        try{
            const newStudent = await Student.create(req.body);
            res.json(newStudent._id);
        }catch(err){
            res.status(500).json(err);
        }
    },
    async deleteStudent(req, res){
        try{
            const deleted = await Student.findByIdAndDelete({_id: req.params.studentId});
            res.json(deleted);
        } catch(err){
            res.status(500).json(err);
        }
    },
    async addAssignment(req, res){
        try{
            console.log(req.body, req.params);
            const student = await Student.findOneAndUpdate({_id: req.params.studentId}, {$addToSet: {assignments: req.body}});
            res.json(student);
        } catch(err){
            res.status(500).json(err);
        }
    },
    async deleteAssignment(req, res){
        try{
            console.log(req.body, req.params)
            const student = await Student.findOneAndUpdate({
                _id: req.params.studentId
            }, {$pull: {assignments:{ assignmentId: req.params.assignmentId}}})
            res.json(student);
        } catch(err){
            res.status(500).json(err);
        }
    }

}
