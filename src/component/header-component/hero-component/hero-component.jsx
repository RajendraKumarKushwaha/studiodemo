import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center bg-white text-black overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg')] bg-cover bg-center opacity-50"></div> */}
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 w-full max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 drop-shadow-lg leading-tight">
          Capturing Moments, Telling Stories
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-gray-700">
          Experience the art of photography with stunning visuals that bring emotions to life.
        </p>
        
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Button className="bg-black text-white px-6 py-3 text-lg font-semibold rounded-lg w-full md:w-auto hover:bg-gray-800">
            View Portfolio
          </Button>
          <Button className="bg-red-500 text-white px-6 py-3 text-lg font-semibold rounded-lg w-full md:w-auto hover:bg-red-600">
            Book a Session
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
