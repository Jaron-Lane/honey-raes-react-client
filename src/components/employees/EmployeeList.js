import React, { useEffect, useState } from 'react';

export const EmployeeList = () => {
    const [ employees, setEmployees ] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then(setEmployees)
        },
        []
    )

    return (
        <>
        <h2>Employees List</h2>
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