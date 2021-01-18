import React, { Component } from 'react'
import axios from 'axios';
import EmployeeForm from './EmployeeForm'


class Employee extends Component {

  state = {
    first_name: "",
    last_name: "",
    email: ""
  };

  handleChange = e => {
    this.setState({
          [e.currentTarget.name]: e.currentTarget.value
      })
    }

  handlePost = e => {
    e.preventDefault()
  
    const data = JSON.stringify({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email 
    })

    axios.post('http://192.168.2.78/employee', data, { headers: {'Content-Type': 'application/json' }})
    .then((res) => {
      console.log(res)
    })
    
  }
  render() {
    const {first_name, last_name, email} = this.state
    return (
      <div style={{ height: 800, width: '100%'}} >
        <EmployeeForm first_name={first_name }last_name={last_name} email={email} handleChange={this.handleChange} handlePost={this.handlePost}/>
      </div>
    )
  }
}

export default Employee;