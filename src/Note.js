import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

 const Note = (props) => {
    
    const delNote =()=>{
        props.deleteNote(props.id);
    }
    return (
        <>
                    
            <div className="mynote fl">
                <h3>{props.title}</h3>
                <p>{props.content} </p>
                <span onClick={delNote}><MdDeleteForever/></span>
            </div>
            <div className="clearfix"></div>
        </>
    )
}

export default Note ;
