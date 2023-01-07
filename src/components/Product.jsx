function Product({ name, price, amount, discount, onClick }) {
  return (
    <div className="mx-auto w-full">
      <div className="mt-4 p-4 text-white border border-pastelLightGray rounded-xl">
        <div className=" flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-base text-lg text-white">{name}</p>

              {discount > 0 ? (
                <div className="flex ">
                  <p className="line-through text-mdGray">
                    {Math.round(price * amount * 100) / 100}€
                  </p>
                  <p className="ml-2 text-mdGray">
                    {Math.round(
                      (price * amount - price * amount * (discount / 100)) * 100
                    ) / 100}
                    €
                  </p>
                </div>
              ) : (
                <p className="text-mdGray">
                  {Math.round(price * amount * 100) / 100}€
                </p>
              )}
            </div>
            <p className="font-bold text-lg text-white">{amount}x</p>
          </div>
          <div className="flex items-end justify-end">
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
