import Button from "../components/Button";
import Services from "../components/Services";

export default function ServiceSection() {
  return (
    <section className="w-full mt-20 xl:mt-24 text-[var(--Secondary)] gap-10 flex flex-col items-center bg-[var(--Accent)] py-12">
      <div className="flex flex-col xl:w-11/12 xxl:w-full mx-auto items-start">
        <div className="md:w-5/6 xl:w-3/4 m-4 sm:mx-8 sm:m-12 flex flex-col gap-6 xl:ml-28 items-start">
          <h1 className="text-2xl md:text-5xl mt-2 font-bold ml-2">Services</h1>
          <p className="text-md md:text-2xl tracking-wide">
            From one nation to the other. Our years of experience in the
            maritime industry has empowered us to ensure that you receive the
            best. These are the services we offer;
          </p>
        </div>
        <div className="flex md:flex-row gap-x-12 gap-y-8 xl:gap-12 justify-center mx-2 sm:mx-16 md:mx-4 lg:mx-12 flex-col flex-wrap">
          {Services.map((Service) => (
            <div
              key={Service.name}
              className="flex-1 border group hover:grayscale-0 text-[var(--Accent)] bg-[var(--Secondary)] grayscale-25 overflow-hidden hover:shadow-xl w-auto md:min-w-[25rem] md:max-w-[27.5rem] lg:min-w-[22.5rem] lg:max-w-[25rem] h-[32rem]"
            >
              <img
                src={Service.image}
                className="h-72 lg:h-1/2 w-full group-hover:opacity-90 duration-700 delay-[.0125ms] transition-transform group-hover:scale-110"
                alt={Service.alt}
              />
              <div className="min-h-1/2 w-full px-4 py-5 flex flex-col gap-3 items-start">
                <h1 className="text-2xl lg:text-3xl font-bold">{Service.name}</h1>
                <p className="text-md md:text-xl tracking-wide">{Service.about}</p>
                <Button
                  text="Learn More"
                  class="p-2 text-md cursor-pointer border-b-2 hover:font-bold duration-700 delay-[2.5ms] bottom-4 md:absolute"
                  onClick={() => (window.location.href = `/services#${Service.id}`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
