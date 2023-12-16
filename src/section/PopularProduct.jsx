import { products } from "../constants";
import ProductCard from "../components/ProductCard";
const PopularProduct = () => {
  return (
    <section className="max-container max-sm:mt-12" id="products">
      <div className="flex flex-col gap-5 justify-start">
        <h1 className="font-bold text-4xl font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="text-slate-gray lg:max-w-lg mt-2 font-montserrat">
          Lorem, ipsum dolor sit amet consectetur nnam laboriosam quas quis ab
          iusto ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magni, quisquam.repellendus.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4 mt-4">
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PopularProduct;
