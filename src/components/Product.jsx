function Product({ name, pricePerOne, amount, discountPercentage, onClick }) {
  const price = pricePerOne * amount;
  const discount = discountPercentage / 100;
  const discountedPrice = price - price * discount;
  const discountedPricePerOne = pricePerOne - pricePerOne * discount;

  return (
    <div className="mx-auto w-full">
      <div className="mt-4 p-4 text-white border border-pastelLightGray rounded-xl">
        <div className=" flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-base text-lg text-white">{name}</p>

              {discountPercentage > 0 ? (
                <div className="flex ">
                  <p className="line-through text-mdGray">{pricePerOne}€</p>
                  <p className="ml-2 text-mdGray">
                    {discountedPricePerOne.toFixed(2)}€
                  </p>
                </div>
              ) : (
                <p className="text-mdGray">{price.toFixed(2)}€</p>
              )}
            </div>
            <p className="font-bold text-lg text-white">{amount}x</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p>{discountedPrice.toFixed(2)}€</p>
            <button
              onClick={onClick}
              className="px-3 py-1 text-sm rounded-2xl bg-pastelLightGray"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
