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

const Navbar = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg rounded-sm">
            Qui som
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col rounded-sm gap-1 p-1 w-[250px]">
              <ListItem
                href="/missio-del-club"
                title="Missio del club"
                className="w-full"
              />
              <ListItem href="/lequip" title="L'equip" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg">
            Que fem
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col rounded-sm gap-1 p-1 w-[250px]">
              <ListItem href="/entrenaments" title="Entrenaments" />
              <ListItem href="/extraescolars" title="Extraescolars" />
              <ListItem href="/campus" title="Campus" />
              <ListItem href="/galleria" title="Galleria" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/esdeveniments" className={navigationMenuTriggerStyle()}>
            Esdeveniments
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/contacte" className={navigationMenuTriggerStyle()}>
            Contacte
          </a>
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
