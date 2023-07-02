import React from 'react'
import "./NotFound.css"
import { Link } from "react-router-dom"
export default function NotFound() {
    return (
        <div className='error404-page'>
            <div className='container text-center pt-5'>
                <h3 className='error404-title'>ERROR 404 :(<br />The Page you are looking for is not found!</h3>
                <div className='mt-5'>
                    <Link className='error404-link' to="/">Go to Log-In Page</Link>
                </div>
            </div>
        </div>
    )
}
