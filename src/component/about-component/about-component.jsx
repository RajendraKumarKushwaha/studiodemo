import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export function AboutUs() {
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are passionate photographers dedicated to capturing the essence of your moments. With years of experience in professional photography, we specialize in portrait, wedding, and event photography to create timeless memories.
            </p>
            <Link to="/about-us" className="bg-black text-white btn px-6 py-3 text-lg font-semibold rounded-lg hover:bg-gray-800">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }