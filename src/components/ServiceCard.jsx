const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:min-w-[350px] sm:w-[350px] w-full shadow-3xl px-10 py-16">
      <div className="flex justify-center items-center w-11 h-11 bg-coral-red rounded-full">
        <img src={imgURL} alt="ser" width={24} height={24} />
      </div>
      <h3 className="mt-5 text-3xl font-bold font-palanquin  leading-normal">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-slate-gray leading-noraml text-lg">
        {subtext}
      </p>
    </div>
  );
};
export default ServiceCard;
