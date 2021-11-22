import React, { useEffect, useState } from 'react';

export const CustomerList = () => {
    const [ customers, setCustomers ] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then(setCustomers)
        },
        []
    )

    return (
        <>
            <h2>Customers List</h2>
            {
                customers.map(
                    (customerObj) => {
                    return <h3 key={`customer--${customerObj.id}`}>{ customerObj.name }</h3>
                })
            }
        </>
    )
}