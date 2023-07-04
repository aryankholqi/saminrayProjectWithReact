import React, { Fragment, useEffect, useState } from 'react'
import "./Users.css"
import Navbar from '../Navbar/Navbar'
import { fetchGetUsers, fetchDeleteUsers } from '../../api/usersApi/usersApi'
import { getUserID } from '../../actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'

export default function Users() {
    const [users, setUsers] = useState()
    const [loaded, setLoaded] = useState(false)
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
    const data = users ? users.map((user) => ({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        action: (
            <>
                <i className="bi bi-pencil user-edit-btn ml-4" onClick={() => goToEditPage(user.id)}></i>
                <i className="bi bi-trash user-delete-btn ml-3" onClick={() => removeUserHandler(user.id)}></i>
            </>
        )
    })) : []
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const customStyle = {
        rows: {
            style: {
                padding: "2rem"
            }
        }
    }
    const Swal = require('sweetalert2')
    useEffect(() => {
        fetchGetUsers()
            .then((res) => {
                setUsers(res.data)
                setLoaded(true)
            })

    }, [])

    function goToEditPage(id) {
        dispatch(getUserID(id))
        navigate(`${id}`)
    }
    function removeUserHandler(id) {
        fetchDeleteUsers()
            .then(res => {
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
                loaded ? (
                    <Fragment>
                        <Navbar />
                        <div className='users-page'>
                            <div className='container pt-4 px-0'>
                                <h3 className='users-page-title text-center'>Thanks for Supporting us ❤️</h3>
                                <div className='users-list mt-5'>
                                    <DataTable title="Users List" columns={columns} data={data} customStyles={customStyle} pagination className='w-100' />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ) : (
                    <div className='container' style={{ marginTop: "12rem" }}>
                        <SkeletonTheme baseColor="#EEE" highlightColor="#242424" enableAnimation={true}>
                            <Skeleton count={15} width="100%" height="5%" />
                        </SkeletonTheme>
                    </div>
                )
            }
        </Fragment>
    )
}
