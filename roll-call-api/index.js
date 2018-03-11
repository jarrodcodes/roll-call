const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const cors = require('cors');
const app = express();
const axios = require('axios');

app.use(bodyParser.json());
app.use(cors());

const team = require('./team.json')

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

    let userList = { team }.team.users

    Object.keys(userList).forEach(function (key) {
        let user = key;
        return checkins.create({
            name: null,
            accessToken: null,
            studentId: user,
            ipAddress: null
        })
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
                { accessToken: newCheckin.accessToken, name: newCheckin.name, checkedIn: true, ipAddress: req.connection.remoteAddress }, { where: { studentId: postedId } }
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