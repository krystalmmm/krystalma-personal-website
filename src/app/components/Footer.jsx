import React from 'react';

const Footer = () => {
  return (
    <footer className="footer z-10 text-white">
      <div className="container p-12 flex justify-between">
        <span></span>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600 font-barlow font-extralight text-lg">Designed with <span className="font-normal">Figma</span>. Coded in <span className="font-normal">VS Code</span>. Built with <span className="font-normal">NextJS, React</span> and <span className="font-normal">Tailwind CSS</span>. Deployed with <span className="font-normal">Vercel</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

