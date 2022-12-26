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
        <div className="mx-auto max-w-screen-xl	">
          <div className="flex flex-col gap-2 mx-auto max-w-md text-dark mb-10 ">
            <div>
              <label for="name" class="block text-xs font-medium text-white">
                Product name
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="LeBron XX - The Debut"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-s"
              />
            </div>
            <div>
              <label for="price" class="block text-xs font-medium text-white">
                Price
              </label>
              <input
                type="number"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="100$"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-s"
              />
            </div>
            <div>
              <label for="amount" class="block text-xs font-medium text-white">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-s"
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
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-s"
              />
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
              className="p-2 w-20 mx-auto rounded-xl bg-white"
            >
              ADD
            </button>
          </div>

          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              amount={product.amount}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
