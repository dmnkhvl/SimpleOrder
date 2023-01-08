import { AiOutlinePlus } from "react-icons/ai";

function ProductForm({
  handleClick,
  setDiscountPercentage,
  setNumberOfPieces,
  setPricePerPiece,
  setName,
  wrongName,
  wrongAmount,
  wrongDiscount,
  wrongPrice,
}) {
  return (
    <div className="mx-auto w-full text-pastelBlack px-5 ">
      <div className="max-w-md  bg-pastelDarkBlack rounded-2xl flex flex-col gap-y-5 items-start p-6 gap-2 mx-auto text-darkGray">
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
                ? "bg-pastelDarkBlack border-1 border-white text-white placeholder-white font-base text-base w-full text-center rounded-xl py-3 focus:border-white focus:ring-0 focus:placeholder-pastelDarkBlack"
                : " bg-pastelDarkBlack border-1 border-pastelGray text-white placeholder-pastelLightGray font-base text-base w-full text-center rounded-xl py-3 focus:border-white focus:ring-0  caret-white"
            }
            autoFocus
            maxLength={20}
          />
        </div>

        <div className="w-full">
          <input
            type="number"
            id="price"
            onChange={(e) => setPricePerPiece(e.target.value)}
            placeholder={wrongPrice ? "Invalid price" : "0€"}
            className={
              wrongPrice
                ? "bg-pastelDarkBlack border-1 border-white text-white placeholder-white font-base text-base w-full text-center rounded-xl py-3 focus:border-white focus:ring-0 focus:placeholder-pastelDarkBlack"
                : "bg-pastelDarkBlack border-1 border-pastelGray text-white placeholder-pastelLightGray font-base text-base w-full text-center rounded-xl py-3 focus:border-white focus:ring-0  caret-white"
            }
            step="1"
          />
        </div>

        <div className="w-full">
          <input
            type="number"
            id="amount"
            onChange={(e) => setNumberOfPieces(e.target.value)}
            placeholder={wrongAmount ? "Invalid amount" : "0 pcs"}
            className={
              wrongAmount
                ? "bg-pastelDarkBlack border-1 border-white text-white placeholder-white font-base text-base w-full text-center rounded-xl py-3 focus:border-white focus:ring-0 focus:placeholder-pastelDarkBlack"
                : " bg-pastelDarkBlack border-1 border-pastelGray text-white placeholder-pastelLightGray font-base text-base w-full text-center rounded-xl py-3 focus:border-white focus:ring-0  caret-white"
            }
            step="1"
          />
        </div>

        <div className="w-full">
          <input
            type="number"
            id="discount"
            onChange={(e) => setDiscountPercentage(e.target.value)}
            placeholder={wrongDiscount ? "Invalid discount value" : "-0%"}
            className={
              wrongDiscount
                ? "mt-2 bg-pastelDarkBlack border-1 border-white text-white placeholder-white font-base text-base w-full text-center rounded-xl py-3 focus:border-white focus:ring-0 focus:placeholder-pastelDarkBlack"
                : "bg-pastelDarkBlack border-1 border-pastelGray text-white placeholder-pastelLightGray font-base text-base w-full text-center rounded-xl py-3 focus:border-white focus:ring-0  caret-white"
            }
            step="1"
          />
        </div>
        <button
          className=" px-10 py-3 mx-auto rounded-2xl bg-pastelBlack text-white flex items-center hover:bg-pastelLightGray transition delay-75"
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
