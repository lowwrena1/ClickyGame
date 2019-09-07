import React from "react"; 
//import "./Header.css";
const Header = props => (
<div className="header">
    <div className="title">{props.children}</div> 
    <div className="scores">
    <p>Score: {props.score} Highscore: {props.highscore}</p>
    </div> 
    

    
 </div>
);

export default Header;