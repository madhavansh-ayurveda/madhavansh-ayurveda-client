import { Outlet, Link, useLocation } from "react-router-dom";
import services from "../assets/service.json";
import { cn } from "@/lib/utils";

export const Services = () => {
  const location = useLocation();

  const isActiveLink = (href: string) => {
    const servicePath = href.replace("/services", "");
    return location.pathname === "/services" + servicePath;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-[250px_1fr] gap-6 min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="space-y-2 border-r py-4">
          <h2 className="text-2xl font-bold mb-4">
            <Link to={"/services"}>Services</Link>
          </h2>
          <nav className="flex flex-col space-y-1">
            {services.map((service) => (
              <Link
                key={service.title}
                to={`/services/${service.route}`}
                className={cn(
                  "p-2 rounded-md transition-colors duration-200",
                  "hover:bg-muted hover:text-foreground",
                  isActiveLink(service.route)
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground/80"
                )}
              >
                {service.title}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="py-4 min-h-screen overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-foreground">
          <Outlet />
        </main>
      </div>
    </div>
  );
}; 