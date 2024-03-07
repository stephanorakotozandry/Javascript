
const bcrypt = require("bcrypt")
const route = require("express").Router()
const AuThToken = require("../AuthToken/AuthToken")
const Joi = require("joi")
const { Canditat } = require("../Model/Candidat")

route.post("/", async(req,res)=>{
   const Schema = Joi.object({
    Nom: Joi.string().min(3).max(30).required(),
    Prenom: Joi.string().min(3).max(30).required(),
    Proffession: Joi.string().min(3).max(30).required(),
    Email: Joi.string().min(3).max(30).required().email(),
    Password: Joi.string().min(4).max(30).required()
   });

   const {error} = Schema.validate(req.body)

   if (error) {
     return res.status(400).send(error.details[0].message)
   }

   let candidat = await Canditat.findOne({Email : req.body.Email})

   if (candidat) {
    return res.status(400).send("user existe deja ...")
   }

   candidat = new Canditat({
    Nom : req.body.Nom,
    Prenom : req.body.Prenom,
    Proffession : req.body.Proffession,
    Email : req.body.Email,
    Password : req.body.Password,
   })

   const salt = await bcrypt.genSalt(10)
   candidat.Password = await bcrypt.hash(candidat.Password,salt)
    
   candidat = await candidat.save()

   const token = AuThToken(candidat)
   res.send(token)
})
module.exports=route;