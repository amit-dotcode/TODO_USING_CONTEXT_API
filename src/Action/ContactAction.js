import {
    CREATE_CONTACT,
    GET_CONTACT, 
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SELECT_CONTACT,
    CLEAR_CONTACT,
    CLEAR_ALL_CONTACT
    
    } from '../Constant/Type';


//Action create contact 
export const addContact = (contact)=>{  //contact = playload data what do you want to send  
    return{
        type: CREATE_CONTACT,
        payload:contact,
    }
}

//Action for Edit Cotact data get data
export const editContact = (id)=>{  //contact = playload   payload to send Id for identify table row data
    return{
        type: GET_CONTACT,
        payload:id,
    }
}

//Action for update contact
export const updateContact = (editcontactgetData)=>{  
    return{
        type: UPDATE_CONTACT,
        payload:editcontactgetData,
    }
}


//Action for Delete contact
export const deleteContact = (id)=>{  
    return{
        type: DELETE_CONTACT,
        payload:id,
    }
}

//Action for Select all contact checkbox
export const selectAllContact = (id)=>{  
    return{
        type: SELECT_CONTACT,
        payload:id,
    }
}

//Action for  clear Select all contact checkbox there no payload passed beccause we not delete spceial data one data that we pass id or something payload we delete all so we not required pass payload

export const clearAllContact = ()=>{  
    return{
        type: CLEAR_CONTACT,
    }
}

// CLear All seleted Contact Data 
export const clearAllselectedContact = ()=>{  
    return{
        type: CLEAR_ALL_CONTACT,
    }
}


