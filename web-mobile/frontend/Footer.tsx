// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; 2024 Proffy - Todos os direitos reservados</p>
        <div className="mt-4">
          <a href="#" className="text-white hover:text-gray-200 mx-2">Facebook</a>
          <a href="#" className="text-white hover:text-gray-200 mx-2">Twitter</a>
          <a href="#" className="text-white hover:text-gray-200 mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
