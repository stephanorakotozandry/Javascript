const mongoose = require("mongoose")

const CanditaSchema = new mongoose.Schema({
 Nom:{
    type:String,
    require:true
 },
 Prenom:{
   type:String,
   require:true
},
Proffession:{
   type:String,
   require:true
},
 Email:{
    type:String,
    require:true
 },
 Password:{
    type:String,
    require:true
 },

})

 const Canditat = mongoose.model("Candidat", CanditaSchema)
 exports.Canditat = Canditat;