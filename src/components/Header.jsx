import React from "react";

// icons
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <div className="flex justify-between bg-purple-600 text-black items-center px-10 py-4 rounded-b-2xl w-full">
      <p>Shopping Cart</p>
      <FiShoppingCart />
    </div>
  );
}

export default Header;
