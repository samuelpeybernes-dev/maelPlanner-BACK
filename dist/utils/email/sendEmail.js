"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
exports.default = async (email, subject, payload, template) => {
    try {
        // const source = fs.readFileSync(path.join(__dirname, template), 'utf8')
        // const compiledTemplate = handlebars.compile(source)
        await nodemailer
            .createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS, // naturally, replace both with your real credentials or an application-specific password
            },
        })
            .sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject,
            html: 'test',
        });
        console.log('Email sent to ' + email);
    }
    catch (e) {
        console.error(e);
    }
};
/*
Example:
sendEmail(
  "youremail@gmail.com,
  "Email subject",
  { name: "Eze" },
  "./templates/layouts/main.handlebars"
);
*/
//# sourceMappingURL=sendEmail.js.map