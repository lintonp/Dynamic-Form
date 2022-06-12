import React, {useState} from 'react';
import classes from './App.module.css';
import EmployeeDetails from './Components/EmployeeDetails';
import EmployeeForm from './Components/EmployeeForm';

import Card from './Components/UI/Card'

function App() {
  const [addEmployee, setAddEmployee] = useState(false);
  const [viewData, setViewData] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState([]);

  const submitHandler = (empData) => {
    console.log(`Adding empData: ${empData}`)
    console.log(employeeDetails)
    setEmployeeDetails([...employeeDetails, empData])
  }

  return (
    <React.Fragment>
      <header className='centered'>
        <h1>Employee Data</h1>
      </header>
      <main>
        <Card>
          { addEmployee && <EmployeeForm employeeDetails={employeeDetails} submitHandler={submitHandler} />}
        </Card>
        <div className={classes.buttonContainer}>
          <button onClick={() => setAddEmployee(true)} >Add Employee</button>
          <button onClick={() => setViewData(true)}>View Data</button>
        </div>
        {viewData && <EmployeeDetails employeeDetails={employeeDetails} />}
      </main>
    </React.Fragment>
  );
}

export default App;
