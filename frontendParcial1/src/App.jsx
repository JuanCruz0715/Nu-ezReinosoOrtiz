import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { AgentsContainer } from "./Components/AgentsContainer/AgentsContainer";
import { GunsContainer } from "./Components/GunsContainer/GunsContainer";
import { MapsContainer } from "./Components/MapsContainer/MapsContainer";
import Navbar from "./Components/NavBar/Navbar";
function RoutesApp() {
  return (
    <>
      <Navbar />
      <Routes>
      
   <Route path='/' element ={<Home />} />
   <Route path='/login' element ={<Login />} />
   <Route path='/Agents' element ={<AgentsContainer/>} />
   <Route path='/weapons' element={<GunsContainer/>}/>
      </Routes>
    </>
  );
}
function RouterWrapper() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default RouterWrapper;
