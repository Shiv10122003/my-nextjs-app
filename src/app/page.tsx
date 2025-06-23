"use client";

import React from "react";
import HomePage from "@/components/HomePage";
import Navigation from "@/components/Navigation";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

export default function Home(): React.JSX.Element {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleSearch = () => {
  
    console.log("Search clicked");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Top Navigation Bar */}
      
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Navigation currentPath={pathname} />
      </header>
       
      {/* Main Content with added spacing */}
      <main className="flex-1 pt-6"> {/* Added padding-top here */}
        <AnimatePresence mode="wait">
          {isHomePage && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="home-content container mx-auto px-4" // Added container classes
            >
              <HomePage />
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Floating action button for mobile */}
      {!isHomePage && (
        <motion.div 
          className="fixed bottom-6 right-6 z-50 md:hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <button 
            className="flex items-center justify-center w-14 h-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            onClick={handleSearch}
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-primary-foreground" />
          </button>
        </motion.div>
      )}
    </div>
  );
}