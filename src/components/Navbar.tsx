import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Logo } from "./navbar/Logo";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileNav } from "./navbar/MobileNav";
import { AuthNav } from "./navbar/AuthNav";

export default function AppNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="border-b border-border sticky top-0 bg-background z-50">
      <div className="flex h-20 items-center px-4 w-full max-w-7xl mx-auto relative">
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        <DesktopNav />

        <div className="hidden md:flex items-center gap-2">
          <AuthNav onOpenChange={setIsMobileMenuOpen} />
        </div>

        <Button
          variant="ghost"
          className="ml-auto md:hidden text-foreground hover:bg-muted"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </div>
    </header>
  );
}