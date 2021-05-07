import React, { useContext } from 'react';
import {
  landingPageContainer,
  mainContent,
  footer,
  socialLogos,
  corporate,
  contact
} from "./index.module.css";
import Header from '../components/Header';
import Contact from '../components/Contact';
import { 
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaInstagram
} from "react-icons/fa";
import UserContext from '../contexts/UserContext';
import { useRouter } from 'next/router';

export default function LandingPage() {
  const { setRegistered } = useContext(UserContext);
  const router = useRouter();

  function LoginOrRegister(isRegistered, path) {
    setRegistered(isRegistered);
    router.push(path);
  }

  return(
    <div className={landingPageContainer}>
      <Header />
      <section className={mainContent}>
        <h1>Construa nosso futuro por meio da alocação de capital</h1>
        <button onClick={() => LoginOrRegister(false, '/register')}>Registre-se grátis!</button>
      </section>
      <footer className={footer}>
        <div className={socialLogos}>
          <div><FaTwitter /></div>
          <div><FaYoutube /></div>
          <div><FaLinkedin /></div>
          <div><FaFacebook /></div>
          <div><FaInstagram /></div>
        </div>
        <div className={corporate}>
          <p>@Liava</p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms {`&`} Conditions</a>
        </div>
      </footer>
      <Contact />
    </div>
  );
}
