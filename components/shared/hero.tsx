import { Button } from "../ui/button";
import Marquee from "react-fast-marquee";

export default function Hero(){
    return(
        <main>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 py-24">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-serif tracking-tight">
                Lorem Ipsum color sit
              </h1>
              <p className="text-gray-600 text-lg max-w-lg">
                amet, consectetur adipiscing elit. donec ut Fusce vel diam commodo, molestie sapien eu, egesta aenean risus facilisi
              </p>
              <Button className="rounded-full bg-gray-900 hover:bg-gray-800 py-6">
                Get started
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
            <img
            src="https://via.placeholder.com/500x500" 
            alt="Tentang Samudra Intidaya Perkasa"
       
            className="object-cover rounded-lg"
          />
            </div>
          </div>

          <div className="grid py-12 border-t md:flex md:space-x-4 md:mx-48">
            <h1 className="text-center py-4 font-serif md:text-xl md:text-start md:w-3/12">Trusted by industry leader around the world</h1>
            <Marquee className="text-2xl">
              <h1 className="mx-4">Brand</h1>
              <h1 className="mx-4">Brand-2</h1>
              <h1 className="mx-4">Brand-3</h1>
              <h1 className="mx-4">Brand-4</h1>
            </Marquee>
          </div>

        </div>
      </main>
    )
}