import React from 'react'
import { useState } from 'react'

function AddTask({ onAdd }) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add a task')
            return
        }
        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="">
                <label>Task</label>
                <input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="">
                <label>Day & Time</label>
                <input type="text" placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="">
                <label>Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Save Task" className="btna btn-block" />
        </form>
    )
}

export default AddTask
