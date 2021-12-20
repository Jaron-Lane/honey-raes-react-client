import { React, useState } from "react";
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
        specialty: ""
    });

    const history = useHistory();

    const saveEmployee = (event) => {
        event.preventDefault()

        const newHire = {...employee}

        const postMethod = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHire)
        }

        return fetch("http://localhost:8088/employees", postMethod)
            .then(res => res.json())
            .then(() => {history.push("/employees")})
    }

    return (
        <>
            <form>
                <h2>New Employee</h2>
                    <fieldset>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input 
                            onChange={(evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                setEmployee(copy)
                            }}
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="New employee's name"
                            />
                        </div>
                    </fieldset>
                    
                    <fieldset>
                        <div>
                            <label htmlFor="specialty">Specialty:</label>
                            <input
                            onChange={(evt) => {
                                const copy = {...employee}
                                copy.specialty = evt.target.value
                                setEmployee(copy)
                            }} 
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="New employee's specialty"
                            />
                        </div>
                    </fieldset>
                <button className="btn btn-primary" onClick={saveEmployee}
                    >Hire Employee
                </button>
            </form>
        </>
    )
}