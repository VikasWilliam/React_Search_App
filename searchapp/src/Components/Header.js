import React, {useState} from 'react';
import "./Header.css";

const Header=(props)=>{
    const [value,setValue]= useState("");

    const handleChange=(event)=>{
        console.log(event.target.value);
        setValue(event.target.value);
        props.filterData(event.target.value);
    }

  return(
    <div className="div_head">
      <h3>Search Item</h3>
      <input onChange={handleChange}></input>
      <p>{value? value : "Enter value here"}</p>
    </div>
  )
}

export default Header;