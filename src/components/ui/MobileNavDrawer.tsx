"use client"

import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MobileNavDrawerProps {
  isOpen: boolean
  onClose: () => void
  navItems: {
    title: string
    path: string
    children?: { title: string; path: string }[]
  }[]
  authSection?: React.ReactNode
}

export function MobileNavDrawer({ isOpen, onClose, navItems, authSection }: MobileNavDrawerProps) {
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null)
  const location = useLocation()

  // Toggle a section's expanded state
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  // Helper for mobile menu link style
  const getMobileMenuStyle = (path: string) => {
    return cn(
      "text-base transition-colors",
      location.pathname === path ? "text-primary font-medium" : "hover:text-primary",
    )
  }

  // Animation classes
  const expandTransition = "grid transition-[grid-template-rows] duration-200"
  const expandContent = "overflow-hidden"
  const expanded = "grid-rows-[1fr]"
  const collapsed = "grid-rows-[0fr]"

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 md:hidden z-[49] transition-all duration-300`}
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen bg-background border-l md:hidden z-[50] transition-all duration-300`}
        style={{
          width: "100%",
          maxWidth: "300px",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          visibility: isOpen ? "visible" : "hidden",
          boxShadow: "-4px 0 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-semibold">Menu</span>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col p-4 space-y-3 overflow-y-auto h-[calc(100vh-64px)]">
          {navItems.map((item, index) => (
            <div key={index} className="space-y-2">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleSection(item.title)}
                    className="flex items-center justify-between w-full text-base hover:text-primary transition-colors"
                  >
                    <span>
                      <Link
                        to={item.path}
                        className={getMobileMenuStyle(item.path)}
                        onClick={item.children ? undefined : onClose}
                      >
                        {item.title}
                      </Link>
                    </span>
                    {item.children &&
                      (expandedSection === item.title ? (
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                      ) : (
                        <ChevronRight className="h-4 w-4 transition-transform duration-200" />
                      ))}
                  </button>

                  {item.children && (
                    <div className={`${expandTransition} ${expandedSection === item.title ? expanded : collapsed}`}>
                      <div className={expandContent}>
                        <div className="pl-4 space-y-2 py-2">
                          {item.children.map((child, idx) => (
                            <Link
                              key={idx}
                              to={child.path}
                              className={getMobileMenuStyle(child.path)}
                              onClick={onClose}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.path} className={getMobileMenuStyle(item.path)} onClick={onClose}>
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          {/* Auth section */}
          {authSection && <div className="pt-3 border-t mt-4">{authSection}</div>}
        </div>
      </div>
    </>
  )
}

