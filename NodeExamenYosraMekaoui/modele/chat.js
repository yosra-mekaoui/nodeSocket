const mongo=require('mongoose');
const schema=mongo.Schema;

const Chat=new schema({
    msg: String,
    date: Date,
});

module.exports=mongo.model("chat",Chat);