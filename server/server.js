var express = require("express");
var path = require("path");

var schoolController = require("./controllers/schoolController");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use("/api", schoolController);

var port = process.env.PORT || 5000;
app.listen(port,function(){
    console.log("Started listening on port", port);
})
