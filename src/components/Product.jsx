function Product({ name, price, amount, discount, onClick }) {
  return (
    <div className="mx-auto w-full pb-8 border-b border-lightGray">
      <div className="mt-4 text-mdGray">
        <div className=" flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg text-black">{name}</p>

              {discount > 0 ? (
                <div className="flex ">
                  <p className="line-through">
                    {Math.round(price * amount * 100) / 100}€
                  </p>
                  <p className="ml-2 text-gray">
                    {Math.round(
                      (price * amount - price * amount * (discount / 100)) * 100
                    ) / 100}
                    €
                  </p>
                </div>
              ) : (
                <p>{Math.round(price * amount * 100) / 100}€</p>
              )}
            </div>
            <div>
              <p className=" text-black ">
                <span className="mr-2">Amount</span>
                <span className="font-bold text-lg text-black ">{amount}</span>
              </p>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <p>Size: UNI</p>
            <button
              onClick={onClick}
              className="px-5 py-2 text-sm rounded-2xl bg-lightRed text-red "
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
