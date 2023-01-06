import { AiOutlinePlus } from "react-icons/ai";

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
    <div className="mx-auto w-full md:h-screen text-pastelBlack px-5 ">
      <div className="max-w-screen-md bg-pastelDarkBlack rounded-3xl shadow-sm flex flex-col gap-y-5 items-start p-6 gap-2 mx-auto text-darkGray mb-10 ">
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
                : "bg-pastelDarkBlack border-1 border-pastelGray text-white placeholder-white font-medium text-base w-full text-center rounded-xl py-3"
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
                : "bg-pastelDarkBlack border-1 border-pastelGray text-white placeholder-white font-medium text-base w-full text-center rounded-xl py-3"
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
                : " bg-pastelDarkBlack border-1 border-pastelGray text-white placeholder-white font-medium text-base w-full text-center rounded-xl py-3"
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
                : "bg-pastelDarkBlack border-1 border-pastelGray text-white placeholder-white font-medium text-base w-full text-center rounded-xl py-3"
            }
          />
        </div>
        <button
          className=" px-10 py-3 mx-auto rounded-2xl bg-pastelBlack text-white flex items-center"
          onClick={handleClick}
        >
          <AiOutlinePlus className="mr-2" />
          Create new product
        </button>
      </div>
    </div>
  );
}

export default ProductForm;
