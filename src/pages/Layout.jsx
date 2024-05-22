import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className='nav-bar'>
         <Link to="/todo">TodoList</Link>
         <Link to="/employee">Employee</Link>
         
         <Link to="/dasboard">Home</Link>
         <Link to="/users">User</Link>
         <Link to="/services">Service</Link>
         <Link to="/userprofile"> userProfile</Link>
        
    </div>
  )
}

export default Layout
