function Summary({ products, total, subtotal, totalDiscount }) {
  return (
    <div
      className={
        products.length > 0
          ? "mx-auto w-full p-6 max-w-screen-md rounded-2xl bg-pastelDarkBlack"
          : "hidden"
      }
    >
      <h1 className="font-medium text-xl">Summary</h1>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-end">
          <p className="leading-4	 text-mdGray">Subtotal</p>
          <p className="text-xs leading-3	 ml-2 text-mdGray">w/o VAT</p>
        </div>
        <p className="text-mdGray">{subtotal}€</p>
      </div>
      <div className="flex items-center justify-between mt-1">
        <p className="text-mdGray">Total discount</p>
        <p className="text-mdGray">{totalDiscount}€</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="font-medium text-lg">Total</p>
        <p className="font-medium text-lg text-speci">{total} €</p>
      </div>
    </div>
  );
}

export default Summary;
