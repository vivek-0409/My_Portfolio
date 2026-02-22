import React from 'react';
import { WhatsAppSvg } from '../constants';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '7041175669'; // TODO: Replace with your WhatsApp phone number (e.g., '1234567890')
  const message = "*Hello, I visited your bio website and found your work very impressive. I am interested in working with you and would love to get guidance and more details regarding learning and collaboration.*";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-neon-cyan text-dark-navy p-4 rounded-full shadow-lg flex items-center justify-center
                 text-2xl font-bold z-50 hover:bg-ice-cyan transition-all duration-300 ease-in-out
                 transform hover:scale-110 animate-pulseSlow"
      aria-label="Contact me on WhatsApp"
    >
      <WhatsAppSvg />
    </a>
  );
};

export default WhatsAppButton;