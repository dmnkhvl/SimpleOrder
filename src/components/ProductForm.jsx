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
    <div className="mx-auto w-full md:h-screen  p-6 bg-pastelBlack text-white">
      <div className="max-w-screen-md flex flex-col gap-y-5 items-start p-5 gap-2 mx-auto text-darkGray ">
        <h1 className="font-medium text-2xl pb-4 text-white">New Product</h1>
        <div className="w-full">
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder={
              wrongName ? "Product name can't be empty" : "Name of the product"
            }
            className={
              wrongName
                ? "w-full shadow-sm border-red bg-black text-white rounded-3xl ring-1 ring-red placeholder-red font-medium text-sm"
                : "bg-black text-white placeholder-white border-0 font-semibold text-lg"
            }
            autoFocus
            maxLength={60}
          />
        </div>

        <div className="w-full">
          <input
            type="number"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            placeholder={wrongPrice ? "Invalid value" : "0€"}
            className={
              wrongPrice
                ? "w-full shadow-sm border-red bg-black text-white rounded-3xl ring-1 ring-red placeholder-red font-medium text-sm"
                : "bg-black text-white placeholder-white border-0 font-semibold text-lg"
            }
            maxLength={10}
          />
        </div>

        <div className="w-full">
          <input
            type="number"
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
            placeholder={wrongAmount ? "Invalid value" : "0"}
            className={
              wrongAmount
                ? "w-full shadow-sm border-red bg-black text-white rounded-3xl ring-1 ring-red placeholder-red font-medium text-sm"
                : " bg-black text-white placeholder-white border-0 font-semibold text-lg"
            }
          />
        </div>

        <div className="w-full">
          <input
            type="number"
            id="discount"
            onChange={(e) => setDiscount(e.target.value)}
            placeholder={wrongDiscount ? "Invalid value" : "-0%"}
            className={
              wrongDiscount
                ? "mt-2 w-full shadow-sm border-red bg-black text-white rounded-3xl ring-1 ring-red placeholder-red font-medium text-sm"
                : "bg-black text-white placeholder-white border-0 font-semibold text-lg"
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
