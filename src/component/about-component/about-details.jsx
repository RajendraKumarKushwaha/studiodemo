import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function AboutUsPage() {
  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* About Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-[url('https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg')] bg-cover bg-center rounded-lg shadow-lg"
        ></motion.div>
        
        {/* About Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6">
            At StudioName, we are dedicated to capturing the magic of life’s most cherished moments. Our team of skilled photographers has spent years refining their craft, delivering stunning wedding, portrait, and event photography.
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Why Choose Us?</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
            <li>Experienced and passionate photographers</li>
            <li>State-of-the-art equipment for high-quality images</li>
            <li>Customized packages to fit your needs</li>
            <li>Unmatched attention to detail</li>
          </ul>
          <Link to="/contact-us">
            <Button className="bg-black text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-gray-800">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
