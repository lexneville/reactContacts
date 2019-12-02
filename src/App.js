import React from 'react';
import './App.css';
import {Contacts} from './components/Contacts.js'

class App extends React.Component {

  state = {
    contact: "",
    list: [],

  }


  handleClick = () => {
    console.log("Button was clicked");
    if (this.state.contact !== "") {
      const newList = [...this.state.list];
      newList.push(this.state.contact);
      this.setState({
        list: newList,
        contact: "",     
      })
    } else {
      return
    }
  }
 
  handleContact = (e) => {
    console.log(e)
    this.setState({
      contact: e.target.value
    })
  }

  handleDelete = (index) => {
    console.log(`my index is ${index}`);
    const newList = [...this.state.list];
    newList.splice(index, 1);
    this.setState({
      list: newList
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <h1>CONTACT LIST</h1>
        <input id="inputContact" type="text" placeholder="Enter your number" onChange={this.handleContact} value={this.state.contact}/>
        <button id="addContact" onClick={this.handleClick}>Add Contact</button>
        <Contacts allContacts={this.state.list} deleteFuncProp={this.handleDelete}/>
      </div>
    )
  }
}

export default App;
