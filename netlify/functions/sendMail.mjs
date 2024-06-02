// import nodemailer from 'nodemailer';

// let transporter = nodemailer.createTransport({
//   host: Netlify.env.get("MAIL_HOST"),
//   port: Netlify.env.get("MAIL_PORT"),
//   secure: Netlify.env.get("MAIL_PORT") == 465,
//   auth: {
//     user: Netlify.env.get("MAIL_USER"),
//     pass: Netlify.env.get("MAIL_PASS"),
//   },
// });

// const handler = async (event, context) => {
//   try {
//     if (event.httpMethod !== 'POST') {
//       return {
//         statusCode: 405,
//         body: JSON.stringify({ message: 'Method Not Allowed' }),
//       };
//     }

//     const { name, phone } = JSON.parse(event.body);

//     let mailOptions = {
//       from: Netlify.env.get("MAIL_USER"),
//       to: Netlify.env.get("MAIL_USER"),
//       subject: 'Новая заявка с сайта',
//       text: `Имя: ${name}\nТелефон: ${phone}`,
//     };

//     let info = await transporter.sendMail(mailOptions);
//     console.log('Сообщение отправлено: %s', info.messageId);

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Сообщение отправлено успешно' }),
//     };
//   } catch (error) {
//     console.error('Ошибка при отправке сообщения:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: error.message }),
//     };
//   }
// };



import nodemailer from 'nodemailer';

// Настройка транспондера nodemailer с использованием переменных окружения
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_PORT == 465,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Основная функция-обработчик
export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { name, phone } = JSON.parse(event.body);

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: 'Новая заявка с сайта',
    text: `Имя: ${name}\nТелефон: ${phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Сообщение отправлено успешно' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}

