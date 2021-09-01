import UserAvatar from "./UserAvatar";
import React from "react";
import './UserCard.css';
import {addAction} from '../actions/friendActions';
import { useSelector, useDispatch } from 'react-redux';



function UserCard(props){
    const friends=useSelector((state)=>state.friends);
        const dispatch=useDispatch();

    function addButton(){
        
        console.log(friends)
        dispatch(addAction({id:props.id,fname:props.user.name.first, lname:props.user.name.last, avatar:props.user.picture.large}));
        let btn=document.getElementById('btn_'+props.id);
        btn.disabled=true;
    }

        return(
            <div className="Card">
                <div className="Card_header">
                <UserAvatar src={props.user.picture.large} width='140'/>
                </div>
                <h2>{props.user.name.first} {props.user.name.last}</h2>
                {props.user.email}
                <button className="bt btn btn-success" id={'btn_'+props.id} onClick={addButton} style={{position:'absolute',bottom:30,left:'25%',right:'25%'}}><span>Добавить в друзья</span></button>
            </div>
        );
    
 

}

export default UserCard;