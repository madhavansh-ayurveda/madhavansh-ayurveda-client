import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

interface TherapyCategory {
  name: string;
  icon?: string;
  subcategories?: {
    name: string;
    therapies: string[];
  }[];
  therapies: string[];
}

const categories: TherapyCategory[] = [
  {
    name: "Panchakarma",
    icon: "🌿",
    subcategories: [
      {
        name: "Pre-Purification",
        therapies: ["Snehana", "Swedana"],
      },
      {
        name: "Main Procedures",
        therapies: ["Vamana", "Virechana", "Nasya", "Rakta Mokshana"],
      },
    ],
    therapies: [],
  },
  {
    name: "Swedana",
    icon: "🔥",
    subcategories: [
      {
        name: "Dry Fomentation",
        therapies: ["Nadi Sweda", "Baluka Sweda"],
      },
      {
        name: "Herbal Bolus",
        therapies: [
          "Patra Pinda Sweda",
          "Churna Pinda Sweda",
          "Shalishashtika Pinda Sweda",
          "Kukkut Pinda Sweda",
          "Mamsa Pinda Sweda",
        ],
      },
    ],
    therapies: [],
  },
  {
    name: "Basti",
    icon: "💧",
    subcategories: [
      {
        name: "Main Basti Types",
        therapies: ["Kashaya Basti", "Taila Basti", "Vaitarana Basti"],
      },
      {
        name: "Regional Basti",
        therapies: [
          "Shiro Basti",
          "Griva Basti",
          "Kati Basti",
          "Janu Basti",
          "Puta Basti",
          "Sthanik Basti",
        ],
      },
      {
        name: "Special Basti",
        therapies: ["Uttar Basti"],
      },
    ],
    therapies: [],
  },
  {
    name: "External Therapies",
    icon: "🖐️",
    subcategories: [
      {
        name: "Topical Applications",
        therapies: [
          "Lepa",
          "Upanaha",
          "Sthanik Anulepa",
          "Talam",
          "Shiro Lepa",
        ],
      },
      {
        name: "Dhara Therapies",
        therapies: ["Kshira Dhara", "Takra Dhara", "Shiro Dhara"],
      },
    ],
    therapies: [],
  },
  {
    name: "Eye Care",
    icon: "👁️",
    therapies: [
      "Netra Dhara",
      "Ashchotana",
      "Anjana",
      "Vidalak",
      "Akshitarpana",
    ],
  },
  {
    name: "Bloodletting",
    icon: "🩸",
    therapies: ["Jalaukavacharana", "Prachhana", "Siravyadha"],
  },
  {
    name: "Special Procedures",
    icon: "⚕️",
    therapies: ["Agnikarma", "Udvartana", "Dhumapana"],
  },
  {
    name: "Women's Health",
    icon: "🌸",
    subcategories: [
      {
        name: "Yoni Therapies",
        therapies: ["Yoni Prakshalana", "Yoni Pichu", "Yoni Purna"],
      },
    ],
    therapies: [],
  },
];

export function ServicesSidebar() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredCategories = React.useMemo(() => {
    if (!searchQuery) return categories;

    return categories.filter((category) => {
      // Check if category name matches
      if (category.name.toLowerCase().includes(searchQuery.toLowerCase()))
        return true;

      // Check if any subcategory matches
      if (
        category.subcategories?.some(
          (sub) =>
            sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            sub.therapies.some((therapy) =>
              therapy.toLowerCase().includes(searchQuery.toLowerCase())
            )
        )
      )
        return true;

      // Check if any therapy matches
      if (
        category.therapies.some((therapy) =>
          therapy.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
        return true;

      return false;
    });
  }, [searchQuery, categories]);

  return (
    <Sidebar className="mt-16">
      <SidebarHeader>
        <div className="px-4 py-2">
          <h2 className="text-lg font-semibold tracking-tight mb-2">
            Ayurvedic Therapies
          </h2>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search therapies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          {filteredCategories.map((category) => (
            <SeviceAccordionComponent category={category} level={1} />
          ))}
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}

const SeviceAccordionComponent = ({
  category,
  level,
}: {
  category: TherapyCategory;
  level: number;
}) => {
  const { pathname } = useLocation();
  const isActive = (therapy: string) =>
    pathname?.includes(therapy.toLowerCase().replace(/\s+/g, "-"));

  return (
    <>
      <SidebarGroup key={category.name} className="p-1">
        <Accordion type="single" collapsible>
          <AccordionItem value={category.name} className="border-b-0">
            <SidebarGroupLabel asChild>
              <AccordionTrigger className="py-2 hover:no-underline">
                <div className="flex items-center gap-2 text-[0.85rem]">
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </div>
              </AccordionTrigger>
            </SidebarGroupLabel>
            <AccordionContent className="p-0">
              <SidebarGroupContent className={`pl-${4*level}`}>
                {category.subcategories?.map((subcategory) => (
                  <SeviceAccordionComponent
                    category={subcategory}
                    level={level++}
                  />
                ))}

                {category.therapies.length > 0 && (
                  <SidebarMenu>
                    {category.therapies.map((therapy) => (
                      <SidebarMenuItem key={therapy}>
                        <SidebarMenuButton asChild isActive={isActive(therapy)}>
                          <Link
                            to={`/services/${therapy
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className={`pl-${4*2*level}`}
                          >
                            {therapy}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                )}
              </SidebarGroupContent>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SidebarGroup>
    </>
  );
};
