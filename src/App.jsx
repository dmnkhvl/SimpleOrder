import React, { useState } from "react";

// components
import Bag from "./components/Bag";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import Summary from "./components/Summary";

let id = 0;
const dph = 1.2;

function App() {
  const [products, setProducts] = useState([]);
  // user inputs
  const [name, setName] = useState("");
  const [pricePerPiece, setPricePerPiece] = useState(0);
  const [numberOfPieces, setNumberOfPieces] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // variables
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [priceWithoutDiscount, setPriceWithoutDiscount] = useState(0);
  const [discount, setDiscount] = useState(0);

  // error handling
  const [wrongName, setWrongName] = useState(false);
  const [wrongPrice, setWrongPrice] = useState(false);
  const [wrongAmount, setWrongAmount] = useState(false);
  const [wrongDiscount, setWrongDiscount] = useState(false);

  const handleClick = (e) => {
    if (name.length == 0) {
      setWrongName(true);
    }
    if (pricePerPiece <= 0) {
      setWrongPrice(true);
    }
    if (numberOfPieces <= 0) {
      setWrongAmount(true);
    } else if (discountPercentage < 0 || discountPercentage > 100) {
      setWrongDiscount(true);
    } else {
      setProducts([
        ...products,
        {
          id: id++,
          name: name,
          pricePerPiece: pricePerPiece,
          numberOfPieces: numberOfPieces,
          discountPercentage: discountPercentage,
        },
      ]);
      setWrongName(false);
      setWrongPrice(false);
      setWrongAmount(false);
      setWrongDiscount(false);

      setPriceWithoutDiscount(pricePerPiece * numberOfPieces);
      setDiscount(discountPercentage / 100);
      setTotalDiscount(
        (totalDiscount + priceWithoutDiscount - discount).toFixed(2)
      );
      setTotal((total + priceWithoutDiscount - totalDiscount).toFixed(2));
      setSubtotal((subtotal + total / dph).toFixed(2));
    }
  };

  return (
    <div className="App">
      <div className="bg-pastelBlack text-white min-h-screen ">
        <Header />
        <div className="flex flex-col max-w-screen-lg mx-auto">
          <ProductForm
            handleClick={handleClick}
            setName={setName}
            setDiscountPercentage={setDiscountPercentage}
            setNumberOfPieces={setNumberOfPieces}
            setPricePerPiece={setPricePerPiece}
            wrongName={wrongName}
            wrongAmount={wrongAmount}
            wrongDiscount={wrongDiscount}
            wrongPrice={wrongPrice}
          />
          <div className="sm:flex sm:items-start sm:gap-x-10 p-6 sm:mt-10">
            <Bag products={products} discount={discount} />
            <Summary
              products={products}
              total={total}
              subtotal={subtotal}
              totalDiscount={totalDiscount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
