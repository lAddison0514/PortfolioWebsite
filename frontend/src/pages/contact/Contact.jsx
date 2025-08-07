import "./Contact.css"

import PageTopper from "../../components/PageTopper/PageTopper";
import {useState} from "react";
import { FaLinkedin } from 'react-icons/fa';

import {motion} from "motion/react";


//Ref from: https://github.com/w3collective/react-contact-form
const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        /*let response = await fetch("http://3.141.36.120/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        }).catch(error => console.log(error));*/

        let response = await fetch('/.netlify/functions/sendEmail', {
            method: "POST",
            body: JSON.stringify(details)
        }).catch(error => console.log(error));

        setStatus("Submit");
        let result = await response.json();
        alert(result.status);

        document.getElementById("contactForm").reset();
    };
    return  (
        <div>
            <div style={{display: "flex", marginTop: "70px", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <PageTopper srcImage={"../../../imgs/Addison-Pillars.jpg"} title={"CONTACT"} imgPos={18} />

                <h1 className={"contactHeader sendMessage"}>Send a message!</h1>

                <div className={"formBGdiv"}>
                    <form id="contactForm" className={"contactForm"} onSubmit={handleSubmit}>

                            <input className={"formInput nameEmail"} type="text" id="name" placeholder="Name"  required />


                            <input className={"formInput nameEmail"} type="email" id="email" placeholder="Email" required />


                            <textarea className={"formInput message"} id="message" placeholder="Message" required />

                            <motion.button whileHover={{scale: 1.05}} whileTap={{scale:0.95}} className={"submitButton"} type="submit">{status}</motion.button>
                    </form>
                </div>

                <h1 className={"contactHeader contactHere"}>Or contact me here!</h1>

                <div className={"contactInfoDiv"}>
                    <p style={{margin: "4px 10px"}}>Tel. (616) 745-1580 | addisonslouis@gmail.com | </p>

                    <a className={"linkedInLink"} target={"_blank"} href={"https://www.linkedin.com/in/louis-addison/"}> <FaLinkedin/> </a>
                </div>


        </div>
        </div>
    )
}

export default Contact