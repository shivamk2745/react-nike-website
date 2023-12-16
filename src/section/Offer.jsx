import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const Offer = () => {
  return (
    <section className="max-container flex justify-wrap items-center max-xl:flex-col-reverse  gap-10 ">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          className="object-contain w-full"
          width={773}
          height={687}
        />
      </div>
      <div className="flex-1 flex flex-col w-full ">
        <h1 className="text-4xl mt-4 font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h1>
        <p className="text-2xl lg:max-w-lg mt-4 font-montserrat text-slate-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia at
          temporibus a nihil expedita quaerat nobis! Nesciunt possimus quod
          cumque!
        </p>
        <p className="text-2xl lg:max-w-lg mt-4 text-slate-gray font-montserrat">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          accusantium nesciunt minus minima ab? Libero reprehenderit velit
          eligendi pariatur eos.
        </p>
        <div className="mt-8 flex flex-wrap gap-5">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};
export default Offer;
