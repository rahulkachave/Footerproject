import React from 'react'
import {Link ,Outlet}from 'react-router-dom'
const NameContact = () => {
  return (
    <div>
  <Link to={'insta'}>  <h1> conatact via Instgram</h1></Link>
   <Link to={'mail'}> <h3>conatct via mail</h3></Link>

       <Outlet/>
        </div>
  )
}

export default NameContact