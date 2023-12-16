import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex w-full justify-between max-lg:flex-col gap-10 max-container"
    >
      <div className="flex flex-col  flex-1">
        <h1 className="font-bold text-4xl mt-10 capitalize lg:max-w-lg">
          We Provide You <span className="text-coral-red"> Super Quality </span>{" "}
          Shoe
        </h1>
        <p className="info-text mt-4 lg:max-w-lg text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ut
          corrupti officiis vel praesentium hic repellat voluptates dolore
          accusamus et possimus ex, sequi distinctio quos.
        </p>
        <p className="info-text mt-6 lg:max-w-lg text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          molestias nemo similique ipsa provident illum.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={shoe8}
          alt=""
          height={570}
          width={570}
          className="object-contain"
        />
      </div>
    </section>
  );
};
export default SuperQuality;
