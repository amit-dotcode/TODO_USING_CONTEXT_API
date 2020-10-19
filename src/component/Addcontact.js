import React, {useState} from 'react';
import { Form, Button   } from 'react-bootstrap';





export default function Addcontact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    
    //onsubmit form event
    const creatContact = (e)=>{
        e.preventDefault();
        console.log(name,phone,email);
    }

    return (
        <>
            <div className='main_from bg-white shadow br-4  br-6 '>
                <div className='title p-2 pl-3 bg-danger text-white br-2'>
                    <h4 className="m-0 ">Add Contact</h4>
                </div>
                <div className='Form_box'>
                <Form onSubmit={(e)=>creatContact(e)} className="p-3">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter name"
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                         />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter phone" 
                        value = {phone}
                        onChange = {(e) => setPhone(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter email"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                   
                    <Button variant="primary" type="submit">
                        Add Contact
                    </Button>
                </Form>
                </div>
            </div>
        </>
    )
}
