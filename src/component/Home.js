
import React, {useState, useEffect}from 'react';
import {Table} from 'react-bootstrap';
import {MdModeEdit, MdAdd, MdDeleteForever,MdVisibility} from 'react-icons/md';
import axios from 'axios';
import{Link} from 'react-router-dom';

const Home = () => {
    const [users, SetUsers] = useState([]);

    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:3002/users");
         SetUsers(result.data.reverse());
        }
    const deleteUser = async (id)=>{
         await axios.delete(`http://localhost:3002/users/${id}`);
         loadUsers();

    }    
    return (
        <>
        <Table responsive="sm"  className="shadow my-5 ">
            <thead className="bg-cyanlight text-white">
                <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  users.map((userData, index)=>{
                
                  const {name, username, email, id} = userData;
                  
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{name}</td>
                            <td>{username}</td>
                             <td>{email}</td>
                            <td>
                                <Link to={`/component/pages/ViewUser/${id}`}>
                                <MdVisibility className="view"/>
                                </Link>
                                <Link to={`/component/pages/EditUser/${id}`}>
                                <MdModeEdit  className="edit"/>
                                </Link>
                                <Link to="/component/pages/AddUser">
                                <MdAdd className="add"/>
                                </Link>
                                <Link onClick = {()=> deleteUser(id)}>
                                <MdDeleteForever className="delete"/>
                                </Link>
                            </td>
                        </tr>
                        
                    )
                  })  
                }
                <tr>
                
                </tr>  
            </tbody>
        </Table>
    </>
    )
}

export default Home
