

import NavBotom from "./NaveBotom/NavBotom"
import"./NaveBar.css"
import Bodys from "../Bodys/Bodys"





function NaveBareBody() {
  return (
    <div>
        <div className="sticky">
        <NavBotom/> 
        </div>
        <Bodys/>     
    </div>
  )
}

export default NaveBareBody