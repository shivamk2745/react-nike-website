import { thumbnailBackground } from "../assets/images";

const ShoeCard = ({ imgURL, changeBigShoe, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoe(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer flex max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="small"
          className="object-contain"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};
export default ShoeCard;
