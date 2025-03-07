import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ContactUs() {
  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-lg w-full"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">We'd love to hear from you. Fill out the form below and we'll get back to you soon.</p>
          <form>
            <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded-lg" />
            <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded-lg h-32"></textarea>
            <Button className="bg-black text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-gray-800 w-full">
              Send Message
            </Button>
          </form>
        </motion.div>
        
        {/* Contact Details & Map */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-700"><strong>Address:</strong> 123 Photography Street, Your City, Country</p>
            <p className="text-gray-700"><strong>Phone:</strong> +91 9876543210</p>
            <p className="text-gray-700"><strong>Email:</strong> contact@yourstudio.com</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              className="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d144.95373631550477!3d-37.816279442021814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c0b6c8a14a22e2!2sYour%20Studio!5e0!3m2!1sen!2sin!4v1632964500715!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy" 
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
