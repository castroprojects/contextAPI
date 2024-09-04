import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import PaymentPage from './components/Payment.jsx'
import ItemsBar from './components/itemsBar.jsx'
import ImageOption from './components/ImageOption.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path='payment' element={<PaymentPage/>}/>
    <Route path='' element={<ImageOption/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
