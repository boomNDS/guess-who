import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../components/Navbar'
import RoomHeader from '../components/RoomHeader'
import NameHeader from '../components/NameHeader'


function UserDisplay({ rooms, users }) {
    function userRoom(users, rooms, id) {
        let roomId = users.filter(user => user.id === parseInt(id))[0].room
        return rooms.filter(room => room.id === parseInt(roomId))[0]
    }
    const { id } = useParams()
    useEffect(() => {
    })
    return (
        <div>
            <Navbar />
            <div>
                <RoomHeader room={userRoom(users, rooms, id)} total={(users.filter(user => user.room === parseInt(id))).length} />
            </div>
            <div>
                <NameHeader active={false} user={users.filter(user => user.id === parseInt(id))[0]} />
            </div>
        </div>
    )
}



export default UserDisplay

//display User in Room
// {users.filter(user => user.room === parseInt(id)).map(filteredUser => (
//     <li key={filteredUser.id}>
//         {filteredUser.name}
//     </li>
// ))}