import React from "react";
import './UserCard.css';
function UserAvatar(props){
 
        return(
            <img className="Avatar" src={props.src} width={props.width} alt=":)"/>
        )
    
}

export default UserAvatar;