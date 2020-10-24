import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
const  Dark = "darkMood";




export default function Switchtoggle() {
    const [dark, setDark] = useState (false);
 
    dark == true ? document.body.classList.add(Dark)  :  document.body.classList.remove(Dark);  
    return (
        <>

             <Form.Check 
                className="text-right mb-3"
                type="switch"
                id="custom-switch"
                label={dark == true ? "Dark-Mood"  :  "Light-Mood"}
                onChange={()=> setDark(!dark)}
            />
        </>
    )
}

