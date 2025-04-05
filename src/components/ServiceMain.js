import Safety from "../assets/safety.jpg";
import ShipImage from "../assets/Ship-freight.jpg";
import LogisticsImage from "../assets/Logistics.jpg";
import ClearingImage from "../assets/customs.jpg";
import TrackingImage from "../assets/Tracking.jpg";

const Services = [
  {
    id: "logistics",
    name: "Logistics Services",
    about:
      "Nacon Investment provides an integrated network of transport resources ensuring shipment integrity. With our logistics services we ensure precise and prompt delivery of cleared containers, and bulk cargoes to your desired destination. This service is tested and trusted with over 25 years of industry experience helping clients to meet delivery deadlines and reduce costs.",
    image: LogisticsImage,
    alt: "Logistics delivery and transportation"
  },
  {
    id: "sea-freight",
    name: "Sea Freight",
    about:
      "At Nacon Investment we offer professional freight forwarding tailored to meet the taste of our clients. We specialize in secure and timely sea freight solutions from international markets. Whether you are shipping containers, bulk cargo, trucks or vehicles, with our global network you can be rest assured that your cargo reaches its destination safely and on schedule. We offer transparent communication from arrival and delivery of each shipment ensuring peace of mind and cost-efficiency. The quality of the service offered has ensured numerous clients within and around the nation, making us renowned for innovation and effectiveness.",
    image: ShipImage,
    alt: "Sea freight ship in the ocean"
  },
  {
    id: "safety",
    name: "Safety",
    about:
      "At Nacon Investment, every shipment is treated to the highest standard, ensuring its security upon its arrival, up to the delivery process to the desired destination. Our logistics team ensures that each shipment is escorted with our personnel during its delivery process from the terminals to the specified destination, ensuring shipment security and preserving its integrity.",
    image: Safety,
    alt: "Secure delivery and safety procedures"
  },
  {
    id: "tracking",
    name: "Cargo Status Tracking",
    about:
      "At Nacon Investment, we provide services that allow clients to track the progress of their shipments with us. To improve integrity and ensure transparency, we have embraced technological innovation to allow clients to track the arrival of their shipments, along with the stage that the shipment is currently undergoing in the clearing process, until the delivery process of the shipment to the specified destination. This service ensures peace of mind and provides clients with 24/7 access to accurate and up-to-date information about their shipments.",
    image: TrackingImage,
    alt: "Cargo shipment tracking interface"
  },
  {
    id: "custom-clearance",
    name: "Custom Clearance",
    about:
      "We handle the entire custom clearance process of your shipments ensuring that they comply with local and international custom regulations and requirements, minimizing delays and avoiding penalties. From documentation to navigating complex requirements, with our expertise in the industry we guarantee timely clearance, preserving shipment integrity.",
    image: ClearingImage,
    alt: "Customs officer checking shipment documents"
  },
];

export default Services;
