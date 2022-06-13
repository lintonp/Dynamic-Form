import React from 'react'

const EmployeeDetail = (props) => {
const skills = props.emp.skills.toString()
console.log(skills)
// console.log(`aa ${props.emp.contact}`)
// console.log(props.emp.contact[0])

let cdCount=0
  return (
    <div>
        <p>Employee #{props.counter}</p>
        <table>
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
                <td rowSpan={props.emp.contact.length}>Contact:</td>
                {/* {(props.emp.contact).map(con => <td key={cdCount++}>{`${con.typ}: ${con.detail}`}</td>)} */}
                <td>{`${props.emp.contact[0].typ}: ${props.emp.contact[0].detail}`}</td>
            </tr>
            {props.emp.contact.length>1 && 
            props.emp.contact.slice(1).map(con => {
                return (
                <tr key={con.typ}>
                    <td>{`${con.typ}: ${con.detail}`}</td>
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