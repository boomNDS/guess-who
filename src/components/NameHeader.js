import React, { useEffect } from 'react'

function NameHeader({ active, user }) {
    useEffect(() => {
    })
    return (
        <div className="name-header container-fluid">
            <div className="row">
                <div className="col">
                    <h2 className={` ${active ? 'active' : ''}`}>{user.name}</h2>
                </div>
            </div>
        </div>
    )
}

export default NameHeader
