const express = require('express');
const router = new express.Router();

router.post('/send', async (req, res) => {
    const email=req.body
    console.log(email);
    res.send(email)
})

module.exports = router;