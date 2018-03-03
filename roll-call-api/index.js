const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const studentList = new Sequelize("postgres://jarrod_young@localhost:5432/smarta-commute");

const studentList = studentList.define('stations', {
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
        type: Sequelize.BOOLEAN
    }
});

studentList.sync({ force: true }).then(() => {
    return studentList.create({
        name: 'Buckhead',
        accessToken: '',
        studentId: 'Red',
        ipAddress: false,
    }
    ).then(() => {
        return studentList.create({
            name: 'Medical Center',
            accessToken: '',
            studentId: 'Red',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Dunwoody',
            accessToken: '',
            studentId: 'Red',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Sandy Springs',
            accessToken: '',
            studentId: 'Red',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'North Springs',
            accessToken: '',
            studentId: 'Red',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Five Points',
            accessToken: '',
            studentId: 'Gold, Red, Blue, Green',
            ipAddress: false,
        })
    }).then(() => {
        return studentList.create({
            name: 'Peachtree Center',
            accessToken: '',
            studentId: 'Gold, Red',
            ipAddress: false,
        })
    }).then(() => {
        return studentList.create({
            name: 'Civic Center',
            accessToken: '',
            studentId: 'Gold, Red',
            ipAddress: false,
        })
    }).then(() => {
        return studentList.create({
            name: 'North Avenue',
            accessToken: '',
            studentId: 'Gold, Red',
            ipAddress: false,
        })
    }).then(() => {
        return studentList.create({
            name: 'Midtown',
            accessToken: '',
            studentId: 'Gold, Red',
            ipAddress: false,
        })
    }).then(() => {
        return studentList.create({
            name: 'Arts Center',
            accessToken: '',
            studentId: 'Gold, Red',
            ipAddress: false,
        })
    }).then(() => {
        return studentList.create({
            name: 'Lindbergh Center',
            accessToken: '',
            studentId: 'Gold, Red',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Lenox',
            accessToken: '',
            studentId: 'Gold',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Brookhaven/Oglethorpe University',
            accessToken: '',
            studentId: 'Gold',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Chamblee',
            accessToken: '',
            studentId: 'Gold',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Doraville',
            accessToken: '',
            studentId: 'Gold',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Garnett',
            accessToken: '',
            studentId: 'Gold, Red',
            ipAddress: false,
        })
    }).then(() => {
        return studentList.create({
            name: 'West End',
            accessToken: '',
            studentId: 'Gold, Red',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Oakland City',
            accessToken: '',
            studentId: 'Gold, Red',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Lakewood/Ft. McPherson',
            accessToken: '',
            studentId: 'Gold, Red',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'East Point',
            accessToken: '',
            studentId: 'Gold, Red',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'College Park',
            accessToken: '',
            studentId: 'Gold, Red',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Airport',
            accessToken: '',
            studentId: 'Gold, Red',
            ipAddress: false,
        })
    }).then(() => {
        return studentList.create({
            name: 'Dome/GWCC/Philips Arena/CNN Center Station',
            accessToken: '',
            studentId: 'Blue, Green',
            ipAddress: false,
        })
    }).then(() => {
        return studentList.create({
            name: 'Vine City',
            accessToken: '',
            studentId: 'Blue, Green',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Ashby',
            accessToken: '',
            studentId: 'Blue, Green',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'West Lake',
            accessToken: '',
            studentId: 'Blue',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Hamilton E. Holmes',
            accessToken: '',
            studentId: 'Blue',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Georgia State',
            accessToken: '',
            studentId: 'Blue, Green',
            ipAddress: false,
        })
    }).then(() => {
        return studentList.create({
            name: 'King Memorial',
            accessToken: '',
            studentId: 'Blue, Green',
            ipAddress: false,
        })
    }).then(() => {
        return studentList.create({
            name: 'Inman Park/Reynoldstown',
            accessToken: '',
            studentId: 'Blue, Green',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Edgewood/Candler Park',
            accessToken: '',
            studentId: 'Blue, Green',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'East Lake',
            accessToken: '',
            studentId: 'Blue',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Decatur',
            accessToken: '',
            studentId: 'Blue',
            ipAddress: false,
        })
    }).then(() => {
        return studentList.create({
            name: 'Avondale',
            accessToken: '',
            studentId: 'Blue',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Kensington',
            accessToken: '',
            studentId: 'Blue',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Indian Creek',
            accessToken: '',
            studentId: 'Blue',
            ipAddress: true,
        })
    }).then(() => {
        return studentList.create({
            name: 'Bankhead',
            accessToken: '',
            studentId: 'Green',
            ipAddress: false,
        })
    })
});


app.get('/gold', function (req, res) {
    studentList.findAll({
        where: {
            studentId: {
              $like: "%Gold%"
            }
          }
    }).then(stations => {
        res.send(stations);
    })
});


app.post('/checkin', function (req, res) {
    let newCheckin = request.body;
    studentList.create ({
        name: newCheckin.name,
        accessToken: newCheckin.accessToken,
        studentId: newCheckin.studentId,
        ipAddress: newCheckin.ipAddress
        })
    res.send('Checked in!')
  })

app.listen(3000, () => {
    console.log('Hi!! You are on port 3000!')
});