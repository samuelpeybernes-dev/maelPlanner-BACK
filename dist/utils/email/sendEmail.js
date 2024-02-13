"use strict";
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
const sendEmail = async (email, subject, payload, template) => {
    try {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: 'contactsamuelpeybernes@gmail.com',
                pass: 'zstv mwws bcts fjsp', // naturally, replace both with your real credentials or an application-specific password
            },
        });
        const source = fs.readFileSync(path.join(__dirname, template), 'utf8');
        const compiledTemplate = handlebars.compile(source);
        const options = () => {
            return {
                from: 'contactsamuelpeybernes@gmail.com',
                to: email,
                subject: subject,
                html: compiledTemplate(payload),
            };
        };
        // Send email
        transporter.sendMail(options(), (error, info) => {
            if (error) {
                return error;
            }
            else {
                return res.status(200).json({
                    success: true,
                });
            }
        });
    }
    catch (error) {
        return error;
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
module.exports = sendEmail;
//# sourceMappingURL=sendEmail.js.map