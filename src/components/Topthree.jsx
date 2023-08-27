import React, { useState, useEffect } from "react";
import ReactDOM  from "react-dom";
function Topthree({firstThree})
{
  const firstThreeNames = firstThree ? firstThree.slice(0, 3):[];
  //const firstThreeNames = firstThree ? firstThree.slice(0, 3) : topthreeData.slice(0,3);
  //console.log("top 3 elements from Topthree component:"+{firstThreeNames});
  // const firstThreeNames = props.filteredData; 

   
return (
    <div className="threepics">
    <figure>     
    {firstThreeNames[1] && firstThreeNames[1].Employee_Photo.trim() && ( 
      <>
      <img className="PlaceTwo" src={require("../assets/"+(firstThreeNames[1].Employee_Photo.trim()))} alt="second place"/>
      <h3 style={{color:"silver"}}>{firstThreeNames[1] && <div>{firstThreeNames[1].Employee_Name}</div>}</h3> 
      <img className="TopStand" src={require("../assets/2nd_Place.jpg")} alt="Second place"/> 
     </>
    )}
      
    </figure>

    <figure className="PlaceOneFull">
    {firstThreeNames[0] && firstThreeNames[0].Employee_Photo && (
      <>
      <img className="PlaceOne" src={require("../assets/"+(firstThreeNames[0].Employee_Photo.trim()))} alt="First place"/> 
      <h3 style={{ color: "gold"}}>{firstThreeNames[0] && <div>{firstThreeNames[0].Employee_Name}</div>}</h3>
      <img className="TopStand" src={require("../assets/1st_Place.jpg")} alt="First place"/>
      </>
     )}
       
    </figure>

    <figure>
    {firstThreeNames[2] && firstThreeNames[2].Employee_Photo &&(
      <>
    <img className="PlaceThree" src={require("../assets/"+(firstThreeNames[2].Employee_Photo.trim()))} alt="Third place"/>   
    <h3 style={{color:"brown"}}>{firstThreeNames[2] && <div>{firstThreeNames[2].Employee_Name}</div>}</h3>
    <img className="TopStand" src={require("../assets/3rd_Place.jpg")} alt="Third place"/> 
   
    </>
    )} 
    </figure>
    </div>

);
}
export default Topthree;