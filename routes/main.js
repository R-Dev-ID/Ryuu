__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/index', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})
router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs-1.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/login.html')
})
router.get('/register', (req, res) => {
    res.sendFile(__path + '/views/register.html')
})
router.get('/login', (req, res) => {
    res.sendFile(__path + '/views/login.html')
})
router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

module.exports = router
