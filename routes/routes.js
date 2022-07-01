//Routes folder having get and post request and middleware from controller (Folder/File)
const express = require('express')
router = express.Router();
//Import controller File from controller Folder
controllerRoute = require('../controller/controller')
//variables to export to app.js
const getRoutes = router.get('/', controllerRoute.getFormData)
const postRoutes = router.post('/submit', controllerRoute.postFormData)
//exports to app.js
module.exports = {getRoutes, postRoutes}