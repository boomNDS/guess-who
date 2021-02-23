import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import Navbar from '../components/Navbar'
import RoomHeader from '../components/RoomHeader'
// import NameHeader from '../components/NameHeader'


function RoomDisplay({ users, rooms }) {
    function roomDetail(rooms, id) {
        return rooms.filter(room => room.id === parseInt(id))[0]
    }
    function totalUser(users, rooms, id) {
        let roomId = rooms.filter(room => room.id === parseInt(id))[0].id
        let data = users.filter(user => user.room === parseInt(roomId))
        return data.length
    }
    const { id } = useParams()
    useEffect(() => {
    })
    return (
        <div>
            <Navbar />
            <div>
                <RoomHeader room={roomDetail(rooms, id)} total={totalUser(users, rooms, id)} />
            </div>
            <div className="d-flex justify-content-center">
                <div>
                    <Button variant="primary">Random</Button>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default RoomDisplay
