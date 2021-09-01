import UserList from './UserList';
import React from 'react';
import './UserCard.css';
import logo from './Paw.gif';
import BFList from './BestFriendList';

class UButton extends React.Component{
    constructor(props){
      super(props);
      this.state={loaded:false,users:{},loading:false};
      this.Click=this.Click.bind(this);
    }
    


    async Click(){
      this.setState({loading:true});
      let response=await fetch("https://randomuser.me/api/?results=10&inc=name,email,picture");
    

      if(response.ok){
        let data=await response.json();
        this.setState({users:data});
        this.setState({loaded:true});
      }
    setTimeout(()=>this.setState({loading:false}),3000);
    }
    
      
        
      
      
    
    render(){
      let content;
      let friends=<BFList />;
      if(this.state.loaded&&!this.state.loading)
        content= <UserList users={this.state.users} />;
      else if(!this.state.loaded&&!this.state.loading)
        content=<div></div>;
      else
        content=<img src={logo}/>;
      return (
        
        <div>
          <div className="header">
          <button  className="btn btn-danger bt" onClick={this.Click}>Получть информацию о пользователях</button>
          </div>
          
          {friends}

          {content}
        </div>
        
      );
     
      
      
    }
    }
    
    export default UButton;