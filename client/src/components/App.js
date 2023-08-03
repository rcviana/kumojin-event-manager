import React from 'react'
import EventCreate from './EventCreate'
import EventList from './EventList'

export default () => {
    return (
        <div className='container'>
            <h1>Create an event</h1>
            <EventCreate />
            <hr />
            <h1>Events</h1>
            <EventList />
        </div>
    )
}