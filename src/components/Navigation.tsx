"use client";

import React from "react";
import Link from "next/link";
import { Home, Search, Calendar, User, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  exact?: boolean;
  mobileOnly?: boolean;
}

interface NavigationProps {
  className?: string;
  navItems?: NavItem[];
  theme?: {
    background?: string;
    text?: string;
    activeText?: string;
    activeBg?: string;
    border?: string;
    hoverBg?: string;
    hoverText?: string;
    activeIndicator?: string;
  };
}

export default function Navigation({
  className = "",
  navItems: navItemsProp,
  theme = {
    background: "bg-black dark:bg-gray-900/90",
    text: "text-gray-600 dark:text-gray-300",
    activeText: "text-purple-600 dark:text-purple-400",
    activeBg: "bg-purple-50 dark:bg-purple-900/30",
    border: "border-gray-200 dark:border-gray-700",
    hoverBg: "hover:bg-gray-50 dark:hover:bg-gray-800",
    hoverText: "hover:text-gray-900 dark:hover:text-white",
    activeIndicator: "bg-purple-600 dark:bg-purple-400",
  },
}: NavigationProps) {
  const pathname = usePathname();

  const defaultNavItems: NavItem[] = [
    {
      name: "Home",
      href: "/",
      icon: <Home className="h-5 w-5" />,
      exact: true,
    },
    {
      name: "Browse",
      href: "/artists",
      icon: <Search className="h-5 w-5" />,
    },
    {
      name: "Create",
      href: "/onboarding",
      icon: <Plus className="h-5 w-5" />,
      mobileOnly: true,
    },
    {
      name: "Bookings",
      href: "/dashboard",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: <User className="h-5 w-5" />,
    },
  ];

  const navItems = navItemsProp || defaultNavItems;

  const isActive = (href: string, exact?: boolean) => {
    return exact ? pathname === href : pathname.startsWith(href);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 backdrop-blur-sm z-50 shadow-sm transition-colors duration-300",
        theme.background,
        theme.border && `border-b ${theme.border}`,
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 text-purple-700">
            <Link 
              href="/" 
              className={cn(
                "font-bold text-lg",
                theme.text,
                theme.hoverText,
                "transition-colors"
              )}
            >
              <h1 className="text-purple-500">Artistly</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems
              .filter((item) => !item.mobileOnly)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative flex items-center space-x-2 px-4 py-2 rounded-md",
                    "transition-colors duration-200",
                    theme.text,
                    theme.hoverText,
                    theme.hoverBg,
                    isActive(item.href, item.exact) && theme.activeText,
                    isActive(item.href, item.exact) && theme.activeBg
                  )}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {isActive(item.href, item.exact) && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className={cn(
                        "absolute bottom-0 left-0 right-0 h-0.5",
                        theme.activeIndicator
                      )}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {navItems
              .filter((item) => !item.mobileOnly)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "p-3 rounded-full transition-colors",
                    theme.text,
                    theme.hoverBg,
                    isActive(item.href, item.exact) && theme.activeText
                  )}
                >
                  {item.icon}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
}