import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import {MdHome} from 'react-icons/md';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const ViewUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState(
        {
            name: "",
            username: "",
            email: ""
        }
    );
  
    useEffect(() => {
        loadUser();  
    }, []);

    const loadUser = async ()=>{
   
        const result = await axios.get(`http://localhost:3002/users/${id}`)
        setUser(result.data);
    }
    return (
        <>
           <div className="formadd shadow">
           <Link to="/">
           <Button variant="bluelight" type="button">
                        <MdHome className="mr-1" size="20"/>Back to Home</Button>
           </Link>    
          
            <div class="userData my-2">
                <h3>User ID : {user.id}</h3>
                <ul>
                    <li className="bg-yellow-light">Name : {user.name}</li>
                    <li className="bg-purple">UserName : {user.username}</li>
                    <li className="bg-sky">UserEmail : {user.email}</li>
                   
                </ul>    
            </div>
           </div>
            
        </>
    )
}

export default ViewUser
