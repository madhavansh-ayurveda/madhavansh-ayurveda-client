import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X, ChevronDown, Calendar } from "lucide-react";
import { navLinks } from "@/config/nav";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/features/authSlice";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const expandTransition = "grid transition-[grid-template-rows] duration-200";
const expandContent = "overflow-hidden";
const expanded = "grid-rows-[1fr]";
const collapsed = "grid-rows-[0fr]";
const mobileMenuTransition = "transition-all duration-300 ease-in-out";

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    try {
      localStorage.removeItem("authToken");
      Cookies.remove("authToken");
      dispatch(logout());
      toast.success("Logged out successfully");
      setIsOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Failed to logout. Please try again.");
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const getMobileMenuStyle = (path: string) =>
    cn(
      "text-base transition-colors text-foreground",
      location.pathname === path ? "text-primary font-medium" : "hover:text-primary"
    );

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 md:hidden z-[49] ${mobileMenuTransition}`}
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-screen bg-background border-l border-border md:hidden z-[50] ${mobileMenuTransition}`}
        style={{
          width: "100%",
          maxWidth: "300px",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="flex justify-between items-center p-4 border-b border-border">
          <span className="font-semibold text-foreground">Menu</span>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-col p-4 space-y-3 overflow-y-auto h-[calc(100vh-64px)]">
          {navLinks.map((link) =>
            link.content ? (
              <div key={link.title} className="space-y-2">
                <button
                  onClick={() => toggleSection(link.title)}
                  className="flex items-center justify-between w-full text-base text-foreground hover:text-primary transition-colors"
                >
                  <Link to={link.href} className={getMobileMenuStyle(link.href)} onClick={() => setIsOpen(false)}>
                    {link.title}
                  </Link>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${expandedSection === link.title ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`${expandTransition} ${expandedSection === link.title ? expanded : collapsed}`}>
                  <div className={expandContent}>
                    <div className="pl-4 space-y-2 py-2">
                      {link.content.map((item) => (
                        <Link key={item.href} to={item.href} className={getMobileMenuStyle(item.href)} onClick={() => setIsOpen(false)}>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} to={link.href} className={getMobileMenuStyle(link.href)} onClick={() => setIsOpen(false)}>
                {link.title}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-border">
            {user ? (
              <div className="flex flex-col gap-2">
                <Link to="/appointments" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Current Appointments</Button>
                </Link>
                <Link to="/history" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">History</Button>
                </Link>
                <Link to="/profile" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Profile Settings</Button>
                </Link>
                <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive" onClick={handleLogout}>
                  Sign out
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link to="/book-consultation" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </Link>
                <Link to="/auth" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary">Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}