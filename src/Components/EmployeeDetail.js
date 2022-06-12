import React from 'react'

const EmployeeDetail = (props) => {
  return (
    <div>
        <p>Employee #{props.counter}</p>
        <p>Name: {props.emp.name}</p>
        <table>
            <tr>
                <td>Name:</td>
                <td>{props.emp.name}</td>
            </tr>
            <tr>
                <td>Designation:</td>
                <td>{props.emp.designation}</td>
            </tr>
            <tr>
                <td>Contact:</td>
                <td>
                    {props.emp.contact.map(con => 
                    {return <tr>
                        <td>mn</td>
                    </tr>})}
                    <tr></tr>
                </td>
            </tr>
            <tr>
                <td>Skills:</td>
                <td>{props.emp.skills}</td>
            </tr>
            <tr>
                <td>DOB:</td>
                <td>{props.emp.dob}</td>
            </tr>
        </table>
    </div>
  )
}

export default EmployeeDetail