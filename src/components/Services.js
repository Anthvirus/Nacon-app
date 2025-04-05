import Safety from "../assets/safety.jpg";
import ShipImage from "../assets/Ship-freight.jpg";
import LogisticsImage from "../assets/Logistics.jpg";
import ClearingImage from "../assets/customs.jpg";
import TrackingImage from "../assets/Tracking.jpg";

const Services = [
  {
    id: "logistics-services",
    name: "Logistics Services",
    about:
      "We provide an integrated network of transport ensuring shipment integrity.",
    image: LogisticsImage,
    alt: "Logistics service image",
  },
  {
    id: "sea-freight",
    name: "Sea Freight",
    about:
      "Our freight forwarding services ensure that your shipment is delivered to our client's desired destination.",
    image: ShipImage,
    alt: "Sea freight ship image",
  },
  {
    id: "safety",
    name: "Safety",
    about:
      "We ensure that each shipment is safely delivered to our client's desired destination.",
    image: Safety,
    alt: "Safety measures in freight image",
  },
  {
    id: "tracking",
    name: "Cargo Status Tracking",
    about:
      "We provide services that allow clients to track the progress of their shipment with us.",
    image: TrackingImage,
    alt: "Shipment tracking system image",
  },
  {
    id: "custom-clearance",
    name: "Custom Clearance",
    about:
      "We handle the clearance of your shipment from Customs ensuring shipment integrity.",
    image: ClearingImage,
    alt: "Custom clearance process image",
  },
];

export default Services;
