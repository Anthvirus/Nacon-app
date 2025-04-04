import Safety from "../assets/safety.jpg";
import ShipImage from "../assets/Ship-freight.jpg";
import LogisticsImage from "../assets/Logistics.jpg";
import ClearingImage from "../assets/customs.jpg";
import TrackingImage from "../assets/Tracking.jpg";

const Services = [
    {
      name: "Logistics Services",
      about: "We provide an integrated network of transport ensuring shipment integrity.",
      image: LogisticsImage,
    },
    {
      name: "Sea Freight",
      about: "Our freight forwarding services, ensure that your shipment is delivered to our client's desired destination.",
      image: ShipImage,
    },
    {
      name: "Safety",
      about: "We ensure that each shipment is safely delivered to our client's desired destination.",
      image: Safety,
    },
    {
      name: "Cargo Status Tracking",
      about: "We provide services that allow for clients to track the progress of their shipment with us.",
      image: TrackingImage,
    },
    {
      name: "Custom Clearance",
      about: "We handle the clearance of your shipment from Customs ensuring shipment integrity.",
      image: ClearingImage,
    },
  ];

export default Services;