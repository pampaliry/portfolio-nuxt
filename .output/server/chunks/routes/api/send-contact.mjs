import { c as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import nodemailer from 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'ipx';
import 'node:path';

const sendContact = defineEventHandler(async (event) => {
  if (event.method !== "POST") {
    return {
      statusCode: 405,
      statusMessage: "Method Not Allowed",
      success: false,
      error: "Only POST requests are allowed"
    };
  }
  const body = await readBody(event);
  if (!body.name || !body.email || !body.message) {
    return { success: false, error: "Missing fields" };
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });
  try {
    await transporter.sendMail({
      from: `"${body.name}" <${body.email}>`,
      to: process.env.MAIL_TO,
      subject: "Spr\xE1va z kontaktn\xE9ho formul\xE1ra",
      text: body.message
    });
    return { success: true };
  } catch (error) {
    console.error("\u274C Chyba pri odosielan\xED emailu:", error);
    return { success: false, error: "Nepodarilo sa odosla\u0165 email" };
  }
});

export { sendContact as default };
//# sourceMappingURL=send-contact.mjs.map
