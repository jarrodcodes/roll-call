const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const cors = require('cors');
const app = express();
const axios = require('axios');

app.use(bodyParser.json());
app.use(cors());

const studentList = new Sequelize("postgres://jarrod_young@localhost:5432/roll-call");

const checkins = studentList.define('checkins', {
    name: {
        type: Sequelize.STRING
    },
    accessToken: {
        type: Sequelize.STRING
    },
    studentId: {
        type: Sequelize.STRING
    },
    ipAddress: {
        type: Sequelize.STRING
    },
    checkedIn: {
        type: Sequelize.BOOLEAN
    }
});
checkins.sync({ force: true }).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U668FSHT5',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U8UPLMM71',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U93K6D81M',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U8ZRZ85UM',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U8ZELE0TE',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U8ZGRC1HS',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U958QPFA6',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U0601SRH7',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U94CERJ00',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U8ZM6SHRA',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U8ZKU3V8Q',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U92C0762Z',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U8ZD4ASUT',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U94M4UUTH',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U9GA3CHML',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U6F17CSA1',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U8YTSJJD6',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U9B0G77ST',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U94EC1T0E',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U9EL94GBU',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U8ZGHPRGA',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U8ZPC3F26',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U5BEN1VDG',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U8ZSHALCU',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U0569RQ2A',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U9471JD09',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U963V9SUB',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U8ZL055AP',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U1X1PLRAB',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U8Z54BTHP',
        ipAddress: null
    })
}).then(() => {
    return checkins.create({
        name: null,
        accessToken: null,
        studentId: 'U9KLQ0EUX',
        ipAddress: null
    })
})

    app.post('/checkin', function (req, res) {
        let newCheckin = req.body;
        console.log(newCheckin, 'checkin')
        let accessToken = req.body.accessToken
        let postedName = req.body.name
        let postedId = req.body.studentId
        axios.get('https://slack.com/api/users.identity?token=' + accessToken).then((response) => {
            if (response.data.user.id == postedId) {
                checkins.update(
                    { accessToken: newCheckin.accessToken, name: newCheckin.name, checkedIn: true, ipAddress: req.connection.remoteAddress }, { where: {studentId: postedId }}
                )
                res.send('Checked in!')
            }
            else {
                res.send('Data does not match Slack.')
            }
        })
    })
    app.listen(3001, () => {
        console.log('Checkin server started on 3001.')
    });