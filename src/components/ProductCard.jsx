import { star } from "../assets/icons";
const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt="image"
        className="w-[280px] h-[280px] hover:shadow-3xl hover:shadow-coral-red hover:rounded-[20px]"
      />
      <div className="flex mt-4 gap-2.5 justify-start">
        <img src={star} alt="star" />
        <p className="text-xl font-montserrat text-slate-gray"> (4.5)</p>
      </div>
      <h3 className="font-semibold text-2xl mt-2 leading-normal">{name}</h3>
      <p className="text-coral-red leading-normal mt-2 text-xl font-semibold">
        {price}
      </p>
    </div>
  );
};
export default ProductCard;
