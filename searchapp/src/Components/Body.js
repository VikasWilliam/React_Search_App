import React from "react";
import "./Body.css"


const Body=(props)=>{

   const renderProducts=props.data.map((item)=>{
       return(
           <div className="card" key={item.id}>
               <img src={item.image}/>
               <div>
                   <h3>{item.name}</h3>
                   <h2>{item.cost}£</h2>
                   <button>Add to cart</button>
               </div>
           </div>
       )
   })

    return(
        <div className="main">
           {renderProducts}
        </div>
    )
}

export default Body;