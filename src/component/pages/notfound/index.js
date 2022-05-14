import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {

    const style = {
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
        color: 'red'
    }
    return (
        <div style={style}>
            <h3> Page Not Found</h3>
            <br></br>
            <h5><Link to="/">Home</Link></h5>
        </div>
    )
}
