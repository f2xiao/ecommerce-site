const express = require('express');
const crudController=require('../controllers/crud-controller');
const router = express.Router();
// curd form route
router.get('/', crudController.readForm );
router.get('/form', crudController.readForm );
// create data route
router.post('/create', crudController.createCrud);
// display data route
router.get('/fetch', crudController.fetchCrud);
// edit data route
router.get('/edit/:id', crudController.editCrud);
// update data route
router.post('/edit/:id', crudController.UpdateCrud);
// delete data route
router.get('/delete/:id', crudController.deleteCrud);
module.exports = router;