import InfoCard from "./InfoCard";
import drugManagement from "../../assets/images/cards-2.png";
import perceptionManagement from "../../assets/images/cards-4.png";
import advanceInventory from "../../assets/images/cards-6.png";

export default function ImageSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
      <InfoCard
        image={drugManagement}
        title="Drug Stock Management"
        text="Efficiently monitor and organize your pharmacy's drug inventory. Track stock levels in real time, set alerts for low inventory, and prevent shortages with proactive management tools."
      />
      <InfoCard
        image={perceptionManagement}
        title="Doctor, Patient & Prescription Management"
        text="Simplify prescription handling with secure and accurate digital solutions. Easily store, manage, and retrieve prescriptions, ensuring faster service and improved customer satisfaction."
      />
      <InfoCard
        image={advanceInventory}
        title="Advanced Inventory Tracking"
        text="Gain full control over your pharmacy inventory with advanced tracking features. Monitor stock movement, minimize waste, and ensure compliance with accurate and automated reporting tools."
      />
    </div>
  );
}
