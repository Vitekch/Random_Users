import UserList from './UserList';
import React from 'react';
import './UserCard.css';
import logo from './Paw.gif';
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
      if(this.state.loaded&&!this.state.loading)
      return (
        <div>
          <div className="header">
          <button  className="btn btn-danger bt" onClick={this.Click}>Получть информацию о дебилах</button>
          </div>
          <UserList users={this.state.users}/>
        </div>
      );
      else if(!this.state.loaded&&!this.state.loading)
      return (
        <div>
           <div className="header">
          <button  className="btn btn-danger bt" onClick={this.Click}>Получть информацию о дебилах</button>
          </div>
        </div>
      );
      else
      return (
        <div>
           <div className="header">
           <button  className="btn btn-danger bt" onClick={this.Click}>Получть информацию о дебилах</button>
          </div>
          <img src={logo}/>
        </div>
      );
      
      
    }
    }
    
    export default UButton;