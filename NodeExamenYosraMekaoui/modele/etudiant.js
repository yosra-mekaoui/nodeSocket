const mongo=require('mongoose');
const schema=mongo.Schema;

const Etudiant=new schema({
    nom:String,
    prenom:String,
    email:String,
    cin:Number,
    Option:{
        type: String,
        enum: ['Twin' , 'SIM' ,'SE'],
        required:true
    }
});

module.exports=mongo.model("etudiant",Etudiant);