import Button from "../components/Button";
import Services from "../components/Services";
import { useNavigate } from "react-router-dom";
import TransitionComponent from "./TransitionComponent";

export default function ServiceSection() {
  const navigate = useNavigate();
  return (
    <TransitionComponent>
      <section className="w-full mt-20 xl:mt-24 text-[var(--Secondary)] gap-10 flex flex-col items-center bg-[var(--Accent)] py-12">
        <div className="flex flex-col xl:w-11/12 xxl:w-full mx-auto items-center">
          <div className="my-12 flex flex-col gap-6 items-start mx-4 md:mx-12">
            <h1 className="text-2xl md:text-5xl mt-2 font-bold">
              Our Services
            </h1>
            <p className="text-md md:text-2xl tracking-wide">
              From one nation to the other. Our years of experience in the
              maritime industry has empowered us to ensure that you receive the
              best. These are the services we offer;
            </p>
          </div>
          <div className="flex md:flex-row gap-x-12 gap-y-8 xl:gap-12 justify-center items-center mx-4 sm:mx-16 md:mx-4 lg:mx-12 flex-col flex-wrap">
            {Services.map((Service) => (
              <div
                key={Service.name}
                className="flex-1 border group hover:grayscale-0 text-[var(--Accent)] bg-[var(--Secondary)] grayscale-25 overflow-hidden hover:shadow-xl w-11/12 md:min-w-[25rem] md:max-w-[27.5rem] lg:min-w-[20rem] lg:max-w-[25rem] xl:min-w-[25rem] h-[32.5rem]"
              >
                <div className="w-full h-1/2 overflow-hidden">
                  <img
                    src={Service.image}
                    className="w-full h-full object-cover group-hover:opacity-90 duration-700 delay-[.0125ms] transition-transform group-hover:scale-110"
                    alt={Service.alt}
                  />
                </div>
                <div className="min-h-1/2 w-full px-4 py-5 flex flex-col gap-3 items-start mt-6">
                  <h1 className="text-2xl lg:text-3xl font-bold">
                    {Service.name}
                  </h1>
                  <p className="text-md md:text-xl tracking-wide">
                    {Service.about}
                    <Button
                      text="Learn More"
                      class="px-1 text-md cursor-pointer opacity-50 hover:underline duration-700 delay-[2.5ms]"
                      onClick={() => navigate(`/services#${Service.id}`)}
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TransitionComponent>
  );
}
