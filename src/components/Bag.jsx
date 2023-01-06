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
        products.length > 0
          ? "mx-auto w-full p-6 max-w-screen-md bg-pastelBlack border-2 border-pastelGray rounded-2xl"
          : "hidden"
      }
    >
      <h1 className="font-medium text-xl border-lightGray">Bag</h1>
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
                Math.round(
                  subtotal - ((price - (discount / 100) * 100) * amount) / 1.2
                )
              );
              setTotalDiscount(
                Math.round(totalDiscount - price * (discount / 100) * amount)
              );
              setTotal(
                Math.round(total - price * amount * ((100 - discount) / 100))
              );
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Bag;
