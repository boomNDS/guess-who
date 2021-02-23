import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaCog } from 'react-icons/fa';


const Navbar = ({ title }) => {
    const location = useLocation()
    return (
        <div className="container navbar-custom">
            <div className="row">
                <div className="col-7">
                    <h4>Guess-Who ?</h4>
                </div>
                <div className="offset-4">
                    {location.pathname !== '/' && (<FaCog className="setting-icon" />)}
                </div>
            </div>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'Task Tracker',
}

Navbar.protoTypes = {
    title: PropTypes.string.isRequired
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Navbar