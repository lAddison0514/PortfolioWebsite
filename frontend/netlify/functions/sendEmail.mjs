// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
/*export default (request, context) => {
  try {
    const url = new URL(request.url)
    const subject = url.searchParams.get('name') || 'World'

    return new Response(`Hello ${subject}`)
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    })
  }
}*/

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

require('dotenv').config({ path: [".env", "../../.env"] });

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

/*router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: process.env.GMAIL_USER,
    subject: `Contact Form Submission ${name}`,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});*/

exports.handler = async function (event, context) {
    const name = event.body.name;
    const email = event.body.email;
    const message = event.body.message;
    const mail = {
        from: name,
        to: process.env.GMAIL_USER,
        subject: `Contact Form Submission ${name}`,
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            return {
                statusCode: 500,
                status: "ERROR",
            }
            //res.json({status: "ERROR"});
        } else {
            return {
                statusCode: 200,
                status: "Message Sent",
            }
            //res.json({ status: "Message Sent" });
        }
    });
}
