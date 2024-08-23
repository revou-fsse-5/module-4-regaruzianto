import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Webtrial. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href="https://twitter.com" className="text-blue-400 hover:underline">
            Twitter
          </a>{' '}
          and{' '}
          <a href="https://facebook.com" className="text-blue-400 hover:underline">
            Facebook
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
