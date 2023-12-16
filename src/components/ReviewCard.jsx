import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt="customer"
        className="object-cover rounded-full w-[120px] h-[120px]"
      />
      <p className="info-text mt-4  max-w-sm text-center">{feedback}</p>
      <div className="flex mt-2 gap-2.5 text-center justify-center items-center">
        <img src={star} alt="star" className="object-contain m-0" />
        <p>(4.5)</p>
      </div>
      <h2 className="text-2xl font-bold text-center mt-2">{customerName}</h2>
    </div>
  );
};
export default ReviewCard;
