import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    review:
      "Absolutely loved the photography! The attention to detail and the quality of pictures were outstanding.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Neha Verma",
    review:
      "The best photography experience I've ever had. The pictures were stunning and full of emotions.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    name: "Rahul Mehta",
    review:
      "Professional and talented photographers! The album we received was beyond our expectations.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
];

export function Testimonials() {
  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
        <p className="text-lg text-gray-700 mb-12">
          Hear from our happy customers who trusted us with their precious moments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg text-left flex flex-col items-center"
            >
              <FaQuoteLeft className="text-gray-400 text-3xl mb-4" />
              <p className="text-gray-700 text-lg italic mb-4">"{testimonial.review}"</p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 mb-3"
              />
              <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
