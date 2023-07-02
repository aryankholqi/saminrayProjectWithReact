import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'
import "./Profile.css"

export default function Profile() {
    const username = useSelector(state=>state.userName)
    const password = useSelector(state=>state.passWord)
    return (
        <Fragment>
            <Navbar />
            <div className='profile-page'>
                <div className='container'>
                    <h2 className='profile-page-title text-center pt-5'>Profile</h2>
                    <div className='profile-detail text-center mt-5'>
                        <div class="profile-circle">
                            <img src="./images/Profile/user.jpg" alt="logo" className='profile-img' />
                        </div>
                        <h3 className='text-dark'>Username: <span className='profile-username'>{username}</span></h3>
                        <p className='text-dark font-weight-bold'>Password: <span className='profile-password'>{password}</span></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
