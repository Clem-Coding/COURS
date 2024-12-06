import { useState } from "react";

import "./App.scss";
import "normalize.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Container from "./components/Container";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <MainContent />
        <Footer />
      </Container>
    </>
  );
};

export default App;
