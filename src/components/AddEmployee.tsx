import { useState } from 'react'

import { Button, Input, Label } from './index'
import { useActions } from '../state/hooks/useActions'
import { Error } from './Typography'
import { Select } from './Select'

export const AddEmployee:React.FC = () => {
    const [name, setName] = useState<string>()
    const [birdthDate, setBirthDate] = useState<string>()
    const [gender, setGender] = useState<string>()
    const [salary, setSalary] = useState<string>()
    const [error, setError] = useState <boolean>(false)
    const addEmployeeHandler = () => {
        if(name && birdthDate && gender && salary){
            setError(false)
            createEmployee({
                _id:'',
                name,
                date_birth: birdthDate,
                gender,
                salary: Number(salary) 
            })
        } else {
            setError(true)
        }
    }
    
    const { createEmployee } = useActions()

    return (
        <>
            <Button onClick={ addEmployeeHandler }>Add Employee</Button>
            {error && <Error>Please fill every field</Error> }
            <div style={{ display:'flex', flexDirection:'row', width:'50%'}}>
                <div style={{ width:'100%'}}>
                <Label>Name</Label>
                <Input onChange={e => setName(e.target.value)} placeholder="Name"/>
                </div>

                <div style={{ width:'100%'}}>
                <Label>Gender</Label>
                <Select onChange={e => setGender(e.target.value)}>
                    <option value="" hidden>
                        Gender
                    </option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                </Select>
                </div>
            </div>
            <div style={{ display:'flex', flexDirection:'row', width:'50%'}}>
                <div style={{ width:'100%'}}>
                <Label>Birth Date</Label>
                <Input type="date" onChange={e => setBirthDate(e.target.value)}/>
                </div>

                <div style={{ width:'100%'}}>
                <Label>Salary</Label>
                <Input type="number" onChange={e => setSalary(e.target.value)} placeholder="Salary"/>
                </div>
            </div>
        </>
    )
}
