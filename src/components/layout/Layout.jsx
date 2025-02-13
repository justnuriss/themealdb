import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Paypal from '../paypal/Paypal'
import { Outlet } from 'react-router-dom'
import Alpha from '../alfavit/Alpha'
function Layout() {
  return (
    <div className='layout'>
    <Header/>
    <Outlet/>
    <Alpha/>
    <Footer/>
    </div>
  )
}

export default Layout
