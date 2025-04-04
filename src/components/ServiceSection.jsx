import Button from "../components/Button";
import Services from "../components/Services"

export default function ServiceSection() {
  return (
    <section className="w-full my-20 xl:my-36 bg-inherit gap-10 flex flex-col">
      <div className="xl:w-1/2 m-4 lg:m-12 flex flex-col gap-6">
        <h1 className="text-2xl lg:text-5xl mt-2 font-bold ml-2">
          What We Can Do For You.
        </h1>
        <p className="text-md lg:text-2xl tracking-wide">
          From the manufacturer to consumers, from one nation to the other. Our
          years of experience in logistics has empowered us to ensure that you
          receive the best. We offer,
        </p>
      </div>
      <div className="flex lg:flex-row gap-4 lg:gap-8 justify-center mx-4 lg:mx-12 flex-col">
        {Services.map((Service) => (
          <div
            key={Service.name}
            className="flex-1 border h-[32.5rem] group hover:grayscale-0 grayscale-25 overflow-hidden hover:shadow-xl"
          >
            <img
              src={Service.image}
              className="h-1/2 w-full group-hover:opacity-90 duration-700 delay-[.0125ms] transition-transform group-hover:scale-110"
              alt={Service.alt}
            />
            <div className="h-2/5 w-full px-4 py-5 flex flex-col gap-3 items-start">
              <h1 className="text-2xl lg:text-3xl font-bold">{Service.name}</h1>
              <p className="text-md lg:text-xl tracking-wide">
                {Service.about}
              </p>
              <Button
                text="Learn More"
                class="p-2 text-md cursor-pointer border-b-2 hover:font-bold duration-700 delay-[2.5ms]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// 1. Logistics Services
// 2. ⁠Sea Freight
// 3. ⁠Cargo Status Tracking
// 4. ⁠Custom Clearance
// 5. ⁠Air Freight
