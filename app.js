const express = require("express");
const path = require("path")
const bodyParser = require("body-parser")

const app = express();
const userRoutes = require("./routes/user")
const {adminRoutes} = require("./routes/admin")
 
const {mongodbConnector} = require("./utils/database")

app.set("view engine","ejs");
app.set("views","views");

app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.urlencoded({extended:false}))

app.use("/post", (req, res, next)=>{
    // console.log("Post Middleware");
    next();
})
app.use((req, res, next)=>{
    // console.log("Parent Middleware");
    next();
})
app.use("/admin",(req,res, next)=>{
    // console.log("Admin Middleware approved")
    next();
})
app.use(userRoutes); 
app.use("/admin",adminRoutes);


mongodbConnector()
app.listen(8080);