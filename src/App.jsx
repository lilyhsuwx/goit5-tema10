import { Component } from 'react'
import Form from './components/Form'
import './App.css'

class App extends Component{

  handleApp = (data) => {
    console.log("Отримали дані в App:", data);
    
  }

  render(){

    return(
      <>
      <Form onApp={this.handleApp}/>
      </>
    )
  }
}

export default App
