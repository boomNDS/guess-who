import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'


const Header = ({ title }) => {
    const location = useLocation()
    return (
        <header>
            <h1>{title}</h1>
            {location.pathname === '/' && <p>Add</p>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.protoTypes = {
    title: PropTypes.string.isRequired
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header