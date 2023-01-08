function Product({
  name,
  pricePerPiece,
  numberOfPieces,
  onClick,
  discountPercentage,
}) {
  const discountedPricePerPiece =
    pricePerPiece - pricePerPiece * (discountPercentage / 100);

  const totalProductPrice =
    pricePerPiece * numberOfPieces -
    pricePerPiece * numberOfPieces * (discountPercentage / 100);

  return (
    <div className="mx-auto w-full">
      <div className="mt-4 p-4 text-white border border-pastelLightGray rounded-xl">
        <div className=" flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-base text-lg text-white">{name}</p>

              {discountPercentage > 0 ? (
                <div className="flex ">
                  <p className="line-through text-mdGray">{pricePerPiece}€</p>
                  <p className="ml-2 text-mdGray">
                    {discountedPricePerPiece} €
                  </p>
                </div>
              ) : (
                <p className="text-mdGray">{pricePerPiece}€</p>
              )}
            </div>
            <p className="font-bold text-lg text-white">{numberOfPieces}x</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p>{totalProductPrice} €</p>
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
