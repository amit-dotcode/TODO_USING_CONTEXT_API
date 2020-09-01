import React from 'react';
import { FiSearch } from 'react-icons/fi';
export default function Filter() {
    return (
        <>
          <div className="filter-main">
          <input type="text" name="search" placeholder="Search.."/>  
          <FiSearch  className="search"/>  
        </div>  
        </>
    )
}
