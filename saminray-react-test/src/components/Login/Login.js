import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import "./Login.css"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { logIn } from '../../actions'
import { useNavigate } from "react-router-dom"
import loginApi from '../../api/loginApi/loginApi'
import Swal from 'sweetalert2'

export default function Login() {
    const [userName, setUsername] = useState("")
    const [passWord, setPassword] = useState("")
    const [error, setError] = useState()
    const [errorMessage, setErrorMessage] = useState(false)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: "",
            password: "",
        }
    })
    const Swal = require('sweetalert2')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submitFormHandler = () => {
        async function getResponse() {
            await axios({
                url: loginApi.apiAddress,
                method: "POST",
                data: {
                    username: userName,
                    password: passWord,
                }
            })
                .then((res) => {
                    dispatch(logIn(userName, passWord, res.data.token))
                    navigate("/home")
                })
                .catch((err) => {
                    if (err.response.status === 401) {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Your Inputs are not valid',
                            icon: 'error',
                            confirmButtonText: 'Close'
                        })
                    }
                })
            setUsername("")
            setPassword("")
        }
        getResponse()
    }
    return (
        <Fragment>
            <div className='login-page d-flex justify-content-center align-items-center flex-column'>
                <div className='login justify-self-center'>
                    <h1 className='login-page-title'>Login Page</h1>
                    <form className='login-form p-5 rounded' onSubmit={handleSubmit(submitFormHandler)}>
                        <div className='row'>
                            <div className='col-12'>
                                <div>
                                    <i className="bi bi-person login-icon"></i>
                                    <input type="text" placeholder='Username...' value={userName} className='mb-5 p-2 rounded' {...register("username", {
                                        required: true,
                                        minLength: {
                                            value: 4,
                                            message: "Input values are not valid"
                                        }
                                    })} onChange={(event) => {
                                        setUsername(event.target.value)
                                    }} />
                                </div>
                                <div>
                                    <i className="bi bi-key login-icon"></i>
                                    <input type="password" placeholder='Password...' value={passWord} className='mb-5 p-2 rounded' {...register("password", {
                                        required: true,
                                        minLength: {
                                            value: 4,
                                            message: "Input values are not valid"
                                        }
                                    })} onChange={(event) => {
                                        setPassword(event.target.value)
                                    }} />
                                </div>
                                <button type='submit' className='btn w-100 login-btn'>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment >
    )
}