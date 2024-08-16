'use client'
import React from 'react'
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar'
import CardGaleri from '@/components/CardGaleri'
import background from "@/assets/images/background-1.png"
import irenggolo0 from "@/assets/images/app/wisata/irenggolo/irenggolo-0.png"
import irenggolo1 from "@/assets/images/app/wisata/irenggolo/irenggolo-1.jpg"
import irenggolo2 from "@/assets/images/app/wisata/irenggolo/irenggolo-2.jpg"
import irenggolo3 from "@/assets/images/app/wisata/irenggolo/irenggolo-3.jpg"
import irenggolo4 from "@/assets/images/app/wisata/irenggolo/irenggolo-4.jpg"
import irenggolo5 from "@/assets/images/app/wisata/irenggolo/irenggolo-5.jpg"
import irenggolo6 from "@/assets/images/app/wisata/irenggolo/irenggolo-6.jpg"
import Image from "next/image";
import Line from "@/components/Line"
import { motion } from 'framer-motion';
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

function dholo() {


  return (

    <div>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg">
        <Navbar />
      </nav>
      <section
        className="relative w-full h-[calc(100vh-64px)] bg-cover bg-center flex flex-col items-left justify-center text-left"
        style={{ backgroundImage: `url(${irenggolo0.src})` }} // Background image applied directly
      >
        {/* Overlay filter */}
        <div className="absolute inset-0 bg-black opacity-60"></div> 
        
        <motion.div
          className='relative ml-24'
          initial="hidden"
          animate="visible"
          variants={fadeIn} // Animation applied only to the text
        >
          <motion.h1 className="text-white text-7xl font-bold mb-8" variants={fadeInUp}>Air Terjun Irenggolo</motion.h1>
          <motion.h3 className="text-white text-xl mb-2" variants={fadeInUp}>Kawasan Wisata Besuki, Kecamatan Mojo, Kabupaten Kediri</motion.h3>
          <motion.h3 className="text-white text-xl" variants={fadeInUp}>Jawa Timur</motion.h3>
        </motion.div>
      </section>

      <section className="w-full h-auto bg-white p-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold mt-8 mb-12">Galeri</h1>
        <div className="flex flex-wrap justify-center gap-10 w-full max-w-6xl">
          {[irenggolo1, irenggolo2, irenggolo3, irenggolo4, irenggolo5, irenggolo6].map((image, index) => (
            <div key={index} className="group transition-transform transform hover:scale-105">
              <CardGaleri
                imageUrl={image}
                link={"/wisata"}
              />
            </div>
          ))}
        </div>
      </section>

      <Line/>


      <section className="w-full h-auto bg-white p-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-12">Lokasi</h1>

        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row bg-white shadow-lg min-h-fit rounded-lg overflow-hidden border border-gray-200">
            <div className="md:w-1/2 w-full h-64 md:h-auto relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.095118332591!2d111.85047876977474!3d-7.865263310745704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79aab67326b3ed%3A0x94e8147b5adc4f03!2sIronggolo%20Waterfall!5e0!3m2!1sen!2sid!4v1723763117888!5m2!1sen!2sid"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-none"
              ></iframe>
            </div>
            <div className="md:w-1/2 w-full p-4 md:p-6 flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-20">Air Terjun Irenggolo</h1>
              <p className="text-gray-800 text-lg 600 mt-10 mb-20">
              Dusun Besuki, Desa Jugo, Kecamatan Mojo, Kabupaten Kediri, Jawa Timur 64162
              </p> 
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center mt-8 mb-20">
      <Link href="/wisata" className="px-6 py-3 text-white bg-[#4B3619] rounded-lg shadow-md hover:bg-[#3E2E15] focus:outline-none focus:ring-2 focus:ring-[#4B3619] focus:ring-opacity-50">
        Lihat Wisata Lainnya
      </Link>
    </section>

    </div>

    
  )
}

export default dholo