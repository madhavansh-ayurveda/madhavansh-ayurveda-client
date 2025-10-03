"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"
import { Leaf, Calendar, Menu } from "lucide-react"
import { ScaleOnHover } from "./framer-animations"

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
      className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <div className="relative">
            <Leaf className="h-10 w-10 text-primary" />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
          <div>
            <span className="text-2xl font-bold text-foreground">AyurVeda</span>
            <div className="text-sm text-primary font-medium">Wellness Center</div>
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Services", "Doctors", "Therapies", "Testimonials"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              {item}
              <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="/book-consultation"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ y: -2 }}
          >
            Contact
            <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </motion.a>
        </nav>

        <div className="flex items-center gap-4">
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <ScaleOnHover scale={1.05}>
              <a href="/book-consultation">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
              </a>
            </ScaleOnHover>
          </motion.div>

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {["Home", "Services", "Doctors", "Therapies", "Testimonials"].map(item => (
                  <DropdownMenuItem key={item}>
                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <a href="/book-consultation">Contact</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.header>
  )
}