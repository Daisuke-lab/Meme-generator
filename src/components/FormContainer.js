import React from 'react'
import Form from './FormComponent'

class FormContainer extends React.Component{
    // constructor = __init__
    constructor() {
      super()
      this.state = {
        loading: false,
        quita_data: [],
        firstname:'',
        lastname:'',
        age: '',
        gender:'',
        destination:'',
        dietaryRestrictions: {
          vegan: false,
          kosher: false,
          lactosefree: false
        }
      }
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick(e) {
      // name == e.target.name
      // you need to copy e.target before putting data in setState
      const {name, value, type, checked} = e.target
      // you need [] when inside of e.target.name is string
      if (type === 'checkbox') { 
        this.setState(prevState => {
        const updated = !prevState.dietaryRestrictions[name]
        return ({dietaryRestrictions: updated})
        })
      } else {
        this.setState({[name]:value})
    }
  }
  
  
  
      render () {
          return(
        <Form handleClick={this.handleClick} data={this.state}/>
          )
    }
  }

  export default FormContainer 