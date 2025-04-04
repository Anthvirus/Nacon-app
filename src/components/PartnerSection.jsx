import HapagLogo from "../assets/Hapag.svg";
import OneLogo from "../assets/One.svg";
import OOCLLogo from "../assets/OOCL.svg";
import MaerskLogo from "../assets/Maersk.svg";
import MSCLogo from "../assets/MSC.svg";
import PILLogo from "../assets/PIL.png";
import GrimaldiLogo from "../assets/Grimaldi.png";
import ArkasLogo from "../assets/Arkas.png";
import COSCOLogo from "../assets/COSCO.png";

const Partners = [
  { name: "Arkas", image: ArkasLogo },
  { name: "COSCO", image: COSCOLogo },
  { name: "Grimaldi", image: GrimaldiLogo },
  { name: "Hapag", image: HapagLogo },
  { name: "Maersk", image: MaerskLogo },
  { name: "MSC", image: MSCLogo },
  { name: "Ocean Network Express", image: OneLogo },
  { name: "OOCL", image: OOCLLogo },
  { name: "PIL", image: PILLogo },
];

export default function PartnerSection() {
  const duplicatedPartners = [
    ...Partners,
    ...Partners,
    ...Partners,
    ...Partners,
    ...Partners,
    ...Partners,
    ...Partners,
  ];

  return (
    <section className="w-full bg-[var(--Primary)] overflow-hidden pt-4 pb-12 lg:pb-32 my-12 flex-col flex gap-24">
      <h1 className="text-2xl lg:text-5xl mt-4 font-bold ml-10">
        In Good Company.
      </h1>
      <div className="relative">
        <div
          className="flex gap-4 lg:gap-16 animate-marquee"
          style={{
            animation: "marquee 45s linear infinite",
            minWidth: "200%",
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={partner.image}
                alt={partner.name}
                className="h-8 lg:h-28 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-200%); }
        }
      `}</style>
    </section>
  );
}
