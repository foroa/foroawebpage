import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useContext } from "react"
import LangContext from '../LangContext'

const ContactForm = () => {

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let lastnameS = document.getElementById("lastname");
    let firstnameS = document.getElementById("firstname");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".formMessage");

    const isEmail = () => {
      let isMail = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    if (lastname && firstname && isEmail() && message) {
      lastnameS.classList.remove("red");
      firstnameS.classList.remove("red");
      emailS.classList.remove("red");
      messageS.classList.remove("red");

      if(contextValue.lang === "français")
        formMess.innerHTML = "Message en cours d'envoi...";
      else
        formMess.innerHTML = "Message being sent ...";
      formMess.style.background = "#00c1ec";
      formMess.style.opacity = "1";

      // voir doc : https://www.emailjs.com/docs/examples/reactjs/
      emailjs
        .send(
          // your service ID
          'service_4ea8hfn',
          // your template ID
          'template_z0ok8ls',
          {
            lastname,
            firstname,
            phone,
            email,
            message,
          },
          // your user ID (protégé par .env)          
            'user_Qh9J12NEQTZJDal6eAOtG'
        )
        .then(
          () => {

            if(contextValue.lang === "français")
            formMess.innerHTML =
              "Message envoyé ! Je vous recontacterai dès que possible.";
            else
            formMess.innerHTML =
              "Message sent ! I will get back to you as soon as possible.";

            document.getElementById("lastname").classList.remove("error");
            document.getElementById("firstname").classList.remove("error");
            document.getElementById("phone").classList.remove("error");
            document.getElementById("email").classList.remove("error");
            document.getElementById("message").classList.remove("error");
            setLastname("");
            setFirstname("");
            setPhone("");
            setEmail("");
            setMessage("");

            setTimeout(() => {
              formMess.style.opacity = "0";
            }, 5000);
          },
          (err) => {
            console.log(err);
            formMess.style.background = "rgb(253, 87, 87)";
            if(contextValue.lang === "français")
            formMess.innerHTML =
              "Une erreur s'est produite, veuillez réessayer.";
            else
            formMess.innerHTML =
              "An error has occurred. Please try again.";
          }
        );
    } else {
      if(contextValue.lang === "français")
        formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      else
        formMess.innerHTML = "Please fill in the required fields correctly *";
      formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.opacity = "1";

      if (!lastname) {
        lastnameS.classList.add("error");
      }
      if (!firstname) {
        firstnameS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  };

  const contextValue = useContext(LangContext)

  return (

    <form className="contact-form">

      { contextValue.lang === "français" ? 
      (<div className="form-content">
        <input
          type="text"
          id="lastname"
          name="lastname"
          required
          onChange={(e) => setLastname(e.target.value)}
          placeholder="nom *"
          value={lastname}
        />
        <input
          type="text"
          id="firstname"
          name="firstname"
          required
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="prénom *"
          value={firstname}
        />
        <div className="phone-content">
          <input
            type="tel"//ou text!
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="téléphone"
            value={phone}
          />
        </div>
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
          required
        />
      </div>)
      :
      (<div className="form-content">
        <input
          type="text"
          id="firstname"
          name="firstname"
          required
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="firstname *"
          value={firstname}
        />
        <input
          type="text"
          id="lastname"
          name="lastname"
          required
          onChange={(e) => setLastname(e.target.value)}
          placeholder="lastname *"
          value={lastname}
        />
        <div className="phone-content">
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="phone"
            value={phone}
          />
        </div>
        <div className="email-content">
          <label id="not-mail">Invalid email</label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
          required
        />
      </div>) }

      { contextValue.lang === "français" ? 
      (<input
        className="button"
        type="submit"
        value="envoyer"
        onClick={(e) => handleSubmit(e)}
      />)
      :
      (<input
        className="button"
        type="submit"
        value="send"
        onClick={(e) => handleSubmit(e)}
      />) }
      <div className="formMessage"></div>

    </form>
    
    

  );
};

export default ContactForm;