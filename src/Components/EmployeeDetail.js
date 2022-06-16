import React from 'react'

import classes from './EmployeeDetail.module.css'
const EmployeeDetail = (props) => {
const skills = props.emp.skills.toString()
console.log(skills)
// console.log(`aa ${props.emp.contact}`)
// console.log(props.emp.contact[0])

let cdCount=0
  return (
    <div>
        <p className={classes.p}>Employee #{props.counter}</p>
        <table className={classes.table}>
            <tbody>
            <tr>
                <td>Name:</td>
                <td>{props.emp.nam}</td>
            </tr>
            <tr>
                <td>Designation:</td>
                <td>{props.emp.designation}</td>
            </tr>
            <tr>
                <td valign="top" rowSpan={props.emp.contact.length}>Contact:</td>
                {/* {(props.emp.contact).map(con => <td key={cdCount++}>{`${con.typ}: ${con.detail}`}</td>)} */}
                <td>{`${props.emp.contact[0].type} - ${props.emp.contact[0].number}`}</td>
            </tr>
            {props.emp.contact.length>1 && 
            props.emp.contact.slice(1).map(con => {
                return (
                <tr key={con.type}>
                    <td>{`${con.type} - ${con.number}`}</td>
                </tr>
                )
            })}
            
            <tr>
                <td>Skills:</td>
                <td>{skills}</td>
            </tr>
            <tr>
                <td>DOB:</td>
                <td>{props.emp.dob}</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeDetail