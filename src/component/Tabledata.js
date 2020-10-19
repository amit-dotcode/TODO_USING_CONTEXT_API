import React from 'react';
import { Table, InputGroup } from 'react-bootstrap';
import {useSelector} from 'react-redux';
import { MdModeEdit, MdCancel } from 'react-icons/md';
import Avatar from 'react-avatar';



export default function Tabledata() {
    const contactData = useSelector ((state) => state.contactDetails);
    return (
        <>
            <Table className="shadow tableCase">
                <thead className="bg-danger text-white">
                    <tr>
                        <th>                                      
                            <InputGroup.Checkbox aria-label="Checkbox for following " />    
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactData.map( (contact) => {
                           // desturecontact
                            const{name, phone, email} = contact;
                           return(
                            <tr key={contact.id}>
                                <td><InputGroup.Checkbox aria-label="Checkbox for following " />    </td>
                                <td><Avatar className="mr-2" name={name} size="45" round={true}/>{name}</td>
                                <td>{phone}</td>
                                <td>{email}</td>
                                <td className="editbox"><a href="#" className="text-dark"><MdModeEdit /></a> <a href="#" className="text-danger"><MdCancel /></a></td>
                            </tr>
                           ) 
                           
                        })
                         

                    }
                </tbody>
            </Table>
        </>
    )
}
