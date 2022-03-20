const crudModel = require('../models/crud-model');
const { body,validationResult } = require("express-validator");

module.exports={
    readForm:function(req, res,next) {
       res.render('crud-operation');
   },
    createCrud: function (req, res, next) {
        const newData = crudModel.createCrud(req,res);
        res.send(`${newData}`);
    },
   fetchCrud:function(req,res,next){
       const fetchData=crudModel.fetchCrud();
       res.send('<h1>'+fetchData+'</h1>');
       
   },
   editCrud:function(req,res,next){
       const editId=req.params.id;
       const editData= crudModel.editCrud(editId);
       res.render('crud-operation',{editData:editData,editId:editId});
   },
   UpdateCrud:function(req,res,next){
        const updateId=req.params.id;
        const updateData= crudModel.UpdateCrud(updateId);
        res.send('<h1>'+updateData+'</h1>');
   },
   deleteCrud:function(req,res,next){
       const deleteId=req.params.id;
       const deleteData= crudModel.deleteCrud(deleteId);
       res.send('<h1>'+deleteData+'</h1>');
   }
}