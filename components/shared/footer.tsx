import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 border-t">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-16 w-full md:flex justify-between">
        <div>
            <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-bold">SIP.co</h2>
            </div>
          <p className="text-gray-600 mb-4">
            Sign up for our weekly non-boring newsletter about money, markets, and more.
          </p>
        </div>

        <div className="max-w-xl">
        <div className="flex gap-4 flex-col sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button>Subscribe</Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            By providing your email, you are consenting to receive communications from Wealthsimple Media Inc.
            Visit our <a href="#" className="underline">Privacy Policy</a> or contact us at privacy@wealthsimple.com
          </p>
        </div>
          
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Us Column */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Fokus Layanan</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Accessibility</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of use</a></li>
            </ul>
          </div>

         

          {/* Products Column */}
          <div>
            <h3 className="font-semibold mb-4">Fokus Layanan</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Riset</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Rekomendasi & Formulasi Strategis</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Data & Analisis</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Admove/Advokasi</a></li>
             
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                  <Twitter className="h-5 w-5" />
                  X
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                  <Youtube className="h-5 w-5" />
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2016-2024, Wealthsimple Technologies Inc. All Rights Reserved.
            </p>
            {/* <select className="border rounded-md px-3 py-1">
              <option>English</option>
            </select> */}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            For further details see our <a href="#" className="underline">Legal Disclosures</a>.
            By using this website, you accept our <a href="#" className="underline">Terms of Use</a> and
            <a href="#" className="underline">Privacy Policy</a>.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            For information about filing a complaint please visit <a href="#" className="underline">how to File a Complaint</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}

