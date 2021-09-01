
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import UButton from './UserCard/GetUsers';

class App extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
  return(
    <div className="App">
 
      <UButton/>

    </div>
  )
  }
}

export default App;
