import { Outlet, Link, useLocation } from "react-router-dom";
import treatments from "../assets/treatment.json";
import { cn } from "@/lib/utils";

export const Treatments = () => {
  const location = useLocation();

  const isActiveLink = (href: any) => {
    const treatmentPath = href.replace("/treatments", "");
    return location.pathname === "/treatments" + treatmentPath;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-[250px_1fr] gap-6 min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="space-y-2 border-r py-4">
          <h2 className="text-2xl font-bold mb-4">
            <Link to={"/treatments"}>Treatments</Link>
          </h2>
          <nav className="flex flex-col space-y-1">
            {treatments.map((treatment) => (
              <Link
                key={treatment.title}
                to={"/treatments" + treatment.href}
                className={cn(
                  "p-2 rounded-md transition-colors duration-200",
                  "hover:bg-muted hover:text-foreground",
                  isActiveLink(treatment.href)
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground/80"
                )}
              >
                {treatment.title}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="py-4 max-h-screen overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-foreground">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
