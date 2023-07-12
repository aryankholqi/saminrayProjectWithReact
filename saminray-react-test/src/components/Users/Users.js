import React, { Fragment, useEffect, useState } from 'react'
import "./Users.css"
import Navbar from '../Navbar/Navbar'
import { getUserID } from '../../actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import DataTable from 'react-data-table-component'
import { useUsersQuery, useUsersMutation } from '../../Queries/useUsersQuery'

export default function Users() {
    const users = useUsersQuery()
    const deleteUserMutation = useUsersMutation()
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
    const data = users.data ? users.data.map((user) => ({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        action: (
            <>
                <i className="bi bi-pencil user-edit-btn ml-4" onClick={() => goToEditPage(user.id)}></i>
                <i className="bi bi-trash user-delete-btn ml-3" onClick={() => deleteUserMutation.mutate(user.id)}></i>
            </>
        )
    })) : []
    const customStyle = {
        rows: {
            style: {
                padding: "2rem"
            }
        }
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function goToEditPage(id) {
        dispatch(getUserID(id))
        navigate(`${id}`)
    }
    return (
        <Fragment>
            {
                users.data ? (
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
