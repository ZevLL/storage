const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const expressJwt = require('express-jwt')
const guard = require('express-jwt-permissions')({
    permissionsProperty: 'scope',
    requestProperty: 'identity',
})

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        result: ''
    })
})

app.get('/verify/:userid', (req, res) => {
    console.log('req: ', req.originalUrl);
    res.json({ result: '' })
})

// app.use(function (err, req, res, next) {
//     if (err.code === 'permission_denied') {
//         res.status(403).send('Forbidden');
//     }
// });

app.listen(8000)