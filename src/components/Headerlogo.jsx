import React from "react";
import ReactDOM  from "react-dom";
import Logo from "../assets/tvs-logo.png";
function Headerlogo()
{
    return (
         <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-primary" alt="logo">
        <img src={Logo} style={{marginRight:'400px'}}/> 
    
        <h1 style={{justifyContent:"center"}}> Employee Leaderboard </h1>
        </nav>
        );
}
export default Headerlogo;