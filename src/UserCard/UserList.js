import UserCard from "./UserCard";
import React from "react";
import './UserCard.css';

class UserList extends React.Component{
    constructor(props){
        super(props);
       
    }
 


    render(){
            const user_list= this.props.users.results.map((user,key)=>{ return <div class="col-lg-3"><UserCard user={user}/></div>})
            
            return(
                <div class="container List">
                    <div class="row">
                       {user_list}
                    </div>
                </div>
            );
    }
}

export default UserList;