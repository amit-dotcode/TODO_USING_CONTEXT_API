import React, {useState} from 'react';
import { FaPlus } from 'react-icons/fa';



export const CreateNote = (props) => {
    const [note, setNote] = useState({
        title:'',
        content:''
    });

    const inputEvent = (event) =>{
        // const value = event.target.value;
        // const name = event.target.name;

        //object disctructing
        const {name, value} = event.target;

        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            }
        });
    };

    const addEvent = ()=>{
        props.passNote(note); // call fucnction to app js file using props
        setNote({
            title:'',
            content:''
        });
    
    }

    return (
        <>
          <div className="main_note">
              <form className="formbox">
                  <input type="text"  name='title'  className="form-control" placeholder="Title"  value={note.title} onChange={inputEvent} autoComplete="off"/>
                  <textarea  name='content'className="form-control" row='' column='' placeholder="Wirte your notes here" value={note.content} onChange={inputEvent} autoComplete="off"></textarea>
                  <button type="button" className="save" onClick={addEvent}>
                  <FaPlus />
                 </button>
              </form>
        </div>  
        </>
    )
}

export default CreateNote;