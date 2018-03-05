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
    }
});
checkins.sync({ force: true })

app.post('/checkin', function (req, res) {
    let newCheckin = req.body;
    let accessToken = req.body.accessToken
    let postedName = req.body.name
    let postedId = req.body.studentId
    axios.get('https://slack.com/api/users.identity?token=' + accessToken).then((response) => {
        console.log(response, 'slack response')
        if (response.data.user.name == postedName && response.data.user.id == postedId) {
            checkins.create({
                name: newCheckin.name,
                accessToken: newCheckin.accessToken,
                studentId: newCheckin.studentId,
                ipAddress: req.connection.remoteAddress
            })
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