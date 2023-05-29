import { Component } from "react";
import Form from "./Form";
import './App.css'
import { v4 as uuidV4 } from 'uuid'
import EditDetails from "./EditDetails";
import Button from 'react-bootstrap/Button'

class App extends Component {
  state = {
    myState:[] 
  } 

  handleSubmit = (e) => {
    e.preventDefault()
    const temp = {
      id: uuidV4(),
      name: e.target.formName.value,
      email: e.target.formEmail.value,
      contact: e.target.formContact.value,
    }
    this.setState({myState: [...this.state.myState, temp]})
    e.target.formName.value = ''
    e.target.formEmail.value = ''
    e.target.formContact.value = ''
  }


  handleSave = (e) => {
    e.preventDefault()  
    const mappedState = this.state.myState.map( (item)=>{
      if(e.target.id == item.id){  
        return ({...item, id:e.target.id, name:e.target.name.value, email:e.target.email.value, contact: e.target.contact.value})
      } 
      return item
    } )
    this.setState( {myState: mappedState} )
 }



  handleDelete = (e) => {
    const filteredState = this.state.myState.filter( (item)=>{
      return (item.id !== e.target.id)
    } )
    this.setState({myState: filteredState})
  }
  render() {
    const temp = this.state.myState.map( (item)=>{
      const handleChange = (e) => {
        item.name = e.target.value
      }
      return(
      <div key={item.id} className="response">
        <h2>User Details</h2>
        <h3>{item.name}</h3>
        <h3>{item.email}</h3>
        <h4>{item.contact}</h4>
        <div className="buttonContainer">
          <EditDetails handleSave={this.handleSave} handleChange={handleChange} myState={item} updateUser={this.updateUser}/>
          <Button variant="danger" id={item.id} onClick={this.handleDelete}>Delete User</Button>
        </div>
      </div>
      )
    } )

    return (
      <div className="Container">
        <Form handleSubmit={this.handleSubmit}/>

        <div className="responseContainer">
          {temp}
        </div>
      </div>
    )
  }
}



export default App