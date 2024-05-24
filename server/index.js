import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors({
    origin: 'http://localhost:8000',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(express.json());

app.use(express.static('public'));

let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD
    }
});

app.post("/sendmail", cors(), (req, res) => {
    let { name, phone } = req.body;

    let mailOptions = {
        from: process.env.MAIL,
        to: process.env.MAIL,
        subject: `Message from ${name}`,
        text: `Phone number: ${phone}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error when sending email");
        } else {
            console.log("Email sent successfully", info);
            res.status(200).send("Email sent successfully");
        }
    });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));