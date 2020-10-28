import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();
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

    useEffect(() => {
        loadUser();  
    }, []);

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3002/users/${id}`, user)
        history.push("/");
    }
    const loadUser = async ()=>{
   
        const result = await axios.get(`http://localhost:3002/users/${id}`)
        setUser(result.data);
    }
    return (
        <>
            <div className="formadd edittag">
                <h4>Edit User</h4>
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
                    <Button variant="cyanlight" type="submit">
                        Update User
                    </Button>
                </Form>
            </div>

        </>
    )
}

export default EditUser
