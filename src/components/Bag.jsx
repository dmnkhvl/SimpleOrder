import Product from "./Product";

function Bag({
  products,
  total,
  subtotal,
  totalDiscount,
  dph,
  setProducts,
  setTotal,
  setSubtotal,
  setTotalDiscount,
}) {
  return (
    <div
      className={
        products.length > 0
          ? "mx-auto w-full p-6 max-w-screen-md bg-pastelDarkBlack rounded-2xl my-10 sm:my-0"
          : "hidden"
      }
    >
      <div
        className={
          products.length > 0
            ? "flex justify-between items-end px-1"
            : "flex justify-start items-end px-1"
        }
      >
        <h1 className="font-medium text-xl border-lightGray ml-2">Bag</h1>
        <p className={products.length > 0 ? "" : "hidden"}>{products.length}</p>
      </div>
      {products.map((product) => (
        <div className="flex flex-col">
          <Product
            key={product.id}
            name={product.name}
            pricePerPiece={product.pricePerPiece}
            numberOfPieces={product.numberOfPieces}
            discountPercentage={product.discountPercentage}
            onClick={() => {
              setProducts(products.filter((p) => p.id !== product.id));
              setSubtotal(
                subtotal -
                  (product.pricePerPiece -
                    (product.discountPercentage / 100) *
                      product.numberOfPieces) /
                    dph
              );
              setTotalDiscount(
                totalDiscount -
                  product.pricePerPiece *
                    (product.discountPercentage / 100) *
                    product.numberOfPieces
              );

              setTotal(
                total -
                  product.pricePerPiece * product.numberOfPieces -
                  product.pricePerPiece *
                    product.numberOfPieces *
                    (product.discountPercentage / 100)
              );
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Bag;
