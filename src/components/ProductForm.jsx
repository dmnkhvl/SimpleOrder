function ProductForm({
  handleClick,
  setDiscount,
  setAmount,
  setPrice,
  setName,
  wrongName,
  wrongAmount,
  wrongDiscount,
  wrongPrice,
}) {
  return (
    <div className="mx-auto w-full md:h-screen  p-6 bg-black text-white">
      <div className="max-w-screen-md flex flex-col gap-y-5 items-start p-5 gap-2 mx-auto text-darkGray ">
        <div className="w-full">
          <label
            htmlFor="name"
            className={
              wrongName ? "ml-3 font-bold text-red " : "ml-3 font-bold"
            }
          >
            Product name
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder={
              wrongName ? "Product name can't be empty" : "Name of the product"
            }
            className={
              wrongName
                ? "mt-2 w-full shadow-sm border-red bg-black text-white rounded-3xl ring-1 ring-red placeholder-red font-medium text-sm"
                : "mt-2 w-full shadow-sm border-lightGray bg-black text-white rounded-3xl ring-1 ring-lightGray placeholder-white font-medium text-sm"
            }
            autoFocus
            maxLength={60}
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="price"
            className={
              wrongPrice ? "ml-3 font-bold text-red " : "ml-3 font-bold"
            }
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            placeholder={wrongPrice ? "Invalid value" : "0€"}
            className={
              wrongPrice
                ? "mt-2 w-full shadow-sm border-red bg-black text-white rounded-3xl ring-1 ring-red placeholder-red font-medium text-sm"
                : "mt-2 w-full shadow-sm border-lightGray bg-black text-white rounded-3xl ring-1 ring-lightGray placeholder-white font-medium text-sm"
            }
            maxLength={10}
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="amount"
            className={
              wrongAmount ? "ml-3 font-bold text-red " : "ml-3 font-bold"
            }
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
            placeholder={wrongAmount ? "Invalid value" : "0"}
            className={
              wrongAmount
                ? "mt-2 w-full shadow-sm border-red bg-black text-white rounded-3xl ring-1 ring-red placeholder-red font-medium text-sm"
                : "mt-2 w-full shadow-sm border-lightGray bg-black text-white rounded-3xl ring-1 ring-lightGray placeholder-white text-sm"
            }
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="discount"
            className={
              wrongDiscount ? "ml-3 font-bold text-red" : "ml-3 font-bold"
            }
          >
            Discount
          </label>
          <input
            type="number"
            id="discount"
            onChange={(e) => setDiscount(e.target.value)}
            placeholder={wrongDiscount ? "Invalid value" : "0%"}
            className={
              wrongDiscount
                ? "mt-2 w-full shadow-sm border-red bg-black text-white rounded-3xl ring-1 ring-red placeholder-red font-medium text-sm"
                : "mt-2 w-full shadow-sm border-lightGray bg-black text-white rounded-3xl ring-1 ring-lightGray placeholder-white font-medium text-sm"
            }
          />
        </div>
        <button
          className="mt-10 px-10 py-2 font-medium w-full rounded-3xl bg-white text-black"
          onClick={handleClick}
        >
          Create new product
        </button>
      </div>
    </div>
  );
}

export default ProductForm;
