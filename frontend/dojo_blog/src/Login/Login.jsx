import { Button } from '@mui/material'
import'./login.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import StarIcons from "@mui/icons-material/Star"
import PersonIcons from "@mui/icons-material/Person"
import AccessAlarmsIcons from "@mui/icons-material/AccessAlarms"
import {  useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { LoginAuth, registerAuth } from '../ReduxSlice/authSlice'
import  {toast} from "react-toastify"



function Login() {
const dispatch = useDispatch()
const history = useHistory()
const auth = useSelector(state => state.auth)
const [affichage,setAffichage] = useState(false)
const [register,setResister] = useState({
  Nom:"",
  Prenom:"",
  Proffession:"",
  Email:"",
  Password:"",
})



useEffect((offres)=>{
  if (auth._id) {
    history.push("/cv")
    toast.success("valider",
    {position:"bottom-left"})
  }
}, [auth._id, history,dispatch])



const handleLogin = (e)=>{
  e.preventDefault()
  dispatch(LoginAuth(register))
}


const handleSubmit = (e)=>{
  e.preventDefault()
 dispatch(registerAuth(register))

}

const handleChange = ()=>{
  setAffichage(!affichage)
}


    const settings = {
      dots:true,
      infinite:true,
      speed:600,
      slidesToShow:1,
      slidesToScroll:1,
      autoplay:true,
      appendDots:(dots)=>{
        return <ul style={{margin:"0px"}}>{dots}</ul>
      }
    }

  return (
    <div className='login'>
      <div className="pading">
      <div className="loginRigth">
        <div className="connecta">
          Vous pouvez conncter sur e-recrute
        </div>
        <div className='log'>
        <label  style={{fontSize:"12px"}}>Email</label>
        <input type="Email" placeholder='email' onChange={(e)=>setResister({...register, Email: e.target.value})} />
        <label style={{fontSize:"12px"}}>Mot de passe</label>
        <input type={affichage ? "text":"password"} placeholder='mot de passe' onChange={(e)=>setResister({...register, Password: e.target.value})}/>
        <div className="affichage">
        <input type="checkbox"
         checked={affichage}
         onChange={handleChange}
         style={{ width:"14px",height:"14px"}} />
        <span>Afficher mot de pass</span>
        </div>
        <div className="buttonlog">
        <Button style={{color:"gray",
        border:"1px solid blue", 
        fontWeight:"bold"}}
        onClick={handleLogin}
        >Login</Button>
        </div>
        </div>
      </div>
      <div className="inscription">
        <label style={{color:"gray"}}>Remplir le champ pour inscrire</label>
        <input type="text" placeholder='nom ' onChange={(e)=>setResister(  {...register, Nom : e.target.value})}/>
        <input type="text" placeholder='prénom' onChange={(e)=>setResister({...register, Prenom: e.target.value})}/>
        <input type="text" placeholder='Proffession' onChange={(e)=>setResister({...register, Proffession: e.target.value})}/>
        <input type="email" placeholder='email' onChange={(e)=>setResister({...register, Email: e.target.value})} />
        <input type="password" placeholder='mot de passe' onChange={(e)=>setResister({...register, Password: e.target.value})} />
        <Button style={{background:"blue",color:"white"}} onClick={handleSubmit}>s'inscrire</Button>
        {
          auth.registerStatus === "rejected" ? (<p>{auth.registerError}</p>) : null
        }
      </div>
      </div>
      <div className="description">
        <Slider {...settings}>
             <div className='image'>
              <img src="/image/rova.jpg" alt="rova" style={{width:"90%", padding:"5px",border:"1px solid grey",borderRadius:"10px",objectFit:"cover", marginRight:"30px",height:"200px"}}/>
             </div>
             <div className='image'>
             <img src="/image/Bionexx.jpg" alt="Bionexx" style={{width:"90%", padding:"5px",border:"1px solid grey",borderRadius:"10px",objectFit:"cover", marginRight:"30px",height:"200px"}} />
             </div>
             <div className='image'>
             <img src="/image/Bionexx.jpg" alt="Bionexx" style={{width:"90%", padding:"5px",border:"1px solid grey",borderRadius:"10px",objectFit:"cover", marginRight:"30px",height:"200px"}} />
             </div>
        </Slider>
         <div className="annonce">
          <span><StarIcons/></span>
          <span >TOP ANNONCES</span>
         </div>
        <hr style={{width:"330px",margin:"10px 0 0 0",color:"tomato"}} />
        <div className="language">
          <span style={{fontSize:"14px",fontFamily:"initial"}}>Développeur: </span>
          <span style={{fontSize:"12px",fontFamily:"initial", marginLeft:"80px"}}>- React js - Node Js</span>
          <span style={{fontSize:"12px",fontFamily:"initial",marginLeft:"80px"}}>- PHP</span>
          <hr style={{width:"180px", color:"rgb(247, 247, 247)"}}/>
        </div>
        <div className="joursPostul">
          <span><AccessAlarmsIcons/></span>
          <span>JOUR POUR POSTULER</span>
         </div>
        <hr style={{width:"330px",margin:"10px 0 0 0",color:"tomato"}} />
        <div className="language">
        <span style={{fontSize:"14px",fontFamily:"initial"}}>Tous les jours </span>
          <span style={{fontSize:"12px",fontFamily:"initial", marginLeft:"80px"}}>Date: janvier - Décembre 2023</span>
          <span style={{fontSize:"12px",fontFamily:"initial",marginLeft:"80px",color:"rgb(155, 233, 38)",fontWeight:"bold"}}>Développeur</span>
          <hr style={{width:"180px", color:"rgb(247, 247, 247)"}}/>
        </div>
        
          
        <div className="joursPostul" style={{marginTop:"5px"}}>
          <span><PersonIcons/></span>
          <span style={{marginRight:"30px"}}>SERVICE DU LKMC</span>
         </div>
        <hr style={{width:"330px",margin:"10px 0 0 0",color:"tomato"}} />
        <div className="service">
           <div className='recruteur'>Recruteur</div>
           <div style={{display:"flex"}}>
           <div className="vertical"/>
           <div style={{display:"flex", flexDirection:"column",padding:"5px",gap:"0.5rem"}}>
            <span className='descrit'>Diffusion des offre d'emploi</span>
            <span className='descrit'>Plateforme unique pour la gestion des candidats</span>
            <span className='descrit'>Consultation des profils des candidats</span>
           </div>
           </div>
           <div className='candidat'>Candidat</div>
           <div style={{display:"flex"}}>
           <div className="vertical1"/>
           <div style={{display:"flex", flexDirection:"column",padding:"5px",gap:"0.5rem"}}>
            <span className='descrit'>Consultation parmi une large offre d'emploi</span>
            <span className='descrit'>Postuler en ligne avec votre CV personnel</span>
           </div>
           </div>
        </div>
        
      </div>
    </div>
  )
}

export default Login