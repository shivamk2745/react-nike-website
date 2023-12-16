import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
const CustomerReview = () => {
  return (
    <section className="max-container ">
      <h2 className="text-4xl font-bold font-palaquine text-center">
        What Our <span className="text-coral-red"> Customer </span> Say?
      </h2>
      <p className="text-2xl text-center mt-4 info-text m-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        voluptates pariatur voluptatem incidunt illum, quibusdam modi neque
        quisquam omnis saepe.
      </p>
      <div className="flex flex-1  justify-evenly gap-10 mt-24 max-lg:flex-col">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};
export default CustomerReview;
