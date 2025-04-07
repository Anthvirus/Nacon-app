import { useEffect } from "react";
import Services from "../components/ServiceMain";
import Button from "./Button";
import TransitionComponent from "./TransitionComponent";

export default function ServiceBody() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        const yOffset = -window.innerHeight / 2 + target.offsetHeight / 2;
        const y =
          target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section className="w-full min-h-max bg-[var(--Primary)] flex flex-col items-center service-page">
      <TransitionComponent>
        <div className="text-[var(--Primary)] service-header w-full min-h-[30rem] xl:h-[60vh] flex justify-center flex-col items-start">
          <div className="ml-4 md:ml-12 lg:ml-24">
            <h1 className="text-3xl lg:text-6xl lg:tracking-loose tracking-wider font-bold">
              Our Services
            </h1>
            <p className="font-semibold text-md lg:text-2xl">
              Simplifying logistics everyday
            </p>
          </div>
        </div>
      </TransitionComponent>

      <div className="flex flex-col items-center my-16 gap-12">
        <div className="w-11/12 gap-y-6 gap-4 flex flex-col lg:w-2/3 xl:w-5/6">
          {Services.map((service, index) => (
            <TransitionComponent key={service.name} id={service.id}>
              <div
                id={service.id}
                className={`scroll-mt-40 flex group hover:grayscale-0 grayscale-25 gap-8 overflow-hidden w-full items-center flex-col xl:flex-row lg:my-6 shadow-md size-max
                  ${index % 2 === 0
                    ? "bg-[var(--Secondary)] text-[var(--Accent)]"
                    : "bg-[var(--Accent)] text-[var(--Secondary)] xl:flex-row-reverse"}`}
              >
                <img
                  src={service.image}
                  className="max-w-full lg:min-w-1/2 xl:min-w-1/2 group-hover:opacity-90 duration-700 delay-[.0125ms] transition-transform group-hover:scale-105 flex-1 max-h-1/5 lg:h-auto"
                  alt={service.alt}
                />
                <div className="lg:min-w-2/5 mx-4 py-5 flex flex-col gap-3 items-start flex-1">
                  <h1 className="text-2xl lg:text-4xl font-bold">
                    {service.name}
                  </h1>
                  <p className="text-md lg:text-xl tracking-wide">
                    {service.about}
                  </p>
                  <Button
                    onClick={() => console.log("works")}
                    text="Track Shipment"
                    class="p-3 font-semibold text-sm lg:text-xl rounded-xl duration-500 delay-[2.5ms] hover:px-4 cursor-pointer text-[var(--Accent)] bg-[var(--Secondary)] hover:invert-10 mt-2"
                    style={
                      service.id === "tracking"
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                  />
                </div>
              </div>
            </TransitionComponent>
          ))}
        </div>
      </div>
    </section>
  );
}
