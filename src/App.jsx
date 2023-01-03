import React, { useState } from "react";

// components
import Bag from "./components/Bag";
import ProductForm from "./components/ProductForm";
import Summary from "./components/Summary";

let id = 0;

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [wrongName, setWrongName] = useState(false);
  const [wrongPrice, setWrongPrice] = useState(false);
  const [wrongAmount, setWrongAmount] = useState(false);
  const [wrongDiscount, setWrongDiscount] = useState(false);

  const handleClick = (e) => {
    if (name.length == 0) {
      setWrongName(true);
    }
    if (price <= 0) {
      setWrongPrice(true);
    }
    if (amount <= 0) {
      setWrongAmount(true);
    } else if (discount < 0 || discount > 100) {
      setWrongDiscount(true);
    } else {
      setProducts([
        ...products,
        {
          id: id++,
          name: name,
          price: price,
          amount: amount,
          discount: discount,
        },
      ]);
      setWrongName(false);
      setWrongPrice(false);
      setWrongAmount(false);
      setWrongDiscount(false);
      setSubtotal(
        subtotal +
          Math.round(
            ((parseInt(price) - (parseInt(discount) / 100) * 100) *
              parseInt(amount)) /
              1.2
          )
      );
    }
    setTotalDiscount(
      Math.rouund(
        totalDiscount + (parseInt(discount) / 100) * 100 * parseInt(amount)
      )
    );

    setTotal(
      Math.round(
        total +
          parseInt(price) *
            parseInt(amount) *
            ((100 - parseInt(discount)) / 100)
      )
    );
  };

  return (
    <div className="App">
      <div className="bg-white text-black min-h-screen">
        <div className="flex flex-col md:flex-row">
          <ProductForm
            handleClick={handleClick}
            setDiscount={setDiscount}
            setName={setName}
            setAmount={setAmount}
            setPrice={setPrice}
            wrongName={wrongName}
            wrongAmount={wrongAmount}
            wrongDiscount={wrongDiscount}
            wrongPrice={wrongPrice}
          />
          <div className="md:flex md:flex-col md:w-1/2 md:mt-6">
            <Bag
              products={products}
              setProducts={setProducts}
              setSubtotal={setSubtotal}
              setTotalDiscount={setTotalDiscount}
              setTotal={setTotal}
              subtotal={subtotal}
              price={price}
              discount={discount}
              amount={amount}
              totalDiscount={totalDiscount}
              total={total}
            />
            <Summary
              subtotal={subtotal}
              totalDiscount={totalDiscount}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
