import'./footer.css'
import {Button} from "@mui/material"
import PhoneIcons from "@mui/icons-material/Phone"
import MailIcons from "@mui/icons-material/Mail"
function Footer() {

  return (
    <div className='footer'>
        <div className="rigth">
          <Button style={{backgroundColor:"rgb(3, 3, 110)",border:"1px solid white",color:"white"}}>Technologie utilser</Button>
          <span className='techno'>
            <ul>
              <li>React js</li>
              <li>Laravel</li>
              <li>Vu js</li>
            </ul>
            <ul>
              <li>Java</li>
              <li>Angular</li>
              <li>Python</li>
            </ul>
          </span>
        </div>
        <div className="center">
          <Button style={{backgroundColor:"rgb(3, 3, 110)",border:"1px solid white",color:"white"}}>Autre</Button>
          <div className="autre">
            <span>Avantage dans notre société</span>
            <span>Tous les stagiaire sont possible d'embauché</span>
            <span>Yl y a de loisire, promenade ensemble et Cantine</span>
            <span>Colaborer avec OSTI </span>
          </div>
        </div>
        <div className="left">
          <Button style={{color:"white",backgroundColor:"rgb(3, 3, 110)",border:"1px solid white"}}>Plus des contacts</Button>
          <span style={{fontFamily:"cursive"}}>Voila si vous nous voulez de contacter</span>
          <div className="contact">
            <span >
             <MailIcons style={{ fontSize:"20px", marginRight:"10px"}}/>
            mklc@recrut.com
            </span>
            <span>
              <PhoneIcons style={{ fontSize:"20px", marginRight:"10px"}}/>
              + 261 346212225
              </span>
          </div>
          </div>
    </div>
  )
}

export default Footer