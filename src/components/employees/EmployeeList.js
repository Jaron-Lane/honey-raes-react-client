import React, { useEffect, useState } from 'react';

export const EmployeeList = () => {
    const [ employees, setEmployees ] = useState([]);
    const [ specialties, setSpecialties ] = useState("");

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
        <h2>Employees List</h2>
            <div>Specialties: {specialties}</div>
            {
                employees.map(
                    (empObj) => {
                        return <h3 key={`employee--${empObj.id}`}>{ empObj.name }</h3>
                    }
                )
            }
        </>
    )
}