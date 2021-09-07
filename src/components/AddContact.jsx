import React, { Component } from 'react'

export default class AddContact extends Component {
  state ={
    name: "",
    email:""
  }

   add = (e) => {
     e.preventDefault();
     if(this.state.name === "" || this.state.email === "") {
       alert("All the fields are compulsory!");
       return
     }

    this.props.addContactHandler(this.state);
    this.setState({name: "", email: ""})
   }

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} type="text" name="name" placeholder="Name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input value={this.state.email} type="text" name="name" placeholder="Name" onChange={(e) => this.setState({email: e.target.value})} />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    )
  }
}
