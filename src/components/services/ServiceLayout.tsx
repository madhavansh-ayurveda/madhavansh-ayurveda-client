import { ReactNode } from "react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { ServiceSidebar } from "@/components/services/ServiceSideBar";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@/hooks/use-mobile";
import { ChevronLeft } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServicesLayoutProps {
  children: ReactNode;
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Get the current service name for the header
  const currentServiceName = pathSegments.length > 1
    ? pathSegments[pathSegments.length - 1].replace(/-/g, ' ')
    : "Services";

  // Format the service name for display (capitalize first letter of each word)
  const formattedServiceName = currentServiceName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="container mx-auto px-0 md:px-4">
      <SidebarProvider>
        <div className="flex min-h-[calc(100vh-64px)] w-full">
          <ServiceSidebar />
          <SidebarInset className="">
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 bg-background z-10">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />

              {/* Breadcrumb-style navigation */}
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>

                {pathSegments.length > 1 && (
                  <>
                    <span className="text-muted-foreground">/</span>
                    <span className="font-medium">{formattedServiceName}</span>
                  </>
                )}
              </div>

              {/* Back button on mobile */}
              {isMobile && pathSegments.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto"
                  asChild
                >
                  <Link to="/services">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to Services
                  </Link>
                </Button>
              )}
            </header>
            <div className="py-6 w-full px-4 min-h-[calc(100vh-64px-64px)] overflow-x-hidden overflow-y-auto">
              {children}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
