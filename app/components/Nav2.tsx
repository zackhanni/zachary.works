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
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";

export function Nav2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`fixed w-full transition-transform duration-500 z-20`}>
      <div className="pt-4 container max-w-screen-xl mx-auto">
        {/* Desktop Nav */}
        <div className="items-center justify-between h-[60px] px-8 bg-white rounded-2xl text-black flex">
          <a
            href="#hero"
            className="text-lg font-bold no-underline hidden md:block"
          >
            Zachary.works
          </a>
          <a href="#hero" className="text-lg font-bold no-underline md:hidden">
            ZW
          </a>
          <NavigationMenu className="hidden lg:flex">
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

          <Dialog>
            <DialogTrigger className="lg:hidden">
              <Menu />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Menu</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex flex-col sm:flex-col justify-center items-center">
                <DialogClose asChild className="w-full">
                  <Link href="#experience">
                    <Button
                      type="button"
                      variant="link"
                      className="text-center w-full"
                    >
                      Experience
                    </Button>
                  </Link>
                </DialogClose>
                <DialogClose asChild className="w-full">
                  <Link href="#projects">
                    <Button
                      type="button"
                      variant="link"
                      className="text-center w-full"
                    >
                      Projects
                    </Button>
                  </Link>
                </DialogClose>
                <DialogClose asChild className="w-full">
                  <Link href="#about">
                    <Button
                      type="button"
                      variant="link"
                      className="text-center w-full"
                    >
                      About
                    </Button>
                  </Link>
                </DialogClose>
                <DialogClose asChild>
                  <Link href="#contact">
                    <Button
                      type="button"
                      variant="link"
                      className="text-center w-full"
                    >
                      Contact
                    </Button>
                  </Link>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

const MobileNavItem = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link
      href={link}
      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
    >
      {title}
    </Link>
  );
};
