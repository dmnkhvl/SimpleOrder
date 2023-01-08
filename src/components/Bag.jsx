import Product from "./Product";

function Bag({
  products,
  setProducts,
  setSubtotal,
  setTotalDiscount,
  setTotal,
  subtotal,
  pricePerPiece,
  discountPercentage,
  amount,
  totalDiscount,
  total,
  discount,
  priceWithoutDiscount,
}) {
  const onClick = () => {
    setProducts(products.filter((p) => p.id !== product.id));
    setTotalDiscount(
      (totalDiscount - priceWithoutDiscount - discount).toFixed(2)
    );
    setTotal((total - priceWithoutDiscount - totalDiscount).toFixed(2));
    setSubtotal((subtotal - total / dph).toFixed(2));
  };
  return (
    <div
      className={
        products.length > 0
          ? "mx-auto w-full p-6 max-w-screen-md bg-pastelDarkBlack rounded-2xl my-10 sm:my-0"
          : "hidden"
      }
    >
      <h1 className="font-medium text-xl border-lightGray ml-2">Bag</h1>
      {products.map((product) => (
        <div className="flex flex-col">
          <Product
            key={product.id}
            name={product.name}
            pricePerPiece={product.pricePerPiece}
            numberOfPieces={product.numberOfPieces}
            discount={discount}
            onClick={() => onClick}
            priceWithoutDiscount={priceWithoutDiscount}
            totalDiscount={totalDiscount}
          />
        </div>
      ))}
    </div>
  );
}

export default Bag;
