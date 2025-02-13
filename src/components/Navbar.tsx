"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import Whatsapp from "./icons/whatsapp";
import Instagram from "./icons/instagram";
import YouTube from "./icons/youtube";

const Navbar = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
            Qui som
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col rounded-sm gap-1 p-1 w-[250px]">
              <ListItem
                href="/missio-del-club"
                title="Missio del club"
                className="text-base font-semibold"
              />
              <ListItem
                href="/el-nostre-equip"
                title="El nostre equip"
                className="text-base font-semibold"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
            Que fem
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col rounded-sm gap-1 p-1 w-[250px]">
              <ListItem href="/entrenaments" title="Entrenaments" />
              <ListItem href="/extraescolars" title="Extraescolars" />
              <ListItem href="/campus" title="Campus" />
              <ListItem href="/galeria" title="Galeria" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
            Esdeveniments
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col rounded-sm gap-1 p-1 w-[400px]">
              <ListItem href="/summer-games" title="SQSR summer games" />
              <ListItem href="/spring-games" title="SQSR spring games" />
              <ListItem href="/la-poma-rollerday" title="La poma RollerDay" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/contacte" className={navigationMenuTriggerStyle()}>
            Contacte
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <div className="w-full flex gap-2">
            <a
              href="#"
              target="_blank"
              className="w-full bg-terciary hover:bg-secondary p-1 hover:text-terciary rounded-full transition-colors cursor-pointer"
            >
              <Whatsapp className="size-5" />
            </a>
            <a
              href="#"
              target="_blank"
              className="w-full bg-terciary hover:bg-secondary p-1 hover:text-terciary rounded-full transition-colors cursor-pointer"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href="#"
              target="_blank"
              className="w-full bg-terciary hover:bg-secondary p-1 hover:text-terciary rounded-full transition-colors cursor-pointer"
            >
              <YouTube className="size-5" />
            </a>
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none text-center rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-terciary text-secondary focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-secondary">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
