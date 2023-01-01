import React from "react";
import './Page.css';
import burger from "./burger.png";
import location from "./location.png";
// import search from "./search.png"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

function Page(){
    return(
       <div className="page">
            <div className="top-bar">
                <div className="foodwagon">
                    <img src={burger} alt="Burger icon" width="28" height="29.98"/>
                    <p>food</p>
                    <p style={{color: "#FFB30E"}}>wa</p>
                    <p style={{color: "#FFB30E" , fontWeight: "900", fontSize: "25px", marginTop: "37px"}}>G</p>
                    <p style={{color: "#FFB30E"}}>on</p>
                </div>
                <div className="delivery">
                    <p>Deliver to:</p>
                    <img src={location} alt="location icon" width="auto" height="18"/>
                    <p style={{fontWeight: "400"}}>Current Location &nbsp;</p>
                    <p>Mohammadpur Bus Stand, Dhaka</p>
                </div>
                <div className="searchAndLogin">
                    <SearchIcon sx={{ color: '#FFB30E' , stroke: "#FFB30E" ,strokeWidth: "1.5"}} style={{margin: "0 5px 0 0"}}/>
                    <p>Search Food</p>
                    <button className="login-btn"> <PersonIcon sx={{ color: '#F17228' , height: "30px", width: "auto", marginRight:"10px"}}/> Login </button>
                    {/* <button>Default</button>; */}
                </div>
            </div>
            <div className="starving">
                <p>Are you starving</p>
            </div>
       </div>
    )
}

export default Page;