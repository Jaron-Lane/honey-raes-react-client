import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const EmployeeList = () => {
    const [ employees, setEmployees ] = useState([]);
    const [ specialties, setSpecialties ] = useState("");
    const history = useHistory();

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    setEmployees(data)
                })
        },
        []
    )

    useEffect(
        () => {
            const specialty = employees.map(empObj => empObj.specialty)
            setSpecialties(specialty.join(", "))
        },
        [employees]
    )

    return (
        <>
        <div>
            <button
                onClick={() => {history.push("/employees/create")}}
            >Add Employee</button>
        </div>
        <h2>Employees List</h2>
            <div>Specialties: {specialties}</div>
            {
                employees.map(
                    (empObj) => {
                        return <p key={`employee--${empObj.id}`}>{ empObj.name }</p>
                    }
                )
            }
        </>
    )
}