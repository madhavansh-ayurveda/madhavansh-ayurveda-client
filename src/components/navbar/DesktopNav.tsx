import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/config/nav";
import { ListItem } from "./ListItem";

export function DesktopNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActivePath = (path: string) => location.pathname === path;

  const getNavMenuStyle = (path: string) =>
    cn(
      navigationMenuTriggerStyle(),
      "bg-transparent text-foreground hover:bg-muted focus:bg-muted",
      isActivePath(path) ? "bg-primary/10 text-primary font-medium" : ""
    );

  return (
    <NavigationMenu className="ml-auto mr-4 hidden md:block">
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.title}>
            {link.content ? (
              <>
                <NavigationMenuTrigger
                  className="bg-transparent text-foreground hover:bg-muted focus:bg-muted"
                  onClick={() => navigate(link.href)}
                >
                  <p className={cn("hover:text-primary", location.pathname.includes(link.href) ? "font-medium" : "")}>
                    {link.title}
                  </p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className={cn("grid gap-3 p-6 w-[400px]", link.title === "Services" ? "lg:w-[800px] lg:grid-cols-3" : "lg:w-[600px] md:grid-cols-3")}>
                    {link.content.map((item) => (
                      <ListItem key={item.title} to={item.href} title={item.title}>
                        {item.description}
                      </ListItem>
                    ))}
                    {link.viewMore && (
                        <ListItem to={link.viewMore.href} title={link.viewMore.title}>
                            {link.viewMore.description}
                        </ListItem>
                    )}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link to={link.href} className={getNavMenuStyle(link.href)}>
                {link.title}
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}