import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import ImageOption from './components/ImageOption';
import ItemsBar from './components/itemsBar';
import { UserContextProvider } from './context/Context';
import { Outlet } from 'react-router-dom';


function Layout() {
  

  return (
    <UserContextProvider>
       <div id="container">
        
          <Header/>
          <div id="smallContainer-2">
              <Outlet/>

              <ItemsBar/>
          </div>
          
          
        
        </div>
      
      
      
    </UserContextProvider>
  )
}

export default Layout;
