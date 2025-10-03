import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { User, ChevronDown, Calendar } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/features/authSlice";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScaleOnHover } from "@/components/framer-animations";

interface AuthNavProps {
  onOpenChange?: (open: boolean) => void;
}

export function AuthNav({ onOpenChange }: AuthNavProps) {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

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

  if (user) {
    return (
      <DropdownMenu onOpenChange={onOpenChange}>
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
    );
  }

  return (
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
          <Link to="/register">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300">
              Register
            </Button>
          </Link>
        </ScaleOnHover>
      </motion.div>
    </>
  );
}