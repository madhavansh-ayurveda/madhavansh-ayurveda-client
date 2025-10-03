import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, User, ChevronDown, X, Calendar } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "react-hot-toast";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { logout } from "../store/features/authSlice";
import Cookies from "js-cookie";
import services from "../assets/service.json";
import treatments from "../assets/treatment.json";

import { motion } from "framer-motion"
import { ScaleOnHover } from "./framer-animations";


// First, add this CSS class to handle the transition
const expandTransition = "grid transition-[grid-template-rows] duration-200";
const expandContent = "overflow-hidden";
const expanded = "grid-rows-[1fr]";
const collapsed = "grid-rows-[0fr]";


// Update the mobile menu transition constant
const mobileMenuTransition = "transition-all duration-300 ease-in-out";

export default function AppNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    // console.log('Updated User:', user);;
    isMenuVisible;
    isAuthenticated;
  }, [user]);

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMenuVisible(true);
    } else {
      // Delay hiding the menu until animation completes
      const timer = setTimeout(() => {
        setIsMenuVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isMobileMenuOpen]);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("authToken");
      Cookies.remove("authToken");
      dispatch(logout());
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Failed to logout. Please try again.");
    }
  };

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  // Helper function to check if a path is active
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  // Helper function for navigation menu trigger style with active state
  const getNavMenuStyle = (path: string) => {
    return cn(
      navigationMenuTriggerStyle(),
      "bg-transparent text-foreground hover:bg-muted focus:bg-muted",
      isActivePath(path) ? "bg-primary/10 text-primary font-medium" : ""
    );
  };

  // Helper for mobile menu link style
  const getMobileMenuStyle = (path: string) => {
    return cn(
      "text-base transition-colors text-foreground",
      isActivePath(path) ? "text-primary font-medium" : "hover:text-primary"
    );
  };

  return (
    <div className="border-b border-border sticky top-0 bg-background z-50">
      <div className="flex h-20 items-center px-4 w-full max-w-7xl mx-auto relative">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/Logo.jpg"
              alt="Logo"
              className="h-16"
            />
            <span className="text-xl md:text-2xl font-bold text-foreground">
              Shree Madhavansh Ayurved
            </span>
          </Link>
        </div>

        <Button
          variant="ghost"
          className="ml-auto md:hidden text-foreground hover:bg-muted"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu
            className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>

        <div className="mobile-menu fixed top-0 right-0">
          <>
            {/* Overlay */}
            <div
              className={`fixed inset-0 bg-black/50 md:hidden z-[49] ${mobileMenuTransition}`}
              style={{
                opacity: isMobileMenuOpen ? 1 : 0.5,
                visibility: isMobileMenuOpen ? "visible" : "hidden",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu */}
            <div
              className={`fixed top-0 right-0 h-screen bg-background border-l border-border md:hidden z-[50] ${mobileMenuTransition}`}
              style={{
                width: "100%",
                maxWidth: "300px",
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen
                  ? "translateX(0)"
                  : "translateX(100%)",
                visibility: isMobileMenuOpen ? "visible" : "hidden",
                boxShadow: "-4px 0 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex justify-between items-center p-4 border-b border-border">
                <span className="font-semibold text-foreground">Menu</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:bg-muted"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-col p-4 space-y-3 overflow-y-auto h-[calc(100vh-64px)]">
                <Link
                  to="/"
                  className={getMobileMenuStyle("/")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Services Dropdown */}
                <div
                  className="space-y-2"
                >
                  <button
                    onClick={() => {
                      toggleSection("services");
                    }}
                    className="flex items-center justify-between w-full text-base text-foreground hover:text-primary transition-colors"
                  >
                    <span>
                      <Link
                        to="/services"
                        className={getMobileMenuStyle("/services")}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          navigate("/services");
                        }}
                      >
                        Services
                      </Link>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${expandedSection === "services" ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <div
                    className={`${expandTransition} ${expandedSection === "services" ? expanded : collapsed
                      }`}
                  >
                    <div className={expandContent}>
                      <div className="pl-4 space-y-2 py-2">
                        {services.slice(0, 5).map((service) => (
                           <Link
                           key={service.route}
                           to={`/services/${service.route}`}
                           className={getMobileMenuStyle(`/services/${service.route}`)}
                           onClick={() => setIsMobileMenuOpen(false)}
                         >
                           {service.title}
                         </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Treatments Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={() => toggleSection("treatments")}
                    className="flex items-center justify-between w-full text-base text-foreground hover:text-primary transition-colors"
                  >
                    <span>
                      <Link
                        to="/treatments"
                        className={getMobileMenuStyle("/treatments")}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Treatments
                      </Link>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${expandedSection === "treatments" ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <div
                    className={`${expandTransition} ${expandedSection === "treatments" ? expanded : collapsed
                      }`}
                  >
                    <div className={expandContent}>
                      <div className="pl-4 space-y-2 py-2">
                        {treatments.map((treatment) => (
                          <Link
                            key={treatment.title}
                            to={"/treatments" + treatment.href}
                            className={getMobileMenuStyle("/treatments" + treatment.href)}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {treatment.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/about"
                  className={getMobileMenuStyle("/about")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={getMobileMenuStyle("/contact")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-3 border-t border-border">
                  {user ? (
                    <>
                      <div className="flex flex-col gap-2">
                        <Link
                          to="/appointments"
                          className={getMobileMenuStyle("/appointments")}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-foreground hover:bg-muted"
                          >
                            Current Appointments
                          </Button>
                        </Link>
                        <Link
                          to="/history"
                          className={getMobileMenuStyle("/history")}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-foreground hover:bg-muted"
                          >
                            History
                          </Button>
                        </Link>
                        <Link
                          to="/profile"
                          className={getMobileMenuStyle("/profile")}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-foreground hover:bg-muted"
                          >
                            Profile Settings
                          </Button>
                        </Link>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-destructive hover:text-destructive"
                          onClick={() => {
                            handleLogout();
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          Sign out
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Link to="/book-consultation" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          Book Now
                        </Button>
                      </Link>
                      <Link
                        to="/auth"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Register</Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        </div>

        <NavigationMenu className="ml-auto mr-4 hidden md:block">
          <NavigationMenuList>
            {/* Home */}
            <NavigationMenuItem>
              <Link to="/" className={getNavMenuStyle("/")}>
                Home
              </Link>
            </NavigationMenuItem>

            {/* Services */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-muted focus:bg-muted">
                <p
                  className={cn(
                    "hover:text-primary",
                    location.pathname.includes("/services") ? "font-medium" : ""
                  )}
                  onClick={() => navigate("/services")}
                >
                  Services
                </p>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="left-0 absolute">
                <ul className="grid gap-3 p-6 w-[400px] lg:w-[800px] lg:grid-cols-[.5fr_0.5fr_0.5fr]">
                  <>
                    {services?.slice(0, 14).map((service) => (
                      <ListItem
                        key={service.route}
                        to={`/services/${service.route}`}
                        title={service.title}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                    <ListItem
                      to={`/services`}
                      title={"Many More"}
                    >
                      Many More
                    </ListItem>
                  </>

                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Treatment */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-muted focus:bg-muted">
                <Link to="/treatments">
                  <p className={cn("hover:text-primary")}>
                    Treatments
                  </p>
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[600px] md:grid-cols-3">
                  {treatments.map((treatment) => (
                    <ListItem
                      key={treatment.title}
                      title={treatment.title}
                      to={"/treatments" + treatment.href}
                    >
                      {treatment.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Find a Doctor */}
            <NavigationMenuItem>
              <Link to="/doctors" className={getNavMenuStyle("/doctors")}>
                Doctors
              </Link>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <Link to="/about" className={getNavMenuStyle("/about")}>
                About
              </Link>
            </NavigationMenuItem>

            {/* Consultations */}
            <NavigationMenuItem>
              <Link
                to="/track_consultation"
                className={getNavMenuStyle("/track_consultation")}
              >
                Consultations
              </Link>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <Link to="/contact" className={getNavMenuStyle("/contact")}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Login-Signup-Accounts */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <DropdownMenu onOpenChange={setIsDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-3 text-foreground hover:bg-muted"
                >
                  <User className="h-5 w-5" />
                  <span>Account</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/appointments" className="w-full cursor-pointer">
                    Current Appointments
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/history" className="w-full cursor-pointer">
                    History
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full cursor-pointer">
                    Profile Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-destructive focus:text-destructive cursor-pointer"
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <ScaleOnHover scale={1.05}>
                  <Link to="/book-consultation">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Now
                    </Button>
                  </Link>
                </ScaleOnHover>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <ScaleOnHover scale={1.05}>
                  <Link to="/auth">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                      Register
                    </Button>
                  </Link>
                </ScaleOnHover>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div >
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref as any}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          to={to}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";