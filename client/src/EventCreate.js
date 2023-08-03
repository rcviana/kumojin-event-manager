import React, { useState } from 'react'
import axios from 'axios'

export default () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [startsAt, setStartsAt] = useState('')
    const [endsAt, setEndsAt] = useState('')
    const onSubmit = async (event) => {
        event.preventDefault()
        await axios.post('http://localhost:4000/events', {
            name,
            desc,
            startsAt,
            endsAt
        })
        setName('')
        setDesc('')
        setStartsAt('')
        setEndsAt('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Name</label>
                    <input id='name' 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        className='form-control' 
                        maxLength={32}
                        required />
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <input id='desc' 
                        value={desc} 
                        onChange={e => setDesc(e.target.value)} 
                        className='form-control' 
                        required />
                </div>
                <div className='form-group'>
                    <label>Starts at:</label>
                    <input id='startsAt' 
                        value={startsAt} 
                        onChange={e => setStartsAt(e.target.value)} 
                        className='form-control' 
                        type='datetime-local' 
                        min='2023-08-01' 
                        max='2093-08-01' 
                        required />
                </div>
                <div className='form-group'>
                    <label>Ends at:</label>
                    <input id='endsAt' 
                        value={endsAt} 
                        onChange={e => setEndsAt(e.target.value)} 
                        className='form-control' 
                        type='datetime-local' 
                        min='2023-08-01' 
                        max='2093-08-01' 
                        required />
                </div>
                <button className='btn btn-primary'>Create</button>
            </form>
        </div>
    )
}