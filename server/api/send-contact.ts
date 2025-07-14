import { defineEventHandler, readBody } from 'h3';
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.name || !body.email || !body.message) {
    return { success: false, error: 'Missing fields' };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail', // alebo smtp provider (zoznam nižšie)
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
