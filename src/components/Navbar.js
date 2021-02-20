import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd';


const Navbar = ({ title }) => {
    return (
        <header className="navbar">
            <Row></Row>
        </header>
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