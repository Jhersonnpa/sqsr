import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Carrousel() {
  const images = [
    {
      url: "/images/missio-del-equip/1.webp",
    },
    {
      url: "/images/missio-del-equip/3.webp",
    },
    {
      url: "/images/missio-del-equip/6.webp",
    },
    {
      url: "/images/missio-del-equip/7.webp",
    },
    {
      url: "/images/missio-del-equip/8.webp",
    },
    {
      url: "/images/missio-del-equip/9.webp",
    },
  ];
  return (
    <Carousel className="w-full">
      <CarouselContent className="lg:ml-1">
        {images.map((image, index) => (
          <CarouselItem key={index} className="lg:pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <img
                src={image.url}
                alt={`Imagen ${index} de missión del club`}
                className="w-full h-[300px] z-0"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex hover:text-terciary hover:border-terciary"/>
      <CarouselNext className="hidden md:flex hover:text-terciary hover:border-terciary"/>
    </Carousel>
  );
}
