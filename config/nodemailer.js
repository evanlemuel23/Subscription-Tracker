import transporter, { accountEmail } from './mailer.js';

async function sendEmail() {
  try {
    const info = await transporter.sendMail({
      from: accountEmail,
      to: 'recipient@example.com',
      subject: 'Test Email',
      text: 'Hello, this is a test email!',
    });

    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();
