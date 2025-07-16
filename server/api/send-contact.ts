import { defineEventHandler, readBody } from 'h3';
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    return {
      statusCode: 405,
      statusMessage: 'Method Not Allowed',
      success: false,
      error: 'Only POST requests are allowed',
    };
  }

  const body = await readBody(event);

  if (!body.name || !body.email || !body.message) {
    return { success: false, error: 'Missing fields' };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${body.name}" <${body.email}>`,
      to: process.env.MAIL_TO,
      subject: 'Správa z kontaktného formulára',
      text: body.message,
    });

    return { success: true };
  } catch (error) {
    console.error('❌ Chyba pri odosielaní emailu:', error);
    return { success: false, error: 'Nepodarilo sa odoslať email' };
  }
});
