
import { useDispatch, useSelector} from 'react-redux'
import { useGetAllOffreQuery } from '../ReduxOffre/OffreApi'
import'./body.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import MenuBookIcons from "@mui/icons-material/MenuBook"
import LaptopIcons from "@mui/icons-material/Laptop"
import PersonIcons from "@mui/icons-material/Person"
import SearchIcons from "@mui/icons-material/Search"
import BookmarkAddIcons from "@mui/icons-material/BookmarkAdd"
import {addToFichier} from "../ReduxFichier/AddSlice"
import { useEffect,  useState } from 'react'
import axios from "axios"

function useLoader() {
   const [data,setData] = useState()

   const loader =(route)=>{
    axios.get(route)
    .then((reponse)=>{
      setData(reponse.data);
    }).catch((error)=>{
      console.log(error);
    })
   }

   return [data,loader]
}

function Body() {

  const {isLoading} = useGetAllOffreQuery()
  const [information,setInfo] =useLoader()


  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(()=>{
    setInfo("http://localhost:5000/api/offre")
  },[setInfo])

 


 const add = useSelector((state) => state.add)
 console.log(add);
  const handlePostule = (offre)=>{
    history.push("/login") 
    dispatch(addToFichier(offre))
  }
 
  

  return (
      <div className='body'>
      <div className="lef">
        <div className="menu">
         <span><MenuBookIcons/></span>
          Tous les menus
        </div>
        <div className="searche">
          <input placeholder="recherche..." />
          <span className='recherche'><SearchIcons /></span>
        </div>
        <ul>
          <li>
            <span><LaptopIcons style={{fontSize:"20px"}}/></span>
            Informatique
            </li>
          <li>
            <span><PersonIcons style={{fontSize:"20px"}}/></span>
            Ressources Humains
            </li>
          <li>
            <span><BookmarkAddIcons style={{fontSize:"20px"}}/></span>
            Gestionnaire
            </li>
          <li>
            <span><MenuBookIcons style={{fontSize:"20px"}}/></span>
            Comptable
            </li>
        </ul>
      </div>
      <div className='bodys'>
        { isLoading ? <p>Loading ...</p>
           : 
           ( information.map((offre) =>        
           <div key={offre.id} className="listeJob">
            <div className="post">
            <span >Post:</span>
            <span> {offre.Post}</span>
            </div>
            <div className='mission'>
              <span>Mission:</span>
              <span>{offre.Mission}</span>
            </div>
            <div className='profil'>
              <span>Profil:</span>
              <span> {offre.Profil}</span>
            </div>
            <div className="button">
           <button className='detaille' onClick={()=>handlePostule(offre)}>Postulé</button>
           </div>
           </div>
           ))}
           </div>
      </div>
  )
}

export default Body