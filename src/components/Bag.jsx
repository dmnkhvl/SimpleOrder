import Product from "./Product";

function Bag({
  products,
  setProducts,
  setSubtotal,
  setTotalDiscount,
  setTotal,
  subtotal,
  price,
  discount,
  amount,
  totalDiscount,
  total,
}) {
  return (
    <div
      className={
        products.length > 0 ? "mx-auto w-full p-6 max-w-screen-md" : "hidden"
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
                    ((parseInt(price) - (parseInt(discount) / 100) * 100) *
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
  );
}

export default Bag;
