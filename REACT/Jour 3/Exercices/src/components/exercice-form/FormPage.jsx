import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

export default function FormPage() {
  return (
    <>
      <Header
        logoSrc="./images/contracter.png"
        siteTitle="Formulaire de contact"
      />
      <ContactForm />
      <Footer copyright="© Clem-Coding" />
    </>
  );
}
