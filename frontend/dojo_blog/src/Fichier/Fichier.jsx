import'./fichier.css'
import {useHistory} from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import StarIcons from "@mui/icons-material/Star"
import PersonIcons from "@mui/icons-material/Person"
import AccessAlarmsIcons from "@mui/icons-material/AccessAlarms"
import { useState } from 'react'
import axios from "axios"



function Fichier() {


  const [selectFils,setSelectFils] = useState(null)

  const handleFilesChange = (e)=>{
     const file = e.target.files[0]

      if (file) {
        setSelectFils(file)
      }
  }
    const history = useHistory()

   const handleabandonne = ()=>{
    return history.push("/")
   }

   const handleUpload = () => {
    if (!selectFils) {
      console.error('Aucun fichier sélectionné.');
      return;
    }
    const formData = new FormData();
    formData.append("file", selectFils);
      const response = axios.post('http://localhost:5000/api/mail', formData
      )
      .then(()=>{
        console.log(response.data);
           setSelectFils(response.data)
      })
      . catch((error)=>{
         console.log(error);
      })

    
  };


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
    <div className='touteFichier'>
    <div className='fichier'>
        <h1 style={{fontSize:"25px"}}>Vous pouvez importer votre curriculum Vitae</h1>
        <span>Cliquer cette boutton pour  ce faire</span>
        <input 
        type="file" 
        accept='.pdf, .doc, .docx'
        onChange={handleFilesChange}
        style={{cursor:"pointer"}}/>
            {
            selectFils && <span>Type de cette fichier : {selectFils.type}</span>    
            }
       <div className="buutton">
        <button style={{width:"90px",
         height:"30px",
         border:"none", 
         backgroundColor:"tomato", 
         color:"white", 
         borderRadius:"10px",fontSize:"13px",cursor:"pointer"}}
         onClick={handleabandonne}>Abandonner</button>
        <button
        style={{width:"90px",
        height:"30px",
        border:"none", 
        backgroundColor:"blue"
        ,fontSize:"13px", 
        color:"white", 
        borderRadius:"10px",cursor:"pointer"}}
        onClick={handleUpload}
        >Envoyer</button>
       </div>
    </div>
    <div className="leftFichier">
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
    
    </div>
  )
}

export default Fichier