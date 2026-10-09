import { Component } from 'react'
import Form from './components/Form'
import UserList from './components/UserList'
import './App.css'

class App extends Component{
  state = {
    userInfo: [],
  }

  handleApp = (data) => {
    console.log("Отримали дані в App:", data);

    this.setState((prev) => ({userInfo: [...prev.userInfo, data]}))
    
    // this.setState({
    //   userInfo: [data]
    // })
  }

  render(){

    return(
      <>
      <Form onApp={this.handleApp}/>
      <UserList userData={this.state.userInfo}/>
      </>
    )
  }
}

export default App
