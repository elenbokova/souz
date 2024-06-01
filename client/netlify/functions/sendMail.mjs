import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  host: Netlify.env.get("MAIL_HOST"),
  port: Netlify.env.get("MAIL_PORT"),
  secure: Netlify.env.get("MAIL_PORT") == 465,
  auth: {
    user: Netlify.env.get("MAIL_USER"),
    pass: Netlify.env.get("MAIL_PASS"),
  },
});

const handler = async (event, context) => {
  try {
    const { name, phone } = JSON.parse(event.body);

    let mailOptions = {
      from: Netlify.env.get("MAIL_USER"),
      to: Netlify.env.get("MAIL_USER"),
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

export default handler;
