import Button from "../components/Button";
import Services from "../components/Services";

export default function ServiceSection() {
  return (
    <section className="w-full my-20 xl:my-24 bg-inherit gap-10 flex flex-col items-center">
      <div className="flex flex-col xl:w-5/6 mx-auto items-center">
        <div className="md:w-5/6 xl:w-3/4 m-4 sm:mx-8 sm:m-12 flex flex-col gap-6 items-start">
          <h1 className="text-2xl md:text-5xl mt-2 font-bold ml-2">
            Services.
          </h1>
          <p className="text-md md:text-2xl tracking-wide">
            From one nation to the other. Our years of experience in the
            maritime industry has empowered us to ensure that you receive the
            best. The services we offer;
          </p>
        </div>
        <div className="flex md:flex-row gap-4 lg:gap-16 justify-center mx-2 sm:mx-16 md:mx-4 lg:mx-12 flex-col flex-wrap">
          {Services.map((Service) => (
            <div
              key={Service.name}
              className="flex-1 border group hover:grayscale-0 grayscale-25 overflow-hidden hover:shadow-xl w-auto md:min-w-[25rem] md:max-w-[27.5rem] lg:min-w-[25rem] lg:max-w-[27.5rem] h-[32rem]"
            >
              <img
                src={Service.image}
                className="h-72 lg:h-1/2 w-full group-hover:opacity-90 duration-700 delay-[.0125ms] transition-transform group-hover:scale-110"
                alt={Service.alt}
              />
              <div className="min-h-1/2 w-full px-4 py-5 flex flex-col gap-3 items-start">
                <h1 className="text-2xl lg:text-3xl font-bold">
                  {Service.name}
                </h1>
                <p className="text-md md:text-xl tracking-wide">
                  {Service.about}
                </p>
                <Button
                  text="Learn More"
                  class="p-2 text-md cursor-pointer border-b-2 hover:font-bold duration-700 delay-[2.5ms] bottom-4 md:absolute"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 1. Logistics Services
// 2. ⁠Sea Freight
// 3. ⁠Cargo Status Tracking
// 4. ⁠Custom Clearance
// 5. ⁠Air Freight
