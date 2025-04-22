import React from 'react';
import '../styles/Contact.scss';
import { FaEnvelope as RawEnvelope, FaLinkedin as RawLinkedin, FaGithub as RawGithub } from 'react-icons/fa';

const FaEnvelope = RawEnvelope as unknown as React.FC;
const FaLinkedin = RawLinkedin as unknown as React.FC;
const FaGithub = RawGithub as unknown as React.FC;

const ContactIcons: React.FC = () => {
  return (
    <div className="contact-icons">
      <a href="mailto:erinxu2003@gmail.com" aria-label="Email">
        <FaEnvelope />
      </a>
      <a href="https://www.linkedin.com/in/erinnxu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://github.com/erin-xu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
    </div>
  );
};

export default ContactIcons;
