import React, { Fragment } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logOut } from '../../actions'

export default function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function logOutUserHandler() {
        dispatch(logOut("","",""))
        navigate("/")
    }
    return (
        <Fragment>
            <nav className='navbar'>
                <Link to='/home' className='navbar-brand'>Saminray</Link>
                <ul className='nav-menu'>
                    <li className='nav-item'><Link to="/users" className='nav-link'>Users</Link></li>
                    <li className='nav-item'><Link to="/posts" className='nav-link'>Create a new Post</Link></li>
                    <li className='nav-item'><Link to="/profile" className='nav-link'>Profile</Link></li>
                    <li className='nav-item'><Link className='nav-link' onClick={logOutUserHandler}>Log Out</Link></li>
                </ul>
            </nav>
            <hr className='m-0'/>
        </Fragment>
    )
}
