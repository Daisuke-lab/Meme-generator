import React from 'react'

function Form(prop) {
    return (
        <main>
        <div className='App'>
          <form>
            <input type='text' name='firstname' onChange={prop.handleClick} placeholder='firstname'/>
            <br/>
            <input type='text' name='lastname' onChange={prop.handleClick} placeholder='lastname'/>
            <br/>
            <input type='text' name='age' onChange={prop.handleClick} placeholder='age'/>
            <br/>
            <label>
              <input type='radio' name='gender' value='Male' checked={prop.data.gender === 'male'}onChange={prop.handleClick}/>Male
              <br/>
              <input type='radio' name='gender' value='Female' checked={prop.data.gender === 'female'} onChange={prop.handleClick}/>Female
            </label>
            <br/>
            <select name='destination'onChange={prop.handleClick}>
              <option value='The UK'>The UK</option>
              <option value='The US'>The US</option>
              <option value='Japan'>Japan</option>
            </select>
            <br/>
            <label>
              <input type='checkbox' name='vegan' onChange={prop.handleClick} checked={prop.data.dietaryRestrictions.vegan}/>Vegan?
            </label>
            <br/>
            <label>
              <input type='checkbox' name='kosher' onChange={prop.handleClick} checked={prop.data.dietaryRestrictions.kosher}/>Kosher?
            </label>
            <br/>
            <label>
              <input type='checkbox' name='lactosefree' onChange={prop.handleClick} checked={prop.data.dietaryRestrictions.lactosefree}/>LactoseFree?
            </label>
            <br/>
            <button>Submit</button>
          </form>
          <p>---------------------------------------</p>
          <p>NAME: {prop.data.firstname} {prop.data.lastname}</p>
          <p>AGE: {prop.data.age}</p>
          <p>GENDER: {prop.data.gender}</p>
          <p>DESTINATION: {prop.data.destination}</p>
          <p>DIETARYRESTRICTIONS: {prop.data.dietaryRestrictions['vegan'] ?'Vegan':null}</p>
        </div>
        </main>
      )
}

export default Form