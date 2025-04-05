import Button from "./Button";
import { useNavigate } from "react-router";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full flex justify-center">
      <div className="grid grid-cols-1 xl:grid-cols-3 m-4 lg:my-16 lg:mx-12 w-11/12">
        <div className="flex flex-col px-4 py-8 gap-8 rounded-2xl items-start">
          <h1 className="text-2xl md:text-5xl mt-2 font-bold ml-2">About Us</h1>
          <p className="text-md md:text-2xl tracking-wide">
            Nacon Investment Limited is a world-class freight forwarding and
            logistics company with over 25 years of expertise in the maritime
            industry. Renowned for our reliability and excellence, we have
            established ourselves as a trusted leader in freight forwarding,
            logistics, and supply chain solutions.
          </p>
          <Button
            onClick={()=>(navigate("/about"))}
            text="Learn More"
            class="p-3 font-semibold text-lg rounded-xl duration-500 delay-[2.5ms] hover:px-4 cursor-pointer bg-[var(--Accent)] text-[var(--Primary)] hover:invert-10"
          />
        </div>
        <div className="flex flex-col px-6 py-8 gap-8 items-start xl:border-x border-y xl:border-y-0">
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
        <div className="flex flex-col px-4 py-8 gap-8 rounded-2xl items-start">
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
