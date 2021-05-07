import React from 'react';
import { contactContainer } from './index.module.css';
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className={contactContainer}>
      <a href="https://wa.me/5521971919815"><FaWhatsapp /></a>
    </div>
  );
}
