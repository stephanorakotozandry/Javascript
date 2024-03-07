import './NaveBar.css'
import Login from '../Login/Login'
import NavBotom from './NaveBotom/NavBotom'

const NaveBareLogin = () => {
  return (
    <div>
    <div className="sticky">
    <NavBotom/> 
    </div>
    <Login/>     
</div>
  )
}

export default NaveBareLogin