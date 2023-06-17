const mongo=require('mongoose');
const schema=mongo.Schema;

const User=new schema({
    name:String,
    email:String,
    cin:Number,
});

module.exports=mongo.model("user",User);