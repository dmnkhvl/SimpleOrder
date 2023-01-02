import { useState } from "react";
import Product from "./components/Product";

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
  const [withouVat, setWithoutVat] = useState(0);
  const [discountValue, setDiscountValue] = useState(0);

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
      totalDiscount + (parseInt(discount) / 100) * 100 * parseInt(amount)
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
        <div className="flex flex-col">
          {/* Add new */}
          <div className="mx-auto w-full p-6 bg-black text-white">
            <div className="max-w-screen-md flex flex-col gap-y-5 items-start p-5 gap-2 mx-auto text-darkGray ">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className={
                    wrongName ? "ml-3 font-bold text-red " : "ml-3 font-bold"
                  }
                >
                  Product name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder={
                    wrongName
                      ? "Product name can't be empty"
                      : "Name of the product"
                  }
                  className={
                    wrongName
                      ? "mt-2 w-full shadow-sm border-red bg-black text-white rounded-3xl ring-1 ring-red placeholder-red font-medium text-sm"
                      : "mt-2 w-full shadow-sm border-lightGray bg-black text-white rounded-3xl ring-1 ring-lightGray placeholder-white font-medium text-sm"
                  }
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="price"
                  className={
                    wrongPrice ? "ml-3 font-bold text-red " : "ml-3 font-bold"
                  }
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder={wrongPrice ? "Invalid value" : "0€"}
                  className={
                    wrongPrice
                      ? "mt-2 w-full shadow-sm border-red bg-black text-white rounded-3xl ring-1 ring-red placeholder-red font-medium text-sm"
                      : "mt-2 w-full shadow-sm border-lightGray bg-black text-white rounded-3xl ring-1 ring-lightGray placeholder-white font-medium text-sm"
                  }
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="amount"
                  className={
                    wrongAmount ? "ml-3 font-bold text-red " : "ml-3 font-bold"
                  }
                >
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder={wrongAmount ? "Invalid value" : "0"}
                  className={
                    wrongAmount
                      ? "mt-2 w-full shadow-sm border-red bg-black text-white rounded-3xl ring-1 ring-red placeholder-red font-medium text-sm"
                      : "mt-2 w-full shadow-sm border-lightGray bg-black text-white rounded-3xl ring-1 ring-lightGray placeholder-white text-sm"
                  }
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="discount"
                  className={
                    wrongDiscount ? "ml-3 font-bold text-red" : "ml-3 font-bold"
                  }
                >
                  Discount
                </label>
                <input
                  type="number"
                  id="discount"
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder={wrongDiscount ? "Invalid value" : "0%"}
                  className={
                    wrongDiscount
                      ? "mt-2 w-full shadow-sm border-red bg-black text-white rounded-3xl ring-1 ring-red placeholder-red font-medium text-sm"
                      : "mt-2 w-full shadow-sm border-lightGray bg-black text-white rounded-3xl ring-1 ring-lightGray placeholder-white font-medium text-sm"
                  }
                />
              </div>

              <button
                onClick={() => handleClick()}
                className="mt-10 px-10 py-2 font-medium w-full rounded-3xl bg-white text-black"
              >
                Create new product
              </button>
            </div>
          </div>
          {/*  BAG */}
          <div
            className={
              products.length > 0
                ? "mx-auto w-full p-6 max-w-screen-md"
                : "hidden"
            }
          >
            <h1 className="font-medium text-2xl pb-4 border-b border-lightGray">
              Bag
            </h1>
            {products.map((product) => (
              <div className="flex flex-col">
                <Product
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  amount={product.amount}
                  discount={product.discount}
                  onClick={() => {
                    setProducts(products.filter((p) => p.id !== product.id));
                    setSubtotal(
                      subtotal -
                        Math.round(
                          ((parseInt(price) -
                            (parseInt(discount) / 100) * 100) *
                            parseInt(amount)) /
                            1.2
                        )
                    );
                    setTotalDiscount(
                      totalDiscount -
                        (parseInt(product.discount) / 100) *
                          100 *
                          parseInt(product.amount)
                    );
                    setTotal(
                      total -
                        (parseInt(product.price) -
                          (parseInt(product.discount) / 100) * 100) *
                          parseInt(product.amount)
                    );
                  }}
                />
              </div>
            ))}
          </div>
          {/* Summary */}

          <div className="mx-auto w-full p-6 max-w-screen-md">
            <h1 className="font-medium text-2xl">Summary</h1>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <p className="text-mdGray">Subtotal</p>
                <p className="text-xs font-normal ml-2 text-mdGray">w/o VAT</p>
              </div>
              <p className="text-mdGray">{subtotal}€</p>
            </div>
            <div className="flex items-center justify-between mt-1">
              <p className="text-mdGray">Total discount</p>
              <p className="text-mdGray">{totalDiscount}€</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="font-medium text-xl">Total</p>
              <p className="font-medium text-xl text-speci">
                {Math.round(total * 100) / 100}€
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
