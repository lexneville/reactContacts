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
    const newList = [...this.state.list];
    newList.push(this.state.contact);
    this.setState({
      list: newList,     
    })
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
      <div>
        <h1>Hello World!</h1>
        <button id="addContact" onClick={this.handleClick}>Add Contact</button>
        <input type="text" placeholder="Enter your contact" onChange={this.handleContact}/>
        <Contacts allContacts={this.state.list} deleteFuncProp={this.handleDelete}/>
      </div>







    )
  }
    






}



export default App;
