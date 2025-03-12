"use client"

import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, ChevronRight, ChevronsLeft, ChevronsRight, Leaf, Search, Sparkles } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
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
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip"
import { ScrollArea } from "../ui/scroll-area"

export interface NavItem {
  title: string
  route: string
  subs?: NavItem[]
  icon?: React.ElementType
}

export const navItems: NavItem[] = [
  {
    title: "OPD",
    route: "opd",
    icon: Leaf,
  },
  {
    title: "Panchakarma",
    route: "panchakarma",
    icon: Sparkles,
    subs: [
      {
        title: "Purvakarma (Preparation)",
        route: "purvakarma",
        subs: [
          { title: "Deepana Pachana", route: "deepana-pachana" },
          { title: "Snehan", route: "snehan" },
          { title: "Swedana", route: "swedana" },
        ],
      },
      {
        title: "Pradhanakarma (Main Therapies)",
        route: "pradhanakarma",
        subs: [
          { title: "Basti", route: "basti" },
          { title: "Nasya", route: "nasya" },
          { title: "Raktamokshana", route: "raktamokshana" },
          { title: "Vamana", route: "vamana" },
          { title: "Virechana", route: "virechana" },
        ],
      },
      {
        title: "Paschatkarma (Post Care)",
        route: "paschatkarma",
        subs: [{ title: "Diet-Regime", route: "diet" }],
      },
    ],
  },
  {
    title: "Therapies",
    route: "therapies",
    icon: Leaf,
    subs: [
      { title: "Cupping", route: "cupping" },
      { title: "EMS", route: "ems" },
      { title: "Full Body EMS", route: "full-ems" },
      { title: "Beauty Therapy", route: "beauty" },
    ],
  },
]

export function ServiceSidebar() {
  const { state, setOpen } = useSidebar()
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [searchQuery, setSearchQuery] = React.useState("")

  // Filter navigation items based on search query
  const filterItems = (items: NavItem[]): NavItem[] => {
    if (!searchQuery) return items

    return items.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase())

      // Check if any sub-items match
      const hasMatchingSubs = item.subs && filterSubItems(item.subs).length > 0

      return titleMatch || hasMatchingSubs
    })
  }

  // Filter sub-items recursively
  const filterSubItems = (items: NavItem[]): NavItem[] => {
    if (!searchQuery) return items

    return items.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase())

      // Check if any sub-items match
      const hasMatchingSubs = item.subs && filterSubItems(item.subs).length > 0

      return titleMatch || hasMatchingSubs
    })
  }

  return (
    <Sidebar className="border-r mt-16">
      <SidebarHeader className="flex flex-col gap-2 px-3 py-2">
        <div className="flex items-center gap-2 px-1">
          <Leaf className="h-6 w-6 text-primary" />
          <Link to={"/services"}>
            <span
              className={`text-xl font-bold transition-opacity ${state === "collapsed" ? "opacity-0" : "opacity-100"}`}
            >
              Our Services
            </span>
          </Link>

          {isDesktop && state === "expanded" && (
            <Button variant="ghost" size="icon" className="ml-auto h-7 w-7" onClick={() => setOpen(false)}>
              <ChevronsLeft className="h-4 w-4" />
              <span className="sr-only">Collapse</span>
            </Button>
          )}
          {isDesktop && state === "collapsed" && (
            <Button variant="ghost" size="icon" className="ml-auto h-7 w-7" onClick={() => setOpen(true)}>
              <ChevronsRight className="h-4 w-4" />
              <span className="sr-only">Expand</span>
            </Button>
          )}
        </div>

        <div className={`transition-opacity ${state === "collapsed" ? "opacity-0" : "opacity-100"}`}>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search services..."
              className="w-full bg-muted pl-8 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="overflow-y-auto">
        <ScrollArea>

          {filterItems(navItems).map((category, index) => (
            <ServiceCategory key={index} category={category} />
          ))}
        </ScrollArea>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}

interface ServiceCategoryProps {
  category: NavItem
}

function ServiceCategory({ category }: ServiceCategoryProps) {
  // const { state } = useSidebar()
  const [isOpen, setIsOpen] = React.useState(true)
  const location = useLocation()
  const isActive = location.pathname.includes(`/services/${category.route}`)

  // If this is a top-level category with no subs, render a simple menu item
  if (!category.subs) {
    return (
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <TooltipProvider delayDuration={0}>
              <SidebarMenuItem>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link to={`/services/${category.route}`}>
                        {category.icon && <category.icon className="h-5 w-5" />}
                        <span>{category.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="group-data-[state=expanded]:hidden">
                    {category.title}
                  </TooltipContent>
                </Tooltip>
              </SidebarMenuItem>
            </TooltipProvider>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    )
  }

  // For categories with sub-items, render a collapsible group
  return (
    <SidebarGroup>
      <Collapsible defaultOpen={true} open={isOpen} onOpenChange={setIsOpen} className="group/collapsible">
        <SidebarGroupLabel asChild className="flex items-center px-2 text-xs font-medium">
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <Link to={`/services/${category.route}`} className="flex gap-2 font-normal">
              {category.icon && <category.icon className="h-5 w-5" />}
              <span className="text-[1rem] ">{category.title}</span>
            </Link>
            {isOpen ? (
              <ChevronDown className="h-4 w-4 transition-transform" />
            ) : (
              <ChevronRight className="h-4 w-4 transition-transform" />
            )}
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {category.subs.map((subItem, idx) => (
                <ServiceSubItem key={idx} item={subItem} parentRoute={`/services/${category.route}`} level={1} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </Collapsible>
    </SidebarGroup>
  )
}

interface ServiceSubItemProps {
  item: NavItem
  parentRoute: string
  level: number
}

function ServiceSubItem({ item, parentRoute, level }: ServiceSubItemProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()
  const fullRoute = `${parentRoute}/${item.route}`.replace(/\/+/g, "/")
  const isActive = location.pathname.includes(fullRoute)
  // const { state } = useSidebar()

  // If this item has no sub-items, render a simple menu item
  if (!item.subs || item.subs.length === 0) {
    return (
      <TooltipProvider delayDuration={0}>
        <SidebarMenuItem>
          <Tooltip>
            <TooltipTrigger asChild>
              <SidebarMenuButton asChild isActive={isActive} className={`${level > 0 ? `pl-${level * 2}` : ""}`}>
                <Link to={fullRoute}>{item.title}</Link>
              </SidebarMenuButton>
            </TooltipTrigger>
            <TooltipContent side="right" className="group-data-[state=expanded]:hidden">
              {item.title}
            </TooltipContent>
          </Tooltip>
        </SidebarMenuItem>
      </TooltipProvider>
    )
  }

  // For items with sub-items, render a collapsible section
  return (
    <>
      <SidebarMenuItem>
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className={`justify-between ${level > 0 ? `pl-${level * 2}` : ""}`} isActive={isActive}>
              <p onClick={() => window.location.href = fullRoute}>
                {item.title}
              </p>
              {isOpen ? <ChevronDown className="ml-auto h-4 w-4" /> : <ChevronRight className="ml-auto h-4 w-4" />}
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="ml-4 border-l border-border pl-2">
              {item.subs.map((subItem, idx) => (
                <ServiceSubItem key={idx} item={subItem} parentRoute={fullRoute} level={level + 1} />
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    </>
  )
}

export default ServiceSidebar

