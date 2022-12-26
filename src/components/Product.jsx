import React from "react";

function Product({ name, price, amount, discount }) {
  return (
    <div className="mx-auto bg-white text-dark rounded-3xl max-w-xs">
      <div className="p-10">
        <p>{name}</p>
        <p>{price}$</p>
        <p>{amount}</p>
        <p>{discount}</p>
      </div>
    </div>
  );
}

export default Product;
