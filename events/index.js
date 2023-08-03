const express = require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const moment = require('moment-timezone')
const cors = require('cors')
const { body } = require('express-validator')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const events = {}

app.get('/events', (req, res) => {
    res.send(events)
})

app.post('/events', 
    [
        body('name')
            .trim()
            .isLength({ max: 32 })
            .withMessage('Name must have 32 characters maximum!')
    ], 
    (req, res) => {
        const id = uuidv4()
        const { name, desc, startsAt, endsAt } = req.body

        const startsAtInUTC = moment(startsAt).utc().format()
        const endsAtInUTC = moment(endsAt).utc().format()

        events[id] = {
            id, name, desc, startsAtInUTC, endsAtInUTC
        }

        res.status(201).send(events[id])
    }
)

app.listen(4000, () => {
    console.log('Listening on 4000...')
})