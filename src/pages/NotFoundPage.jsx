import { Link } from "react-router-dom"

import React from 'react'

export const NotFoundPage = () => {
  return (
    <div>
        <h1>Oh, no! It seems like the page you're trying to acess does not exist...!</h1>
        <Link to="/">GO BACK</Link>
    </div>
  )
}
