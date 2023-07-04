import React, { Fragment, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useForm } from 'react-hook-form'
import "./Posts.css"
import fetchPosts from '../../api/postsApi/postsApi'
import Swal from 'sweetalert2'

export default function Posts() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            Title: "",
            Description: "",
        }
    })
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const Swal = require('sweetalert2')
    function submitFormHandler() {
        fetchPosts(title, description)
            .then(res => {
                setTitle("")
                setDescription("")
                Swal.fire({
                    title: 'Successful',
                    text: 'Your Post has been completely posted',
                    icon: 'success',
                    confirmButtonText: 'Close',
                })
            })
    }
    return (
        <Fragment>
            <Navbar />
            <div className='posts-page d-flex flex-column'>
                <div className='container'>
                    <h2 className='posts-page-title text-center py-5'>Create a New Post:</h2>
                    <form className='row' onSubmit={handleSubmit(submitFormHandler)}>
                        <div className='col-md-6 offset-md-3'>
                            <div className='mb-5'>
                                <label htmlFor="title" className='text-dark'>Title:</label><br />
                                <input type="text" id='title' value={title} placeholder='Title...' {...register("Title", {
                                    required: true,
                                })} className='w-100 mb-2 p-2' onChange={(event) => {
                                    setTitle(event.target.value)
                                }} />
                                {
                                    errors.Title &&
                                    <small className='title-input-error text-danger'>• This field is Required</small>
                                }
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="description" className='text-dark'>Description:</label><br />
                                <input type="text" id='description' value={description} {...register("Description")} placeholder='Description...' className='w-100 mb-2 p-2' onChange={(event) => {
                                    setDescription(event.target.value)
                                }} />
                            </div>
                            <div className='text-center'>
                                <button type='submit' className='btn w-25 create-post-btn'>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
