import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_PORT == 465,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  try {
    const { name, phone } = JSON.parse(event.body);

    let mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: 'Новая заявка с сайта',
      text: `Имя: ${name}\nТелефон: ${phone}`,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log('Сообщение отправлено: %s', info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Сообщение отправлено успешно' }),
    };
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
