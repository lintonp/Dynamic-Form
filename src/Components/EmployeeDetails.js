import React from 'react'
import Card from './UI/Card'
import EmployeeDetail from './EmployeeDetail'

const EmployeeDetails = (props) => {
  let count=1
  return (
    <Card>
      {props.employeeDetails.map((emp) => <EmployeeDetail emp={emp} counter={count++} />)}
    </Card>
  )
}

export default EmployeeDetails