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



//const envLoaded = require('dotenv').config({ path: [".env", "../../.env"] });

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

import nodemailer from "nodemailer";
import dotenv from "dotenv";

export default async function handler(event, context) {
    dotenv.config({ path: [".env", "../../.env"] });

    const userEmail = process.env.GMAIL_USER ? process.env.GMAIL_USER : Netlify.env.get("GMAIL_USER");
    const password = process.env.GMAIL_PASSWORD ? process.env.GMAIL_PASSWORD :  Netlify.env.get("GMAIL_PASSWORD");

    let bodyContent;
    if (typeof event.content === 'string') {
      // Body is already a string (common in Netlify)
      bodyContent = event.body;
    } else if (event.body.getReader) {
      // Body is a ReadableStream (less common in Netlify)
      bodyContent = await readStream(event.body);
    } else {
        // Body is in unexpected format
        return new Response("Unsupported request body format", {
            status: 400,
        })
    }
    const eventBody = JSON.parse(bodyContent);

    const name = eventBody.name;
    const email = eventBody.email;
    const message = eventBody.message;
    const mail = {
        from: userEmail,
        to: userEmail,
        subject: `Contact Form Submission ${name}`,
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
    };

    console.log(mail);

    const contactEmail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: userEmail,
            pass: password,
        }
    });

    await contactEmail.verify((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Ready to Send");
      }
    });

    console.log("message sending");

    try {
        const info = await contactEmail.sendMail(mail);

        return new Response("Message sent", {
            status: 200,
        })
    }
    catch (error) {
        console.log(error);
        return new Response(error.toString(), {
            status: 500,
        })
    }
}

async function readStream(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += decoder.decode(value, { stream: true });
  }

  result += decoder.decode(); // flush any remaining bytes
  return result;
}
