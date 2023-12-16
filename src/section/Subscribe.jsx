import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center gap-10 max-lg:flex-col"
      id="contact-us"
    >
      <h2 className="text-4xl font-bold  font-palanquin lg:max-w-md">
        Sign Up for <span className="text-coral-red"> Updates </span> &
        Newletter
      </h2>
      <div className="flex max-sm:flex-col items-center w-full sm:border rounded-full gap-5  lg:max-w-[40%] sm:border-slate-gray p-2.5">
        <input
          type="text"
          placeholder="Subscribe for Update"
          className="input"
        />
        <div className="flex max-sm:w-full items-center max-sm:justify-end">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
