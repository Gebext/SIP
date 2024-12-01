import Hero from "@/components/shared/hero"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
         <header className="py-2">
            <h1 className="text-center text-5xl lg:text-6xl font-serif tracking-tight">SIP.</h1>
        </header>   
      <nav className="border-y">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Fokus Layanan
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                News & Update
              </Link>
            </nav>
          </div>
        </div>
      </nav>
       < Hero/>
   
    </div>
  )
}

