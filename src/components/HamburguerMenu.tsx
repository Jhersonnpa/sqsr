"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburguer from "@/components/icons/hamburguer";

export default function HamburguerMenu() {
  return (
    <div className="md:hidden">
      <Sheet key={"top"}>
        <SheetTrigger asChild>
          <Button size={"sm"} className="p-2">
            <Hamburguer className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"top"} className="w-full h-screen">
          <SheetHeader>
            <SheetTitle>
              <a
                href="/"
                className="text-secondary font-elianto hover:text-terciary transition-colors cursor-pointer text-4xl"
              >
                SQSR
              </a>
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <ScrollArea className="w-full h-3/4 p-2">
            <ul className="flex flex-col gap-2 py-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:no-underline py-2">
                    Qui som
                  </AccordionTrigger>
                  <AccordionContent className="w-full flex">
                    <ul className="flex flex-col gap-2 justify-center items-center w-full h-full">
                      <li className="w-full flex">
                        <a
                          href="/missio-del-club"
                          className="bg-foreground rounded-sm p-2 w-full"
                        >
                          Missio del club
                        </a>
                      </li>
                      <li className="w-full flex">
                        <a
                          href="#"
                          className="bg-foreground rounded-sm p-2 w-full"
                        >
                          L'equip
                        </a>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="hover:no-underline py-2">
                    Que fem
                  </AccordionTrigger>
                  <AccordionContent className="w-full flex">
                    <ul className="flex flex-col gap-2 justify-center items-center w-full h-full">
                      <li className="w-full flex">
                        <a
                          href="#"
                          className="bg-foreground rounded-sm p-2 w-full"
                        >
                          Entrenament
                        </a>
                      </li>
                      <li className="w-full flex">
                        <a
                          href="#"
                          className="bg-foreground rounded-sm p-2 w-full"
                        >
                          Extraescolars
                        </a>
                      </li>
                      <li className="w-full flex">
                        <a
                          href="#"
                          className="bg-foreground rounded-sm p-2 w-full"
                        >
                          Campus
                        </a>
                      </li>
                      <li className="w-full flex">
                        <a
                          href="#"
                          className="bg-foreground rounded-sm p-2 w-full"
                        >
                          Galleria
                        </a>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <li className="flex w-full bg-foreground rounded-sm">
                <a href="/esdeveniments" className="w-full py-2 px-1">
                  Esdeveniments
                </a>
              </li>
              <li className="flex w-full bg-foreground rounded-sm">
                <a href="/contacte" className="w-full py-2 px-1">
                  Contacte
                </a>
              </li>
            </ul>
          </ScrollArea>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Tancar</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
