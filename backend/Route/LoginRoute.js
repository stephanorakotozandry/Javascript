
const bcrypt = require("bcrypt")
const route = require("express").Router()
const AuThToken = require("../AuthToken/AuthToken")
const Joi = require("joi")
const { Canditat } = require("../Model/Candidat")

route.post("/", async(req,res)=>{
   const Schema = Joi.object({
    Email: Joi.string().min(3).max(30).required().email(),
    Password: Joi.string().min(4).max(30).required()
   });

   const {error} = Schema.validate(req.body)

   if (error) {
     return res.status(400).send(error.details[0].message)
   }
   let candidat = await Canditat.findOne({Email : req.body.Email})

   if (!candidat) {
    return res.status(400).send("invalide email ou mot de passe...")
   }

   const valider = await bcrypt.compare(req.body.Password, candidat.Password)
   if (!valider) {
     return res.status(404).send("invalide email ou mot de passe...")
   }
   const token = AuThToken(candidat)
   res.send(token)
})
module.exports=route;