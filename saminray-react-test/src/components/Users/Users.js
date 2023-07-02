import React, { Fragment, useState } from 'react'
import "./Users.css"
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { getUserID } from '../../actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'

export default function Users() {
    const Swal = require('sweetalert2')
    const columns = [
        {
            name: "Name",
            selector: row => row.name
        },
        {
            name: "Username",
            selector: row => row.username
        },
        {
            name: "Email",
            selector: row => row.email
        },
        {
            name: "Phone",
            selector: row => row.phone
        },
        {
            name: "Action",
            selector: row => row.action
        },

    ]
    const data = []
    const customStyle = {
        rows: {
            style: {
                padding: "2rem"
            }
        }
    }
    const [users, setUsers] = useState()
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    axios({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "GET",
    })
        .then((res) => {
            setUsers(res.data.slice(0, 5))
            setLoaded(true)
        })

    function goToEditPage(id) {
        dispatch(getUserID(id))
        navigate(`${id}`)
    }
    function removeUserHandler(id) {
        axios({
            url: `https://jsonplaceholder.typicode.com/users/${id}`,
            method: "DELETE"
        }).then(res => {
            Swal.fire({
                title: 'Successful!',
                text: 'The specified user has been removed',
                icon: 'info',
                confirmButtonText: 'Close'
            })
        })
    }
    return (
        <Fragment>
            {
                loaded &&
                <Fragment>
                    <Navbar />
                    <div className='users-page'>
                        <div className='container pt-4 px-0'>
                            <h3 className='users-page-title text-center'>Thanks for Supporting us ❤️</h3>
                            <div className='users-list mt-5'>
                                {
                                    users.map((user) => {
                                        data.push({
                                            name: user.name,
                                            username: user.username,
                                            email: user.email,
                                            phone: user.phone,
                                            action:
                                                <Fragment>
                                                    <i class="bi bi-pencil user-edit-btn ml-4" onClick={() => {
                                                        goToEditPage(user.id)
                                                    }}></i>
                                                    <i class="bi bi-trash user-delete-btn ml-3" onClick={() => {
                                                        removeUserHandler(user.id)
                                                    }}></i>
                                                </Fragment>
                                        })
                                    })
                                }
                                <DataTable columns={columns} data={data} customStyles={customStyle} pagination className='w-100'/>
                            </div>
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}
