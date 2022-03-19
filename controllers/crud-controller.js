const crudModel = require('../models/crud-model');
const { body,validationResult } = require("express-validator");

module.exports={
    crudForm:function(req, res) {
       res.render('crud-operation');
   },
    createCrud: [
        body('name', 'Genre name required').trim().isLength({ min: 1 }).escape()
       
   ],
   fetchCrud:function(req,res){
      
       const fetchData=crudModel.fetchCrud();
       res.send('<h1>'+fetchData+'</h1>');
       
   },
   editCrud:function(req,res){
       const editId=req.params.id;
       const editData= crudModel.editCrud(editId);
       res.render('crud-operation',{editData:editData,editId:editId});
   },
   UpdateCrud:function(req,res){
        const updateId=req.params.id;
        const updateData= crudModel.UpdateCrud(updateId);
        res.send('<h1>'+updateData+'</h1>');
   },
   deleteCrud:function(req,res){
       const deleteId=req.params.id;
       const deleteData= crudModel.deleteCrud(deleteId);
       res.send('<h1>'+deleteData+'</h1>');
   }
}