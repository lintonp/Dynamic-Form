import React from 'react'

const EmployeeDetailsContext = React.createContext({
    employeeDetails: []
});

export const EmployeeDetailsProvider = (props) => {
  const employeeDetails = []
  return (
    <EmployeeDetailsContext.Provider value={employeeDetails}>
      {props.children}
    </EmployeeDetailsContext.Provider>
  )
}

export default EmployeeDetails-context