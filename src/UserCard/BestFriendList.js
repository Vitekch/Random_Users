import BFCard from "./BestFriendCard";
import React from "react";
import './UserCard.css';
import { useSelector} from 'react-redux';



function BFList(props){

    function connctToStore(){
        this.props.store.subscribe(()=>{
            this.setState(()=>{
                return {content:this.props.store.getState()};
            });
        });
    }

            const friends=useSelector((state)=>state.friendList);
            
            var friendListArr=[];
            let i=0;
            let title;
           
            friends.forEach(el => {
                
                friendListArr.push(
                    <div className="col-lg-3" key={i}><BFCard id={i} usr_id={el.id} nameFirst={el.fname} nameLast={el.lname} avatar={el.avatar}/></div>    )
                    i++;
             });
             if(friendListArr.length>0)
             title=<h1>Друзья</h1>
         else
             title='';
            return(
                
                <div className="BFList">
                    {title}
                <div class="container List ">
                    <div class="row">
                       {friendListArr}
                    </div>
                </div>
                </div>
            );
}

export default BFList;