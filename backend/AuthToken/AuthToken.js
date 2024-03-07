const jwt = require("jsonwebtoken")

const AuthToken = (candidat)=>{
    const secretkey = process.env.SECRET_KEY;

    const token = jwt.sign({
        _id: candidat._id,
        Nom: candidat.Nom,
        Email: candidat.Email
    },
    secretkey
    )
    return token
    
}
module.exports = AuthToken;