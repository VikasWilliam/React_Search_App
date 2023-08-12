import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import JSON from "./Components/db.json";

const App=()=>{

 const [data,setData]= useState(JSON);
 const [filteredProduct, setFilteredPRoduct]=useState(JSON);

 function filterData(value){
  let output= data.filter((data)=>{
    return (data.name.toLowerCase().indexOf(value.toLowerCase()))>-1;
  })
  setFilteredPRoduct(output);
   console.log("value",value);
 }
  
  return(
    <div>
      <Header filterData={filterData}/>
      <Body data={filteredProduct}/>
      <Footer/>
    </div>
  )
}

export default App;