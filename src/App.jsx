import { useState } from "react";
import Product from "./components/Product";

let id = 0;

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);

  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <div className="bg-dark text-white h-screen">
        <div className="mx-auto max-w-screen-xl pt-10	">
          <div className="mx-auto max-w-screen-sm bg-gray rounded-xl ">
            <div className="flex flex-col p-5 gap-2 mx-auto text-darkGray shadow-sm mb-10 ">
              <div className="flex justify-start items-center ">
                <div className="w-4/12">
                  <label
                    for="name"
                    class="block text-xs font-medium text-white"
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
              <div className="flex mt-10 justify-between">
                <div>
                  <label
                    for="price"
                    class="block text-xs font-medium text-white"
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
                </div>
                <div>
                  <label
                    for="amount"
                    class="block text-xs font-medium text-white"
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
                </div>

                <div>
                  <label
                    for="discount"
                    class="block text-xs font-medium text-white"
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
                </div>
              </div>

              <button
                onClick={() => {
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
                }}
                className="mt-10 px-10 py-2 font-medium text-xs  mx-auto rounded-xl bg-special text-white"
              >
                Create new product
              </button>
            </div>
          </div>

          <div className="p-10 grid grid-flow-col gap-x-5 overflow-scroll">
            {products.map((product) => (
              <div>
                <Product
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  amount={product.amount}
                  discount={product.discount}
                />
                <button
                  onClick={() => {
                    setProducts(products.filter((p) => p.id !== product.id));
                  }}
                  className="mt-10 px-10 py-2 font-medium text-xs  mx-auto rounded-xl bg-special text-white"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
