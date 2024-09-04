import React, { useContext, useEffect } from "react";
import {UserContext} from "../context/Context";
import { Content } from "../content";
import { NavLink } from "react-router-dom";

function ItemsBar() {
    let {total, itemId, itemVal, itemImag, deleteItemNumber, addItemNumber, numberOfItem} = useContext(UserContext);

    
    let totalValue = 0;

    total.map((item) => {
        return totalValue = totalValue + item
    })
    
        
    


    

    return (
    <> 
       <div className=" flex justify-center wrap">
            <div className="w-full bg-white rounded-lg shadow-md p-6">

                <h2 className="text-2xl font-semibold mb-6 text-center">Shopping Cart</h2>

                
                <div className="cardAdder mb-4">
                    
                        {itemId.map((product,i)=>{
                                return (
                                <>
                                    <div className="flex items-center justify-between mb-6" key={i}>
                                        <div className="listItem flex flex-row items-center">
                                            <img src={itemImag[i]} className="imagess" />
                                            <div className="ml-4">
                                                <h3 className="text-lg font-semibold"> ${itemVal[i]}</h3>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-gray-600"><button onClick={() =>addItemNumber(product,i)}>+</button>{numberOfItem[i]}<button onClick={() => deleteItemNumber(product, i)}>-</button></p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                
                                )
                            })}
                    <div className="totalBox flex justify-center align-middle">
                        <div className="w-full md:w-1/3 h-[10vh] bg-gray-100 rounded-lg p-4">
                        
                             <div className="flex  justify-between text-center font-semibold border-t border-gray-300 pt-2 pl-2">
                                <span>${totalValue}</span>
                                <button>
                                <NavLink
                                to="/payment"
                                    
                            
                                >
                                    Checkout
                                </NavLink></button>
                            </div>
                            
                        </div>
                    </div>
                        
                </div>
                
            </div>
        </div>

    </>
    )

}

export default ItemsBar;