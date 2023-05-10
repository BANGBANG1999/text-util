import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from "react-router-dom"


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="#">TextUtils</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        {/* <Link className="nav-link" to="/">{props.home} <span className="sr-only">(current)</span></Link> */}
                        <a className="nav-link" href="#">{props.home} <span className="sr-only">(current)</span></a>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.about}</Link>
                    </li> */}
                </ul>
                <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"} mx-4`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="darkMode" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
                </div>
                <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"} mx-2`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode_two} role="switch" id="greenMode" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable green mode</label>
                </div>


            </div>
        </nav>
    )
}

Navbar.propTypes = {
    home: PropTypes.string,
    about: PropTypes.string
}
Navbar.defaultProps = {
    home: "House",
    about: "Go to Hell"
}

