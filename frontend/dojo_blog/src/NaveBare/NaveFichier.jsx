import Fichier from '../Fichier/Fichier'
import'./NaveBar.css'
import NavBotom from './NaveBotom/NavBotom'

function NaveFichier() {
  return (
    <div>
    <div className="sticky">
    <NavBotom/> 
    </div>
    <Fichier/>     
 </div>
  )
}

export default NaveFichier