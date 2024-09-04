import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();


export const UserContextProvider = ({children}) => {
    const [items, setItems] = useState([{}]);
    let [itemId, setItemId ]= useState([]);
    let [itemVal, setItemVal] = useState([]);
    let [itemImag, setItemImag] = useState([]);
    let [total, setTotal] = useState([]);
    let [numberOfItem, setnumberOfItem] = useState([]);
    
    


    let addItems = (id, itemValue, itemNumber, itemImage) => {

        setTotal((prev)=> [...prev, itemValue])
            
        setItems((prev)=>[...prev,{id:id, itemValue: itemValue, itemNumber: itemNumber, itemImage:itemImage}])
        if (itemId.indexOf(id) === -1){
            setItemId((prev)=>[...prev, id])
            setItemVal((prev)=>[...prev, itemValue])
            setItemImag((prev)=>[...prev, itemImage])
            setnumberOfItem(prev => [...prev, itemNumber])
        }else{
            console.log(itemId.indexOf(id));
            console.log(numberOfItem[itemId.indexOf(id)] );
            numberOfItem[itemId.indexOf(id)] = numberOfItem[itemId.indexOf(id)] + 1;
            setnumberOfItem(numberOfItem)
            console.log(numberOfItem);
            
        } 
    }

    let deleteItemNumber = (product, i) => {
        
            const index = itemId.indexOf(product);
            const valueOfItemToBeDelete = itemVal[index];
            const indexOfTheTarget = total.indexOf(valueOfItemToBeDelete);

            total.splice(indexOfTheTarget, 1);  
            setTotal((prev) =>[...total])

            numberOfItem[index] = numberOfItem[index] - 1;
            setnumberOfItem((prev) =>[...numberOfItem])  
            
            if (numberOfItem[index] < 1){
                itemId.splice(index,1);
                itemVal.splice(index,1);
                itemImag.splice(index,1);
                numberOfItem.splice(index,1);

                
            }
       
    }

    let addItemNumber = (product, i) => {
          
        const index = itemId.indexOf(product);
        const valueOfItemToBeDelete = itemVal[index];
        total.push(valueOfItemToBeDelete);
        setTotal((prev) =>[...total])
    
         
        numberOfItem[index] = numberOfItem[index] + 1;
        setnumberOfItem((prev) =>[...numberOfItem]) 
    }

    useEffect(() => {
        const itemId = JSON.parse(localStorage.getItem("itemId"))
        const numberOfItem = JSON.parse(localStorage.getItem("numberOfItem"))
        const itemVal = JSON.parse(localStorage.getItem("itemVal"))
        const itemImag = JSON.parse(localStorage.getItem("itemImag"))
        const total = JSON.parse(localStorage.getItem("total"))
    
        if (itemId && itemId.length > 0) {
          setItemId(itemId);
          setnumberOfItem(numberOfItem);
          setItemVal(itemVal);
          setItemImag(itemImag);
          setTotal(total);
        }
      }, [])
    
      useEffect(() => {
        localStorage.setItem("itemId", JSON.stringify(itemId))
        localStorage.setItem("numberOfItem", JSON.stringify(numberOfItem))
        localStorage.setItem("itemVal", JSON.stringify(itemVal))
        localStorage.setItem("itemImag", JSON.stringify(itemImag))
        localStorage.setItem("total", JSON.stringify(total))
      }, [itemId, numberOfItem, itemVal, itemImag, total])
    
    return (
        <UserContext.Provider value={{items, itemId, itemVal, itemImag, total, numberOfItem, addItemNumber, deleteItemNumber, addItems}}>
            {children}
        </UserContext.Provider>
    )
} 



