const express = require("express")
const cors = require("cors")
const multer = require("multer")
const nodemailer =require("nodemailer")
const app = express();
const mongoose = require("mongoose");
const offre = require("./Model/Offre")
const candidat = require("./Route/candidatsRoute")
const Login = require("./Route/LoginRoute")

require("dotenv").config()



//midleware
app.use(cors())
app.use(express.json())

const storage = multer.memoryStorage()
const upload = multer({storage})

//route
app.get("/api/offre", (req,res)=>{
    res.send(offre)
})

app.post("/api/mail", upload.single('file'), (req, res)=>{
    const file = req.file

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rovaniainarakotozandry2@gmail.com', // Remplacez par votre adresse e-mail
          pass: 'garou123,./'     // Remplacez par votre mot de passe
        }
})

const mailOptions = {
    from: 'rovaniainarakotozandry2@gmail.com',
    to: '2ratefiarison@gmail.com.com', // Remplacez par l'adresse e-mail du destinataire
    subject: 'Fichier Joint',
    text: 'Veuillez trouver ci-joint le fichier.',
    attachments: [
      {
        filename: file.originalname,
        content: file.buffer
      }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi du fichier par e-mail :', error);
      res.status(500).send('Erreur lors de l\'envoi du fichier par e-mail.');
    } else {
      console.log('E-mail envoyé avec succès :', info.response);
      res.status(200).send('E-mail envoyé avec succès.');
    }
  });

})

app.use("/api/candidat", candidat)
app.use("/api/login", Login)





//serveure
const Port = process.env.PORT || 5000 
app.listen(Port, console.log(`serveur runing in http://localhost:${Port}`))


//connexion
const url = process.env.DB_URL
mongoose.connect(url, {
    dbName:"recrute"
})
.then(()=>{
    console.log("connexion successfull..");
})
.catch((Error)=>{
   console.log(Error);
})
