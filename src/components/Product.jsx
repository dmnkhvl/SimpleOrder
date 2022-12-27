import React from "react";

function Product({ name, price, amount, discount }) {
  return (
    <div className="mx-auto text-white w-full">
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">{name}</p>
          <div className="flex items-center">
            <p className="font-normal text-sm">{price}€ per piece</p>
            <p className="text-xs font-normal text-special ml-2 "> w/o VAT</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-normal text-base mt-1">
            <span className="text-special font-semibold mr-2">{amount}</span>
            Quantity
          </p>
          <div className="flex items-center">
            <p className="font-normal text-lg mt-1">
              {Math.round(price * amount * 100) / 100}€ before discount
            </p>
            <p className="text-xs font-normal text-special ml-2 mt-1 ">
              w/o VAT
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-normal text-base mt-1">
            <span className="text-special font-semibold mr-2">{discount}%</span>
            discount
          </p>
          <div className="flex items-center">
            <p className="font-semibold text-lg">
              {Math.round(
                (price * amount - price * amount * (discount / 100)) * 100
              ) / 100}
              € after discount
            </p>
            <p className="text-xs font-normal text-special ml-2 ">w/o VAT</p>
          </div>
        </div>
        <p className="flex justify-center mt-4 font-semibold text-2xl">
          <span className="text-special mr-2">
            {Math.round(
              (price * amount - price * amount * (discount / 100)) * 1.2 * 100
            ) / 100}
            €
          </span>
          total
        </p>
      </div>
    </div>
  );
}

export default Product;
