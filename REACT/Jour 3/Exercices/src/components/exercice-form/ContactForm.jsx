import React, { useState } from "react";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contact, setContact] = useState({
    lastName: "",
    firstName: "",
    age: 0,
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newContact = { ...contact };
    newContact[name] = value;
    setContact(newContact);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contact);
    setFormSubmitted(true);
    event.target.reset();
  };

  return (
    <>
      {!formSubmitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="lastNameId">Nom</label>
          <input
            type="text"
            name="lastName"
            id="lastNameId"
            value={contact.lastName}
            onChange={handleChange}
          />

          <label htmlFor="firstNameId">Prénom</label>
          <input
            type="text"
            name="firstName"
            id="firstNameId"
            value={contact.firstName}
            onChange={handleChange}
          />

          <label htmlFor="ageId">Age</label>
          <input
            type="number"
            min="0"
            name="age"
            id="ageId"
            value={contact.age}
            onChange={handleChange}
          />

          <label htmlFor="emailId">Email</label>
          <input
            type="email"
            name="email"
            id="emailId"
            value={contact.email}
            onChange={handleChange}
          />

          <label htmlFor="phoneId">Téléphone</label>
          <input
            type="phone"
            name="phone"
            id="phoneId"
            value={contact.phone}
            onChange={handleChange}
          />

          <label htmlFor="messageId">Message</label>
          <textarea
            name="message"
            id="messageId"
            value={contact.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Envoyer</button>
        </form>
      ) : (
        <div className="popup">
          <p>Demande prise en compte, on revient vers vous bientôt ;)</p>
          <button onClick={() => setFormSubmitted(false)}>Fermer</button>
        </div>
      )}
    </>
  );
}
