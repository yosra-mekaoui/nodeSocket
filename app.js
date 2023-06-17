const express=require('express');
const http=require('http');
const mongo=require('mongoose');
const bodyParser = require("body-parser");
const mongoconnection=require('./config/mongoconnection.json');
var path = require("path")




// =========== Database Connection ==============
mongo.connect('mongodb://127.0.0.1:27017/YosraMekaoui', {
   // mongoose.connect('mongodb+srv://@gewinner.xsbnq.mongodb.net/gewinner-api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to database successfully ');
    }).catch(() => {
        console.log('ERROR : unable to connect to database ');
    });


// ============= configuration express ================
var app=express();

app.set("views" , path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ============ routes =================
/*const useRouter=require('./routes/user');
app.use("/user", useRouter);*/

// ========= server creation =============
const server=http.createServer(app);

//----socket io 9otlou rak bch trauny 3a server te3i-------------
const io = require("socket.io")(server);
io.on("connection", (socket) => {
    console.log("User connected");
    socket.emit("msg", "A new user is connected");
    socket.on("typing", (data) => {
        socket.broadcast.emit("typing", data);
    });
socket.on("disconnect", () => {
    io.emit("msg", "An user is disconnected");
});
})
//-------------------------
server.listen(3000,()=>console.log("server is run"));