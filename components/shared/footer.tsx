"use client";

import { useState } from "react";

export default function Footer() {
  const [activeMap, setActiveMap] = useState("singapore");

  return (
    <footer className="bg-neutral-900 text-white py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-7xl md:text-8xl mb-10">Let's Talk.</h2>

        {/* Google Maps Embed */}
        <div className="mb-20">
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveMap("singapore")}
              className={`px-4 py-2 rounded ${
                activeMap === "singapore"
                  ? "bg-white text-black"
                  : "bg-black text-white border-white/20 hover:bg-white/10 hover:text-white"
              }`}
            >
              Singapore Office
            </button>
            <button
              onClick={() => setActiveMap("bali")}
              className={`px-4 py-2 rounded ${
                activeMap === "bali"
                  ? "bg-white text-black"
                  : "bg-black text-white border-white/20 hover:bg-white/10 hover:text-white"
              }`}
            >
              Bali Office
            </button>
          </div>
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            {activeMap === "singapore" ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8204620628224!2d103.84683431475396!3d1.2816896990635992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190d593a26ad%3A0x886f12fe6f53fb81!2s180%20Robinson%20Rd%2C%20Singapore%20068914!5e0!3m2!1sen!2sus!4v1638774083360!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2950067507856!2d115.16169731532558!3d-8.665069193769068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247a1e42e7e7f%3A0x6d2a2e2f7c8d3f0b!2sJl.%20Merta%20Agung%20No.25%2C%20Kerobokan%20Kelod%2C%20Kec.%20Kuta%20Utara%2C%20Kabupaten%20Badung%2C%20Bali%2080361%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1638774219909!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Singapore Office */}
          <div className="space-y-4">
            <h3 className="text-lg text-gray-300 mb-6">Singapore</h3>
            <div className="space-y-1 text-sm text-gray-400">
              <p>FLEAVA PTE. LTD.</p>
              <p>180 Robinson Road, #14-04</p>
              <p>Singapore Business Federation</p>
              <p>Centre - 068914, Singapore</p>
            </div>
          </div>

          {/* Bali Office */}
          <div className="space-y-4">
            <h3 className="text-lg text-gray-300 mb-6">Bali, Indonesia</h3>
            <div className="space-y-1 text-sm text-gray-400">
              <p>PT FLEAVA DIGITAL MEDIA</p>
              <p>Jalan Merta Agung, No.25,</p>
              <p>Kerobokan Kelod, Badung,</p>
              <p>Bali - 80361, Indonesia</p>
            </div>
          </div>

          {/* Navigation Links 1 */}
          <div className="space-y-4">
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Works</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Expertise</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Journal</a>
              </li>
            </ul>
          </div>

          {/* Navigation Links 2 */}
          <div className="space-y-4">
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">Awards</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Brands</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Inquiries</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Transform</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-400">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-white">Wa</a>
            <a href="#" className="hover:text-white">Tl</a>
            <a href="#" className="hover:text-white">Tw</a>
          </div>
          <div className="flex items-center space-x-4">
            <span>© 2024 Fleava.</span>
            <a href="#" className="hover:text-white">Terms.</a>
            <a href="#" className="hover:text-white">Sitemap.</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
