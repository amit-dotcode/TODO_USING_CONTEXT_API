import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState(
        {
            name: "",
            username: "",
            email: ""
        }
    );
    const changeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const { name, username, email } = user;
    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3002/users", user)
        history.push("/");
    }
    return (
        <>
            <div className="formadd">
                <h4>Add User</h4>
                <Form className="my-2" onSubmit={(e)=> onSubmit(e)}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Enter name"
                            onChange={(e) => changeInput(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Enter username"
                            onChange={(e) => changeInput(e)}

                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => changeInput(e)}

                        />
                    </Form.Group>
                    <Button variant="sunlight" type="submit">
                        Add User
                    </Button>
                </Form>
            </div>

        </>
    )
}

export default AddUser
