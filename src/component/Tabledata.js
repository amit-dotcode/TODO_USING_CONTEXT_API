import React, {useState, useEffect} from 'react';
import { Table, InputGroup, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { MdModeEdit, MdCancel, MdDeleteForever } from 'react-icons/md';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { deleteContact, selectAllContact, clearAllContact, clearAllselectedContact } from '../Action/ContactAction'; // Import action form action 


export default function Tabledata() {
    const contactData = useSelector((state) => state.ContactDataList.contactDetails);
    const selectedContact =  useSelector((state) => state.ContactDataList.selectAllContact);
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState (false);
    useEffect(() => {
        if(selectAll){
            dispatch(selectAllContact(contactData.map((contact) => contact.id)))
        }else{
            dispatch(clearAllContact());
        }
       
    },[selectAll]);
    
    
    const labeldark = selectAll == true ? "labeldark" : "";
    return (
        <>
           {selectedContact && selectedContact.length > 0 ? (
             <Button variant="danger" className="mb-3 clear" onClick ={() => dispatch(clearAllselectedContact())} >Clear All <MdDeleteForever/></Button>
             ): null}
        
            <Table  responsive="sm"  className="shadow tableCase table ">
                <thead className="bg-danger text-white">
                    <tr>
                        <th className="d-flex align-items-center">
                            <InputGroup.Checkbox 
                            className="mx-1"
                            aria-label="Checkbox for following " 
                            value = {selectAll}
                            onChange = {()=> setSelectAll(!selectAll)}
                            /><label className={`mb-0 ${labeldark}`}>All</label>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactData.map((contact) => {
                            // desturecontact
                            const { name, phone, email, id  } = contact;
                            return (
                                <tr key={id}>
                                    <td>
                                    <InputGroup.Checkbox 
                                    aria-label="Checkbox for following "
                                    checked = {selectAll}
                                    onChange = {()=> setSelectAll(!selectAll)}


 

                                    />   
                                     </td>
                                    <td>
                                        <Avatar  className="mr-2" name={name} size="45" round={true} />{name}
                                    </td>
                                    <td>{phone}</td>
                                    <td>{email}</td>
                                    <td className="editbox">
                                        <Link to={`/component/edit/${id}`} className="text-dark"><MdModeEdit /></Link>  {/*// Link data with id come from object data baseed on id relocate page data to editcontact page*/}
                                        <Link to="" className="text-danger" onClick={() => dispatch(deleteContact(id))} ><MdCancel /></Link>
                                    </td>
                                </tr>
                            )

                        })


                    }
                </tbody>
            </Table>
        </>
    )
}
