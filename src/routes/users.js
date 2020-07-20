const { Router, response } = require('express');
const router = Router();

const fetch = requiere('node-fetch');


router.get('/users', async (req, res) => {
    await fetch('http://jsonplaceholder.typicode.com/users');
    await response.json();
    //console.log(users);
    //res.send('users');
    res.json(users);
});

module.exports = router;