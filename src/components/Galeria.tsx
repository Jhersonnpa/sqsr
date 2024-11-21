"use client";
import { LayoutGrid } from "@/components/ui/layout-grid";

export const Galeria = () => {
  return (
    <div className="h-[400vh] w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};


const cards = [
  {
    id: 1,
    content: "",
    className: "md:col-span-1",
    thumbnail: "/images/galeria/1.webp",
  },
  {
    id: 2,
    content: "",
    className: "md:col-span-2",
    thumbnail: "/images/galeria/2.webp",
  },
  {
    id: 3,
    content: "",
    className: "md:col-span-2",
    thumbnail: "/images/galeria/3.webp",
  },
  {
    id: 4,
    content: "",
    className: "md:col-span-1",
    thumbnail: "/images/galeria/4.webp",
  },
  {
    id: 5,
    content: "",
    className: "md:col-span-1",
    thumbnail: "/images/galeria/5.webp",
  },
  {
    id: 6,
    content: "",
    className: "md:col-span-2",
    thumbnail: "/images/galeria/6.webp",
  },
  {
    id: 7,
    content: "",
    className: "md:col-span-2",
    thumbnail: "/images/galeria/7.webp",
  },
  {
    id: 8,
    content: "",
    className: "md:col-span-1",
    thumbnail: "/images/galeria/8.webp",
  },
  {
    id: 9,
    content: "",
    className: "md:col-span-1",
    thumbnail: "/images/galeria/9.webp",
  },
  {
    id: 10,
    content: "",
    className: "md:col-span-2",
    thumbnail: "/images/galeria/10.webp",
  },
  {
    id: 11,
    content: "",
    className: "md:col-span-2",
    thumbnail: "/images/galeria/11.webp",
  },
  {
    id: 12,
    content: "",
    className: "md:col-span-1",
    thumbnail: "/images/galeria/12.webp",
  },
  {
    id: 13,
    content: "",
    className: "md:col-span-1",
    thumbnail: "/images/galeria/13.webp",
  },
  {
    id: 14,
    content: "",
    className: "md:col-span-2",
    thumbnail: "/images/galeria/14.webp",
  },
  {
    id: 15,
    content: "",
    className: "md:col-span-2",
    thumbnail: "/images/galeria/15.webp",
  },
  {
    id: 16,
    content: "",
    className: "md:col-span-1",
    thumbnail: "/images/galeria/16.webp",
  },
  {
    id: 17,
    content: "",
    className: "md:col-span-1",
    thumbnail: "/images/galeria/17.webp",
  },
  {
    id: 18,
    content: "",
    className: "md:col-span-2",
    thumbnail: "/images/galeria/18.webp",
  },
  {
    id: 19,
    content: "",
    className: "md:col-span-2",
    thumbnail: "/images/galeria/19.webp",
  },
  {
    id: 20,
    content: "",
    className: "md:col-span-1",
    thumbnail: "/images/galeria/20.webp",
  },
  {
    id: 21,
    content: "",
    className: "md:col-span-1",
    thumbnail: "/images/galeria/21.webp",
  },
  {
    id: 22,
    content: "",
    className: "md:col-span-2",
    thumbnail: "/images/galeria/22.webp",
  },
  {
    id: 23,
    content: "",
    className: "md:col-span-2",
    thumbnail: "/images/galeria/23.webp",
  },
  {
    id: 24,
    content: "",
    className: "md:col-span-1",
    thumbnail: "/images/galeria/24.webp",
  },
  {
    id: 25,
    content: "",
    className: "md:col-span-3",
    thumbnail: "/images/galeria/25.webp",
  },
];

