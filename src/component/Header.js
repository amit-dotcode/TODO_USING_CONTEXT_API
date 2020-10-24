import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { ImAddressBook } from 'react-icons/im';
import {Link} from 'react-router-dom';



export default function Header() {
    return (
        <>
           <header>
           <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary shadow">
             <Link to="/" className="text-white"><ImAddressBook className="mx-2"/>
             Contact-Book
             </Link>
             <Link to='/component/add' className="ml-auto mr-4">
             <Button variant="light" >Add Contact</Button>
             </Link>
                
            </Navbar>
            </header> 
          
        </>
    )
}
