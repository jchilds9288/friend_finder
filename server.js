const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const htmlRouter = require("./app/routing/htmlRoutes")
const apiRouter = require("./app/routing/apiRoutes")
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.static(__dirname + '/public'));

//routes
app.use("/", htmlRouter)
app.use("/api",apiRouter)

// app.use((req, res, next)=>{
//     let error = new Error("Not Found")
//     error.status=404
//     next(error)
// })

// app.use((err, req, res)=>{
//     if (error){
//         console.error(error)
//     } 

//     res.json({messgae:error.message})
// })

app.listen(PORT, ()=>{
    console.log("webserver started")
})




