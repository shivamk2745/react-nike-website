import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <section className="flex max-container gap-5 justify-center flex-wrap">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  );
};
export default Services;
