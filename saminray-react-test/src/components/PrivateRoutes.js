import React from 'react'
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function PrivateRoutes({ children }) {
    const token = useSelector(state => state.token)
    return (
        <div>
            {
                token ? children : <Navigate to="/"/>
            }
        </div>
    )
}
