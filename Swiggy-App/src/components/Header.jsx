import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      <div className="flex items-center gap-3">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
          alt="Swiggy Logo"
          className="w-12"
        />
        <h1 className="text-2xl font-bold">Swiggy</h1>
      </div>

      <nav className="flex items-center gap-6 text-lg font-medium">
        <a href="#" className="hover:text-orange-500">Home</a>
        <a href="#" className="hover:text-orange-500">Cart</a>
        <input
          type="text"
          placeholder="Search Food..."
          className="px-3 py-1 border rounded-lg focus:outline-orange-500"
        />
      </nav>
    </header>
  );
}
