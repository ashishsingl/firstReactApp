import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="col-10 mx-auto my-5">
                <hr />
            </div>
            <footer class="container my-5 pt-2">
                <p class="float-end"><NavLink to="">Back to top</NavLink></p>
                <p>© 2021–2022 DevPlace · <NavLink to="">Privacy</NavLink> · <NavLink to="">Terms</NavLink></p>
            </footer>
        </>
    )
}

export default Footer