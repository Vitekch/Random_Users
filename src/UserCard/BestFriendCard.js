import UserAvatar from "./UserAvatar";
import React from "react";
import {delAction} from '../actions/friendActions';
import {useDispatch } from 'react-redux';

import './UserCard.css'
function BFCard(props){
    const dispatch=useDispatch();

   function delButton(){
        let btn=document.getElementById('btn_'+props.usr_id);
        if(btn)
            btn.disabled=false;
        dispatch(delAction({id:props.id}))
    }

        return(
            
            <div className="BFCard">
                <div className="BFCard_header">
                <UserAvatar src={props.avatar} width='140'/>
                </div>
                <h2>{props.nameFirst} {props.nameLast}</h2>

                <button className="bt btn btn-danger" onClick={delButton} style={{position:'absolute',bottom:30,left:'25%',right:'25%'}}><span>Удалить из друзей</span></button>
            </div>
        );
    
 

}
//<UserAvatar src={this.props.user.picture.large} width='140'/>
export default BFCard;