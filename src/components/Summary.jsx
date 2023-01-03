function Summary({ subtotal, totalDiscount, total }) {
  return (
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
  );
}

export default Summary;
