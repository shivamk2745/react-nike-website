import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section className="w-full min-h-screen max-container justify-center flex  max-xl:flex-col ">
      <div className="relative flex-col xl:w-2/5 flex w-full justify-center items-start pt-28 max-xl:padding-x">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 text-8xl max-sm:text-[72px] font-bold">
          <span className="xl:bg-white relative z-10 xl:whitespace-nowrap pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoe
        </h1>
        <p className="mt-6 mb-14 font-montserrat text-slate-gray text-lg sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          delectus hic maxime earum assumenda enim, sed, dignissimos molestiae
          reiciendis ducimus minima dolorum veniam ipsam iusto cupiditate, unde
          culpa aut doloribus.
        </p>
        <Button iconURL={arrowRight} label="Shop Now" />
        <div className="flex flex-wrap w-full justify-start items-start gap-16 mt-16">
          {statistics.map((item, index) => (
            <div key={index}>
              <p className="font-bold text-4xl">{item.value}</p>
              <p className="leading-8 text-slate-gray font-montserrat">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-center bg-primary">
        <img
          src={bigShoeImg}
          alt="shoe1"
          className="object-contain relative z-10"
        />
        <div className="absolute flex sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((item, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={item}
                changeBigShoe={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
