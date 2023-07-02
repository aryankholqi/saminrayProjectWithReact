import React, { Fragment, useEffect, useState } from 'react';
import "./MainUser.css";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function MainUser() {
  const { register, handleSubmit } = useForm();
  const userID = useSelector(state => state.id);
  const params = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mainUser, setMainUser] = useState();
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      url: `https://jsonplaceholder.typicode.com/users/${userID}`,
      method: "GET"
    })
      .then(res => {
        setMainUser(res.data);
        setLoaded(true);
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
      });
  }, [userID]);

  function submitFormHandler() {
    axios({
      url: `https://jsonplaceholder.typicode.com/users/${Number(params)}`,
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(res => {
      Swal.fire({
        title: 'Successful!',
        text: 'Your changes have been applied',
        icon: 'success',
        confirmButtonText: 'Close'
      });
      navigate("/users");
    });
  }

  return (
    <Fragment>
      {loaded && (
        <div className='main-user-page d-flex flex-column'>
          <div className='container'>
            <h2 className='main-user-page-title text-center pt-5'>Edit Your Credentials</h2>
            <form className='edit-user-form row mt-5' onSubmit={handleSubmit(submitFormHandler)}>
              <div className='col-md-6 offset-md-3'>
                <div className='mb-5'>
                  <label htmlFor="username" className='label-edit-page-inputs'>Username (Cannot be Changed) :</label><br />
                  <input type="text" id='username' className='w-100 mb-3 p-2' value={mainUser.username} readOnly />
                </div>
                <div className='mb-5'>
                  <label htmlFor="name" className='label-edit-page-inputs'>New Name:</label><br />
                  <input
                    type="text"
                    value={name}
                    className='w-100 mb-3 p-2'
                    {...register("name")}
                    id='name'
                    placeholder='Name...'
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor="email" className='label-edit-page-inputs'>New Email:</label><br />
                  <input
                    type="email"
                    value={email}
                    className='w-100 mb-3 p-2'
                    {...register("emailAddress")}
                    id='email'
                    placeholder='Email...'
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className='label-edit-page-inputs'>New Phone Number:</label><br />
                  <input
                    type="text"
                    value={phone}
                    className='w-100 mb-3 p-2'
                    {...register("phoneNumber")}
                    id='phone'
                    placeholder='Phone Number...'
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                  />
                </div>
                <div className='col-md-4 offset-md-4 mt-5'>
                  <button type='submit' className='w-100 btn edit-form-btn'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
}
