require('dotenv').config();
const express= require("express");
const db=require("./models/index");
const dogRoutes=require("./routes/dog");
const fileUpload = require('express-fileupload');
const swaggerUi = require('swagger-ui-express');
// Express Configuration
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(require('yamljs').load("./swagger.yaml")));
//Run Db 
db.connectDb();
//File Upload Configure Route
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
//Connect Routes
app.use(dogRoutes);
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server started at port ${port}`);  
})    