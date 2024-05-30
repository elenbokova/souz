import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

exports.handler = async (event, context) => {
  try {
    const { name, phone } = JSON.parse(event.body);

    let transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL, 
        pass: process.env.PASSWORD, 
      },
    });

    // Email options
    let mailOptions = {
      from: process.env.MAIL,
      to: process.env.MAIL,
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
      body: JSON.stringify({ error: 'Не удалось отправить сообщение' }),
    };
  }
};