const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.render('./students/list');
});

module.exports = route;