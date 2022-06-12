import React, { useState, useRef } from 'react'
import PhoneNumber from './InputComponents/PhoneNumber'
import Skills from './InputComponents/Skills'

import classes from './EmployeeForm.module.css'

const EmployeeForm = (props) => {
  const [contactDetails, setContactDetails] = useState([])

  const nameRef = useRef();
  const designationRef = useRef();
  const dobRef = useRef();

  const formSubmitHandler = (event) => {
      event.preventDefault();
      let empData = {
        name: nameRef.current.value,
        designation: designationRef.current.value,
        contact: contactDetails,
        skills: [],
        dob: dobRef.current.value
      }
      console.log(empData)
      props.submitHandler(empData);
      document.getElementById('form').reset();
  }
  return (
    <div>
        <form id='form' onSubmit={formSubmitHandler} className={classes.form}>
          <div className={classes.control}>
            <label>Name:</label>
            <input type="text" ref={nameRef} required/>
          </div>
          <div className={classes.control}>
            <label>Designation:</label>
            <input type="text" ref={designationRef} required/>
          </div>
          <div className={classes.control}>
            <label>Contact Details:</label>            
            <PhoneNumber inputList={contactDetails} setInputList={setContactDetails} />
          </div>
          <div className={classes.control}>
            <Skills />
          </div>
          <div className={classes.control}>
            <label>Date of Birth:</label>
            <input type="date" ref={dobRef} />
          </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default EmployeeForm