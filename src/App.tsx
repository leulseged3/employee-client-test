import React, { useEffect, useState } from 'react';
import './App.css';

//Custom hooks 
import { useTypedSelector } from './state/hooks/useTypedSelector'
import { useActions } from './state/hooks/useActions'

import { Title, Error, ListEmployee, AddEmployee } from './components'

const App: React.FC = () => {


  const { getEmployees } = useActions()
  const employees = useTypedSelector(state => state.employees)

  useEffect(() => {
    getEmployees();
  },[])

  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
      <Title>Employee</Title>
      <AddEmployee />
      <div style={{ display:'flex', flexDirection:'row',flexWrap:'wrap', width:'80%', alignItems:'center'}}>
        { employees.length ? employees.map(employee => (
               <ListEmployee 
                  key={employee._id}
                  _id={employee._id} 
                  date_birth={employee.date_birth}
                  gender={employee.gender}
                  name={employee.name}
                  salary={employee.salary}
                />
        )):
          <Error style={{ alignSelf:'center',textAlign:'center'}}>No Employees</Error>
        }
        </div>
    </div>
  );
}

export default App;
