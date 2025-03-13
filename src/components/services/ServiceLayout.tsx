"use client";

import type { ReactNode } from "react";
import { Home } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ServicesSidebar } from "@/components/services/sidebar";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

interface ServicesLayoutProps {
  children: ReactNode;
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  const { pathname } = useLocation();
  const pathSegments = pathname?.split("/").filter(Boolean) || [];

  // Format the current service name for display
  const currentServiceName =
    pathSegments.length > 1
      ? pathSegments[pathSegments.length - 1].replace(/-/g, " ")
      : "Services";

  const formattedServiceName = currentServiceName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="h-screen flex flex-col">
      <SidebarProvider>
        <div className="flex flex-1 overflow-hidden">
          <ServicesSidebar />
          <SidebarInset className="flex flex-col min-h-0">
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 bg-background z-10">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                      <Home className="h-4 w-4" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/services">Services</BreadcrumbLink>
                  </BreadcrumbItem>

                  {pathSegments.length > 1 && (
                    <>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>{formattedServiceName}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </>
                  )}
                </BreadcrumbList>
              </Breadcrumb>

              {pathSegments.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto md:hidden"
                  asChild
                >
                  <Link to="/services">Back to Services</Link>
                </Button>
              )}
            </header>

            <div className="flex-1 overflow-y-auto">
              <div className="container py-6 md:py-8 max-w-6xl m-6 mx-auto">{children}</div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
