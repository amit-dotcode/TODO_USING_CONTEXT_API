import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'; // use dispatch to disptach data from reducer and action
import { editContact, updateContact } from '../Action/ContactAction'; // Import action form action 
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom'; // to redirect page use hooks par usehistory



export default function EditContact() {
    let { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const editData = useSelector((state) => state.ContactDataList.GetEditContactDetails);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    // using useEffect use to load data loading page
    useEffect(() => {
        if (editData != null) {
            setName(editData.name);
            setPhone(editData.phone);
            setEmail(editData.email);
        }
        dispatch(editContact(id));
    }, [editData]);

    const onUpdateEditContact = (e) => {
        e.preventDefault();

        const Update_Contact = Object.assign(editData, { name: name, phone: phone, email: email }); // aasign old data edit data 
        dispatch(updateContact(Update_Contact));
        history.push("/");


    }
    return (
        <>
            <div className='main_from bg-white shadow br-4  br-6 '>
                <div className='title p-2 pl-3 bg-danger text-white br-2'>
                    <h5 className="m-0 ">Edit Contact</h5>
                </div>
                <div className='Form_box'>
                    <Form onSubmit={(e) => onUpdateEditContact(e)} className="p-3">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="warning" type="submit">
                            Update Contact
                    </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
