import About from "./About";
import NaconLogo from "../assets/Nacon.png";
import AboutImage from "../assets/Port-two.jpg";

export default function AboutContent() {
  return (
    <section className="w-full min-h-max bg-[var(--Secondary)] mt-24 flex items-center flex-col">
      <div className="flex w-11/12 items-center my-2 lg:my-24 gap-x-12 xl:flex-row flex-col-reverse">
        <div className="flex flex-col gap-4 xl:flex-1">
          <h1 className="text-2xl md:text-5xl mt-2 font-bold ml-2">
            About Nacon Investment Limited
          </h1>
          <p className="text-md md:text-2xl tracking-wide xl:leading-9 mx-2">
            {About}
          </p>
        </div>
        <div className="flex">
          <img src={NaconLogo} className="size-80 lg:size-64 xl:size-96 " />
        </div>
      </div>
      <div className="mx-8 xl:mx-16 mt-12 lg:mt-0">
        <img src={AboutImage} className="size-max" />
      </div>
      <div className="flex lg:flex-row flex-col my-12 lg:my-20 px-12">
        <div className="flex flex-col px-6 py-8 gap-4 lg:gap-8 items-start xl:border-r border-y xl:border-y-0 flex-1">
          <h1 className="text-2xl md:text-5xl mt-2 font-bold ml-2">
            Our Mission
          </h1>
          <p className="text-md md:text-2xl tracking-wide">
            We are committed to providing efficient and cost-effective freight
            solutions through unmatched industry expertise. With precision and
            integrity being at our core, ensuring that every shipment meets
            highest standards, keeping client satisfaction as our top priority.
          </p>
        </div>
        <div className="flex flex-col px-4 py-8 gap-4 lg:gap-8 rounded-2xl items-start flex-1">
          <h1 className="text-2xl md:text-5xl mt-2 font-bold ml-2">
            Our Vision
          </h1>
          <p className="text-md md:text-2xl tracking-wide">
            To lead the way in global freight forwarding by delivering seamless
            and innovative logistics solutions ensuring client satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}
