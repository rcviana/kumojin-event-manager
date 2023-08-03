import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default () => {
    const [events, setEvents] = useState({})

    const fetchEvents = async () => {
        const events = await axios.get('http://localhost:4000/events')
        setEvents(events.data)
    }

    useEffect(() => {
        fetchEvents()
    })

    const eventsObj = Object.values(events).map(event => {
        return <div className='card' key={event.id}>
            <div className='card-body'>
                <h3>{event.name}</h3>
                <p>{event.desc}</p>
                <p>Starts at: {new Date(event.startsAtInUTC).toString()}</p>
                <p>Ends at: {new Date(event.endsAtInUTC).toString()}</p>
            </div>
        </div>
    })

    return <div>{eventsObj}</div>
}