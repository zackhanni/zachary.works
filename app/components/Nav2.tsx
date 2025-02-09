"use client";

import { useState, useEffect } from "react";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Nav2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`fixed w-full transition-transform duration-500 z-20`}>
      <div className="pt-4 container max-w-screen-xl mx-auto">
        {/* Desktop Nav */}
        <div className="items-center justify-between h-[60px] px-8 bg-white rounded-2xl text-black hidden lg:flex">
          <a href="/" className="text-lg font-bold no-underline">
            Zachary.works
          </a>
          <NavigationMenu>
            <NavigationMenuList className="ml-10 mb-0">
              <NavigationMenuItem className="">
                <Link href="#experience" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Experience
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* mobile nav */}
        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "flex" : "hidden"
          } bg-white`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem
              title="Experience"
              link="#experience"
              onClick={handleMobileNavClick}
            />
            <MobileNavItem title="Projects" link="#projects" />
            <MobileNavItem title="About" link="#about" />
            <MobileNavItem title="Contact" link="#contact" />
          </div>
        </div>
      </div>
    </div>
  );
}

const MobileNavItem = ({
  title,
  link,
  onClick,
}: {
  title: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
      onClick={() => onClick}
    >
      {title}
    </Link>
  );
};
