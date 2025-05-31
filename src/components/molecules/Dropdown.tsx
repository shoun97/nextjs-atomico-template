'use client';
import { useState } from 'react';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-700 px-3 py-2 hover:text-blue-600"
      >
        Servicios ▼
      </button>
      {open && (
        <div className="absolute bg-white shadow rounded mt-2 w-48 z-10">
          <a className="block px-4 py-2 hover:bg-gray-100" href="#">Desarrollo Web</a>
          <a className="block px-4 py-2 hover:bg-gray-100" href="#">Diseño</a>
          <a className="block px-4 py-2 hover:bg-gray-100" href="#">Consultoría</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
