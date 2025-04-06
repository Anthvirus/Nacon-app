import NaconLogo from "../assets/Nacon.png";
import MissionImage from "../assets/mission.jpg";
import VisionImage from "../assets/vision.jpg";
export default function AboutContent() {
  return (
    <section className="w-full min-h-max bg-[var(--Secondary)] flex items-center flex-col">
      <div className="text-[var(--Primary)] about-header w-full min-h-[30rem] xl:h-[60vh] flex justify-center flex-col">
        <div className="xl:ml-32 ml-4 md:ml-12">
          <h1 className="text-2xl lg:text-6xl lg:tracking-loose tracking-wider font-bold">
            Nacon Investment Limited
          </h1>
          <p className="font-semibold text-md lg:text-2xl">
            Leading the way for logistics excellence and client satisfaction.
          </p>
        </div>
      </div>
      <div className="w-11/12 lg:w-5/6 gap-x-12 gap-y-4 flex flex-col mt-8 mb-2 xl:mb-6 xl:mt-16">
        <h1 className="text-2xl md:text-3xl xl:text-6xl font-bold ">About Us</h1>
        <div className="text-md md:text-2xl tracking-wide xl:leading-10 mx-2">
          <img
            src={NaconLogo}
            alt="Nacon Investment Limited"
            className="float-left size-32 md:size-48 lg:size-64 xl:size-80 mr-6 mb-4 shadow-md"
          />
          <p>
            Nacon Investment Limited is a world-class freight forwarding and
            logistics company with over 25 years of expertise in the maritime
            industry. Renowned for our reliability and excellence, we have
            established ourselves as a trusted leader in freight forwarding,
            logistics, and supply chain solutions. For over 2 decades we have
            been connecting businesses to international markets, ensuring that
            each shipment is handled with the utmost integrity and precision.
            Our expertise spans from sea freight, customs clearance, logistics
            and cargo status tracking, making us a preferred logistics partner
            for importers and multi-national corporations.
            <br />
            <br />
            Nacon Investment has been improving and making big strides through
            the collective efforts of the management. To connect businesses with
            international markets, to promote transparency in the maritime
            industry through technological innovations and ensure efficient
            delivery of shipments improving supply chain distribution. We have
            recruited and developed a team of professionals here at Nacon
            Investment, that allows our clients to track the progress of their
            shipment with us, ensuring transparency and shipment integrity. This
            move was part of the goals of the company, to ensure shipment
            integrity and remain as a leader in the maritime industry by
            embracing technological innovation.
            <br />
            <br />
            Our customer-centric approach guarantees that each shipment is
            treated with integrity and precision. With integrity being our watch
            word, you can be rest assured that our team will deliver your
            shipment to its desired destination.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:mt-6 mt-12 xl:p-20 px-2 py-16 gap-4 md:gap-12 bg-[var(--Accent)] items-center text-[var(--Primary)]">
        <div className="gap-4 border-b lg:pb-0 lg:border-b-0 pb-2 lg:gap-8 items-center lg:flex-row flex-col flex w-11/12 md:w-1/2 lg:min-w-5/6 h-max">
          <img
            src={MissionImage}
            className="w-auto lg:w-1/2 xl:w-2/5 shadow-md lg:h-full"
          />
          <div className=" tracking-wide xl:leading-10 m-1 flex flex-col justify-center items-start h-full ">
            <h1 className="text-2xl md:text-3xl xl:text-5xl mb-4 font-bold">
              Our Mission
            </h1>
            <p className="text-md md:text-xl xl:text-2xl">
              We are committed to providing efficient and cost-effective freight
              solutions through unmatched industry expertise. With precision and
              integrity being at our core, ensuring that every shipment meets
              highest standards, keeping client satisfaction as
              our top priority.
            </p>
          </div>
        </div>
        <div className="gap-4 lg:gap-8 items-center lg:flex-row-reverse flex-col flex w-11/12 md:w-1/2 lg:min-w-5/6 h-max">
          <img
            src={VisionImage}
            className="w-auto lg:w-1/2 xl:w-2/5 shadow-md lg:h-full"
          />
          <div className="tracking-wide xl:leading-10 m-1 flex flex-col justify-center items-start h-full">
            <h1 className="text-2xl md:text-3xl xl:text-5xl mb-4 font-bold">
              Our Vision
            </h1>
            <p className="text-md md:text-xl xl:text-2xl">
              To lead the way in global freight forwarding by delivering
              seamless and innovative logistics solutions ensuring
              client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
