import UserAvatar from "./UserAvatar";
import React from "react";
import './UserCard.css'
class UserCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Card">
                <div className="Card_header">
                <UserAvatar src={this.props.user.picture.large} width='140'/>
                </div>
                <h2>{this.props.user.name.first} {this.props.user.name.last}</h2>
                {this.props.user.email}
            </div>
        );
    }
 

}

export default UserCard;