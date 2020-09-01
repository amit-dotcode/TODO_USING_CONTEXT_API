import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from './CreateNote';
import Note from './Note';
import Filter from './Filter';

const App = () => {

    const [addItem, setAddItem] = useState([]); // useState Hooks always dfifne out of fucntion
    
    const addNote = (note)=>{
        // alert("clicked");
        setAddItem((oldData)=>{
            return [...oldData, note]    
        })	
    };

    const onDelete = (id)=>{
        setAddItem((oldData)=>{
            oldData.filter((currentData, ind)=>{  // filter method
             return ind !== id;

         });   
        });
    };

    return (
        <>
        <Header/>
        <Filter/>
        <CreateNote passNote={addNote}/>
        {
            addItem && addItem.map((val, index)=>{  // map on addIte array method feacting data 
               return(
                    <Note

                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteNote={onDelete}
                    />
                ); 
                   
            })
        }
        <Footer/>
    </>

    );
 

}

export default App;