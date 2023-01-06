const express = require('express');
const router = new express.Router();
const nodemailer = require("nodemailer")

router.get("/", async (req, res) => {
  res.send("mail sender is running");
});

router.post('/send', async (req, res) => {
    const {email}=req.body
    console.log(email);
    
    try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.USER,
            pass: process.env.PASS,
          },
        });
        const sub = ['Hello World', "Hello this is Ghost", "Hello this is Owner"];
        const msg = ['it was me', 'sent successfully', 'no more today']
        
        const mailOptins = {
          form: process.env.USER,
          to: email,
          subject: sub[Math.floor(Math.random() * sub.length)],
          html: `<p>${msg[Math.floor(Math.random() * msg.length)]}</p>`,
        };

        transporter.sendMail(mailOptins, (error, info) => {
            if (error) {
                console.log('Error',error);
            } else {
                console.log('Email sent' + info.response);
                res.status(201).json({status:201,info})
            }
        })


    } catch (error) {
        res.status(401).json({status:401,error})
    }

})

module.exports = router;