const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    //res.send('Hello World');
    // res.json({"Title": "Hello World"})
    const data = {
        "name": "Jhon",
        "website": "jhonssegura.com"
    };
    res.json(data);
})

module.exports = router;