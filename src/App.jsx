import { useState } from "react";
import Product from "./components/Product";

let id = 0;

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    if (name.length == 0 || price <= 0 || amount <= 0 || discount < 0) {
      setError(true);
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
      setError(false);
    }
  };

  return (
    <div className="App">
      <div className="bg-white text-black min-h-screen">
        <div className="mx-auto max-w-screen-xl pt-10	">
          <div className="mx-auto max-w-screen-sm bg-gray rounded-xl ">
            <div className="flex flex-col p-5 gap-2 mx-auto text-darkGray shadow-sm mb-10 ">
              <div className="flex justify-start items-center">
                <div className="w-4/12">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-white"
                  >
                    Product name
                  </label>
                </div>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="LeBron XX - The Debut"
                  className="mt-1 w-4/6	rounded-md shadow-sm border-gray-700 bg-gray-900 text-white sm:text-s"
                />
              </div>
              {error ? (
                <p className="text-white text-sm py-2 bg-red-500 rounded-xl text-center">
                  Product name can't be empty
                </p>
              ) : (
                ""
              )}

              <div className="flex mt-10 justify-between">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-xs font-medium text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="100€"
                    className="mt-1 rounded-md shadow-sm border-gray-700 bg-gray-900 text-white sm:text-s"
                  />
                  {error ? (
                    <p className=" mt-2 py-2 text-xs text-white bg-red-500 rounded-xl text-center">
                      Invalid value
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <label
                    htmlFor="amount"
                    className="block text-xs font-medium text-white"
                  >
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0"
                    className="mt-1 rounded-md shadow-sm border-gray-700 bg-gray-900 text-white sm:text-s"
                  />
                  {error ? (
                    <p className=" mt-2 py-2 text-xs text-white bg-red-500 rounded-xl text-center">
                      Invalid value
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <label
                    htmlFor="discount"
                    className="block text-xs font-medium text-white"
                  >
                    Discount
                  </label>
                  <input
                    type="number"
                    id="discount"
                    onChange={(e) => setDiscount(e.target.value)}
                    placeholder="10%"
                    className="mt-1 rounded-md shadow-sm border-gray-700 bg-gray-900 text-white sm:text-s"
                  />
                  {error ? (
                    <p className=" mt-2 py-2 text-xs text-white bg-red-500 rounded-xl text-center">
                      Invalid value
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <button
                onClick={() => handleClick()}
                className="mt-10 px-10 py-2 font-medium text-xs  mx-auto rounded-xl bg-special text-white"
              >
                Create new product
              </button>
            </div>
          </div>
          <div className="flex justify-center items-start p-10">
            <div className="w-4/6	grid grid-flow-row gap-y-5">
              <h1 className="font-medium text-2xl">Bag</h1>
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
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="w-2/6 ml-10	">
              <h1 className="font-medium text-2xl">Summary</h1>
              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center">
                  <p>Subtotal</p>
                  <p className="text-xs font-normal text-special ml-2">
                    w/o VAT
                  </p>
                </div>
                <p>0€</p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <p>Total discount</p>
                <p>0€</p>
              </div>
              <div className="flex items-center justify-between mt-10">
                <p className="font-medium text-xl">Total</p>
                <p className="font-medium text-xl text-speci">0€</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {console.log(products)}
    </div>
  );
}

export default App;
