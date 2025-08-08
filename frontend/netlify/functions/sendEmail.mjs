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

const dotenv = await import("dotenv");
dotenv.config({ path: [".env", "../../.env"] });
const nodemailer = await import("nodemailer");

//const envLoaded = require('dotenv').config({ path: [".env", "../../.env"] });
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: !process.env.GMAIL_USER ? {
            user: Netlify.env.get("GMAIL_USER"),
            ass: Netlify.env.get("GMAIL_PASSWORD"),
        }
        :
        {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
        }
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

export default async (event, context) => {
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
        from: name,
        to: process.env.GMAIL_USER,
        subject: `Contact Form Submission ${name}`,
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
    };

    const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: !process.env.GMAIL_USER ? {
            user: Netlify.env.get("GMAIL_USER"),
            ass: Netlify.env.get("GMAIL_PASSWORD"),
        }
        :
        {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
        }
    });

    contactEmail.verify((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Ready to Send");
      }
    });

    contactEmail.sendMail(mail, (error) => {
        if (error) {
             return new Response(error.toString(), {
                status: 500,
            })
            //res.json({status: "ERROR"});
        } else {
            return new Response("Message sent", {
                status: 200,
            })
            //res.json({ status: "Message Sent" });
        }
    });
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
