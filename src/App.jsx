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
          (parseInt(price) - (parseInt(discount) / 100) * 100) *
            parseInt(amount)
      );
    }
    setTotalDiscount(
      totalDiscount + (parseInt(discount) / 100) * 100 * parseInt(amount)
    );

    setTotal(
      total +
        (parseInt(price) - (parseInt(discount) / 100) * 100) *
          parseInt(amount) *
          1.2
    );
  };

  return (
    <div className="App">
      <div className="bg-white text-black min-h-screen">
        <div className="mx-auto max-w-screen-xl pt-10 flex flex-col">
          {/* Add new */}
          <div className="mx-auto max-w-screen-sm bg-ligtherGray text-black rounded-xl ">
            <div className="flex flex-col p-5 gap-2 mx-auto text-darkGray mb-10 ">
              <div className="flex justify-start items-center">
                <div className="w-4/12">
                  <label htmlFor="name" className="block text-xs font-medium">
                    Product name
                  </label>
                </div>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="LeBron XX - The Debut"
                  className="mt-1 w-4/6	rounded-md shadow-sm border-lightGray bg-white text-black sm:text-s"
                />
              </div>
              {wrongName ? (
                <p className="mt-1 font-medium text-xs text-special mr-2 text-right">
                  Product name can't be empty
                </p>
              ) : (
                ""
              )}

              <div className="flex mt-10 justify-between">
                <div>
                  <label htmlFor="price" className="block text-xs font-medium">
                    Price <span className="text-special">(w/o VAT)</span>
                  </label>
                  <input
                    type="number"
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="0€"
                    className="mt-1 rounded-md shadow-sm border-lightGray bg-white text-black sm:text-s"
                  />
                  {wrongPrice ? (
                    <p className="mt-1 font-medium text-xs text-special ml-2">
                      Invalid value
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <label htmlFor="amount" className="block text-xs font-medium">
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0"
                    className="mt-1 rounded-md shadow-sm border-lightGray bg-white text-black sm:text-s"
                  />
                  {wrongAmount ? (
                    <p className="mt-1 font-medium text-xs text-special ml-2">
                      Invalid value
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <label
                    htmlFor="discount"
                    className="block text-xs font-medium"
                  >
                    Discount
                  </label>
                  <input
                    type="number"
                    id="discount"
                    onChange={(e) => setDiscount(e.target.value)}
                    placeholder="0%"
                    className="mt-1 rounded-md shadow-sm border-lightGray bg-white text-black sm:text-s"
                  />
                  {wrongDiscount ? (
                    <p className="mt-1 font-medium text-xs text-special ml-2">
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
          {/*  BAG */}
          <div className="mx-auto w-full p-6">
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
                        (parseInt(product.price) -
                          (parseInt(product.discount) / 100) * 100) *
                          parseInt(product.amount)
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
                          parseInt(product.amount) *
                          1.2
                    );
                  }}
                />
              </div>
            ))}
          </div>
          {/* Summary */}
          <div className="">
            <h1 className="font-medium text-2xl">Summary</h1>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center">
                <p>Subtotal</p>
                <p className="text-xs font-normal text-special ml-2">w/o VAT</p>
              </div>
              <p>{subtotal}€</p>
            </div>
            <div className="flex items-center justify-between mt-1">
              <p>Total discount</p>
              <p>{totalDiscount}€</p>
            </div>
            <div className="flex items-center justify-between mt-10">
              <p className="font-medium text-xl">Total</p>
              <p className="font-medium text-xl text-speci">{total}€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
