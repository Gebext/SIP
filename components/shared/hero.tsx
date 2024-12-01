"use client"

import Image from "next/image";
import { Button } from "../ui/button";

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
           
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 py-24 border-t">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <h2 className="text-2xl font-serif">Lorem Ipsum</h2>
                <p className="text-gray-600">
                  amet, consectetur adipiscing elit vel diam commodo, molestie sapien risus facilisi
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
}