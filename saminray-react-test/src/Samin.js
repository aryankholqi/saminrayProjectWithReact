import React, { Fragment } from 'react'
import { useRoutes } from "react-router-dom"
import routes from './routes'

export default function Samin() {
  const router = useRoutes(routes)
  return (
    <Fragment>
        {router}
    </Fragment>
  )
}
