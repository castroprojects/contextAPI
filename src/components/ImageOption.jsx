import React, { useEffect, useState } from "react";
import { UserContext, UserContextProvider } from "../context/Context";
import { Content } from "../content";
import { useContext } from "react";
import ItemsBar from "./itemsBar";



function ImageOption() {

  let {addItems} = useContext(UserContext);



    return (
    <>

      
        <div className='images'>
          {Content.map((element, index)=>{
              return (
              <>
              
                <div key={element.id} className="image" ><img src={element.itemImage}/><button onClick={() => addItems(element.id, element.itemValue, element.itemNumber, element.itemImage)}>Rs{element.itemValue}</button></div>

              </>  
          )

          })}
        </div>
    </>
    )

}

export default ImageOption;