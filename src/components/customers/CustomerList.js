import React, { useEffect, useState } from 'react';

export const CustomerList = () => {
    const [ customers, setCustomers ] = useState([]);
    const [ customerMessage, setMessage ] = useState("");

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((data) => {
                    setCustomers(data)
                })
        },
        []
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                setMessage("You have 1 customer")
            } 
            else {
                setMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )

    return (
        <>
            <h2>Customers List</h2>
            {customerMessage}
            {
                customers.slice(0,5).map(
                    (customerObj) => {
                    return <p key={`customer--${customerObj.id}`}>{ customerObj.name }</p>
                })
            }
        </>
    )
}