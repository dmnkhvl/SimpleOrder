import React from "react";

function Product({ name, price, amount, discount }) {
  return (
    <div className="mx-auto bg-white max-w-72 text-gray rounded-xl max-w-md">
      <div className="p-10">
        <p className="font-bold text-xl text-gray">{name}</p>
        <p className="font-semibold text-lg text-gray">
          {price}€ per piece w/o VAT
        </p>
        <p className="font-semibold text-lg text-gray">{amount}</p>
        <p className="font-semibold text-lg text-gray">
          {price * amount}€ w/o VAT before discount
        </p>
        <p className="font-semibold text-lg text-gray">{discount}% discount</p>
        <p className="font-semibold text-lg text-gray">
          {price * amount - price * amount * (discount / 100)}€ w/o VAT after
          discount
        </p>
        <p className="font-semibold text-lg text-gray">
          {(price * amount - price * amount * (discount / 100)) * 1.2}€ total
        </p>
      </div>
    </div>
  );
}

export default Product;
