const {Course} = require('../models');
module.exports = {
    async getCourses(req, res){
        try{
            const course = await Course.find();
            res.json(course);
        } catch(err){
            res.status(500).json(err);
        }
    },
    async getOneCourse(req, res){
        try{
            const idForOne = req.params.id;
            const oneCourse = await Course.findOne(idForOne);
            res.json(oneCourse);

        } catch(err){
            res.status(500).json(err);
        }
    },
    async createCourse(req, res){
        try{
            const course = await Course.create(req.body);
            res.json(course);
        } catch(err){
            res.status(500).json(err);
        }
    },
    async updateCourse(req, res){
        try{
            console.log(req.body, req.params);
            const updated = await Course.findByIdAndUpdate({_id: req.params.courseId}, {$set: req.body});
            res.json(updated);
           
        } catch(err){
            res.status(500).json(err);
        }
    },
    async deleteCourse(req, res){
        try{
            const id = req.params.courseId
            const deleted = await Course.findByIdAndDelete(id);
            res.json(deleted);
        } catch(err){
            res.status(500).json(err);
        }
    }
};

