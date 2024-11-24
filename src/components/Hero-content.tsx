import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";

export default function HeroContent() {
  const words = ["Esportivitat", "Diversió", "Respecte"];

  return (
    <div className="w-full md:min-h-[500px] py-10 md:border-l-[20px] border-l-orange-600 flex justify-center items-center md:px-4">
      <div className="w-full md:w-[80%] mx-auto text-secondary text-center md:text-left overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-bold py-4 drop-shadow-2xl">
          Al Skatepark <br />
          volem <FlipWords words={words} className="text-orange-600" />
        </h1>
        <div className="my-4 drop-shadow-xl text-md md:text-xl">
          <p>
            Des del Club Esportiu de Roller Freestyle de Sant Quirze Sobre Rodes
          </p>
          <p>us animem a rodar amb nosaltres!</p>
        </div>
        <a href="/contacte"><Button className="px-10 py-6 md:px-20 md:py-7 rounded-3xl text-md hover:bg-terciary transition-colors">Començar a rodar</Button></a>
      </div>
    </div>
  );
}
