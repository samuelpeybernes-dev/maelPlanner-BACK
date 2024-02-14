const nodemailer = require('nodemailer')
const handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')

export default async (email, subject, payload, template) => {
  try {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // naturally, replace both with your real credentials or an application-specific password
      },
    })

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error)
          reject(error)
        } else {
          console.log('Server is ready to take our messages')
          resolve(success)
        }
      })
    })

    const source = fs.readFileSync(path.join(__dirname, template), 'utf8')
    const compiledTemplate = handlebars.compile(source)
    const options = {
      from: process.env.SMTP_USER,
      to: email,
      subject: subject,
      html: 'test',
    }

    // Send email
    await new Promise((resolve, reject) => {
      transporter.sendMail(options, (err, info) => {
        if (err) {
          console.error(err)
          reject(err)
        } else {
          console.log(info)
          resolve(info)
        }
      })
    })
    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    return error
  }
}

/*
Example:
sendEmail(
  "youremail@gmail.com,
  "Email subject",
  { name: "Eze" },
  "./templates/layouts/main.handlebars"
);
*/
