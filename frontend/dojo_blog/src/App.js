import {BrowserRouter, Route, Switch } from "react-router-dom"
import"./App.css"
import NaveBareBody from "./NaveBare/NaveBareBody"
import Footer from "./Footer/Footer"
import NaveTop from "./NaveBare/NaveTop/NaveTop"
import NaveBareLogin from "./NaveBare/NaveBareLogin"
import NaveFichier from "./NaveBare/NaveFichier"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"



export default function App() {

  return(
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <NaveTop/>
      <Switch>
      <Route path="/" exact component={()=> <NaveBareBody/>}/>
      <Route path="/login" component={()=> <NaveBareLogin/>}/>
      <Route path="/cv" component={()=> <NaveFichier/>}/>
      </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}