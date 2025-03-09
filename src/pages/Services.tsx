import { Outlet, Link, useLocation } from "react-router-dom";
// import services from "../assets/service.json";
import services from "../assets/serviceSideBar.json";
import motion from "framer-motion"
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          <ScrollArea className="flex-1 py-4 px-2">
            <nav className="space-y-6">
              {services.map((group) => (
                <div key={group.title} className="space-y-2">
                  {group.title && (
                    <h3 className="text-xs font-medium text-muted-foreground px-4 uppercase tracking-wider">
                      {group.title}
                    </h3>
                  )}
                  <div className="space-y-1">
                    {group.items.map((item) => {
                      const isActive = location.pathname === item.href;

                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => !isDesktop && setOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-4 py-2.5 text-sm rounded-md transition-all duration-200",
                            "hover:bg-primary/10 hover:text-primary",
                            isActive
                              ? "bg-primary/15 text-primary font-medium shadow-sm"
                              : "text-muted-foreground"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <div
                            className={cn(
                              "flex items-center justify-center h-8 w-8 rounded-md",
                              isActive
                                ? "bg-primary/20 text-primary"
                                : "text-muted-foreground"
                            )}
                          >
                            <item.icon className="h-5 w-5" />
                          </div>
                          <span>{item.name}</span>
                          {isActive && (
                            <motion.div
                              layoutId="sidebar-active-indicator"
                              className="absolute left-0 w-1 h-8 bg-primary rounded-r-full"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </ScrollArea>
        </aside>

        {/* Main Content Area */}
        <main className="py-4 min-h-screen overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-foreground">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
