import React from "react";
import { BiTrash as Delete } from "react-icons/bi";

function Product({4 name, price, amount, discount, onClick }) {
  return (
    <div className="mx-auto w-full pb-8 border-b border-lightGray">
      <div className="mt-4 text-mdGray">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg text-black">{name}</p>
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
            <p className="font-normal text-lg">
              {Math.round(
                (price * amount - price * amount * (discount / 100)) * 100
              ) / 100}
              € after discount
            </p>
            <p className="text-xs font-normal text-special ml-2 ">w/o VAT</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button onClick={onClick} className="text-black">
            <Delete size={24} />
          </button>
          <p className="flex justify-center text-black font-semibold text-2xl">
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
    </div>
  );
}

export default Product;
