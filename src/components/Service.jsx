import { useEffect } from "react";
import Services from "../components/ServiceMain";

export default function ServiceBody() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section className="w-full min-h-max mt-24 bg-[var(--Secondary)] flex flex-col items-center">
      <div className="flex flex-col items-center my-24 gap-12">
        <h1 className="text-2xl sm:text-4xl md:text-5xl mt-2 font-bold ml-2">
          Our Services At Nacon Investment
        </h1>

        <div className="w-5/6 gap-y-16 gap-4 flex flex-col">
          {Services.map((service) => (
            <div
              key={service.name}
              id={service.id}
              className="flex group hover:grayscale-0 grayscale-25 overflow-hidden w-full gap-12 items-center xl:even:flex-row-reverse flex-col xl:flex-row lg:my-6 border-b"
            >
              <img
                src={service.image}
                className="max-w-[20rem] md:max-w-[30rem] xl:max-w-2/5 h-auto group-hover:opacity-90 duration-700 delay-[.0125ms] transition-transform group-hover:scale-110 flex-1"
                alt={service.alt}
              />
              <div className="lg:min-w-2/5 px-4 py-5 flex flex-col gap-3 items-start flex-1">
                <h1 className="text-2xl lg:text-5xl font-bold">{service.name}</h1>
                <p className="text-md md:text-2xl tracking-wide">
                  {service.about}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
