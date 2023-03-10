import React from 'react'
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <section className='error-page section'>
            <div className="error-container">
                <h1>Ooops! It's a dead end</h1>
                <Link to='/'>
                    <button className='btn btn-primary'>Back home</button>
                </Link>
            </div>
        </section>
    )
}

export default Error
