import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_ENGINE_SMTP_HOST,
    port: parseInt(process.env.EMAIL_ENGINE_SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.EMAIL_ENGINE_SMTP_USER,
        pass: process.env.EMAIL_ENGINE_SMTP_PASS,
    },
});

async function sendEmail(email, subject, text, html) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: process.env.EMAIL_ENGINE_SMTP_USER,
        to: email,
        subject,
        text,
        html,
    });
}

export default sendEmail;