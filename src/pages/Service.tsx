import serviceData from "@/assets/service.json";
import { ServicePageComponent } from "@/components/services/Service";
import { useParams } from "react-router-dom";

export default function ServiceDetailPage() {
  const params = useParams();
  const service = serviceData.find((s) => s.route === params.serviceId);

  if (!service) {
    return;
  }

  // Find related services based on categories or keywords
  const relatedServices = serviceData
    .filter(
      (s) =>
        s.route !== params.serviceId &&
        // Match by similar benefits
        (s.content.benefits.some((benefit) =>
          service.content.benefits.includes(benefit)
        ) ||
          // Match by similar ideal conditions
          s.content.idealFor.some((condition) =>
            service.content.idealFor.includes(condition)
          ))
    )
    .slice(0, 3); // Limit to 3 related services

  return (
    <ServicePageComponent service={service} relatedServices={relatedServices} />
  );
}
