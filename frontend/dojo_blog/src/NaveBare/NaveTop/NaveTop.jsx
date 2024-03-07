import'./NaveTop.css'
import { Link } from "react-router-dom"
import GithubIcons from "@mui/icons-material/GitHub"
import TwitterIcons from "@mui/icons-material/Twitter"
import FacebookIcons from "@mui/icons-material/Facebook"
import EmailIcons from "@mui/icons-material/Email"

function NaveTop() {
  return (
    <div className='navetop'>
       <h1><span style={{color:"blue",
       fontFamily:"-moz-initial",
       fontWeight:"bold"}}>L</span>
       <span style={{color:"tomato",
       fontSize:"20px",
       fontWeight:"bold",
       fontFamily:"-moz-initial"}}>K</span>
       <span style={{fontFamily:"-moz-initial",
        fontWeight:"bold"}}>M</span>
        <span style={{color:"black",
         fontSize:"20px",
         fontFamily:"-moz-initial",
         fontWeight:"bold"}}>C</span></h1>
       <div  className="contact">
        <Link  style={{color:"white",display:"flex",
         justifyContent: "space-between",
          gap:"0.5rem"
          }}>
           <EmailIcons style={{fontSize:"20px"}}/>
           <GithubIcons  style={{fontSize:"20px"}}/>
           <TwitterIcons style={{fontSize:"20px"}}/>
           <FacebookIcons style={{fontSize:"20px"}}/>
        </Link>
       </div>
    </div>
  )
}

export default NaveTop