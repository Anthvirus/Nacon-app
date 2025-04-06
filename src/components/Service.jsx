import { useEffect } from "react";
import Services from "../components/ServiceMain";
import Button from "./Button";

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
    <section className="w-full min-h-max bg-[var(--Primary)] flex flex-col items-center service-page">
      <div className="text-[var(--Primary)] service-header w-full h-[20rem] xl:h-[35rem] flex justify-center flex-col items-start">
        <div className="ml-4 md:ml-12 lg:ml-24">
          <h1 className="text-md lg:text-6xl lg:tracking-loose tracking-wider font-bold">
            Our Services
          </h1>
          <p className="font-semibold text-lg lg:text-2xl">
            Simplifying logistics everyday
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center my-16 gap-12">
        <div className="w-11/12 gap-y-6 gap-4 flex flex-col lg:w-2/3 xl:w-5/6">
          {Services.map((service) => (
            <div
              key={service.name}
              id={service.id}
              className="flex group hover:grayscale-0 grayscale-25 gap-8 overflow-hidden w-full text-[var(--Accent)] bg-[var(--Secondary)] items-center xl:even:flex-row-reverse flex-col xl:flex-row lg:my-6 shadow-md even:bg-[var(--Accent)] even:text-[var(--Secondary)] size-max"
            >
              <img
                src={service.image}
                className="max-w-full lg:min-w-1/2 xl:min-w-1/2 group-hover:opacity-90 duration-700 delay-[.0125ms] transition-transform group-hover:scale-105 flex-1 min-h-full"
                alt={service.alt}
              />
              <div className="lg:min-w-2/5 mx-4 py-5 flex flex-col gap-3 items-start flex-1">
                <h1 className="text-2xl lg:text-4xl font-bold">
                  {service.name}
                </h1>
                <p className="text-md lg:text-xl tracking-wide">
                  {service.about}
                </p>
                <Button name="Track Shpiment" class="bg-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
