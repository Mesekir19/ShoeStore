import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you
          <span className=" text-coral-red inline-block mt-3">Super</span>
          <span className=" text-coral-red inline-block mt-3">
            Quality
          </span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover style Nike arrivals, Quality comfort, and innovation for your
          active life.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Discover style Nike arrivals, Quality comfort, and innovation for your
          active life.
        </p>
        <div className="mt-11">
        <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe" width={570} height={522} className=" object-contain" />
      </div>
    </section>
  );
}

export default SuperQuality