import React, { useEffect } from 'react'

function RoomHeder({ room, total }) {
    useEffect(() => {
        // console.log(room)
        // console.log(total)
    })
    return (
        <div className="room-header">
            <div className="row title">
                <div className="col-12">
                    <h2>{room.name}</h2>
                    <span>Room ID :{room.id}</span>
                </div>
                <div className="col-12">
                    <p>Member {total} in room</p>
                </div>
            </div>

        </div>
    )
}

export default RoomHeder
