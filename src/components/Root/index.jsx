import React from 'react'
import{Link,Outlet} from"react-router-dom"
import "./nav.css"
const Root = () => {
  return (
    <>
    <ul className='nav'>
        <li>
            <Link className='navitem' to="/">home</Link>
        </li>
        <li>
            <Link className='navitem' to="/work">work</Link>
        </li>
        <li>
            <Link className='navitem' to="/resume">resume</Link>
        </li>
        <li>
            <Link className='navitem' to="/contact">contact</Link>
        </li>
    </ul>
    <Outlet/>
    </>
  )
}

export default Root