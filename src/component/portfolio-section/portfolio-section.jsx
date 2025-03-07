import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Wedding Photography",
    img: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
  },
  {
    title: "Portrait Photography",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    title: "Event Photography",
    img: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
  },
  {
    title: "Nature Photography",
    img: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg",
  },
  {
    title: "Fashion Photography",
    img: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg",
  },
  {
    title: "Product Photography",
    img: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg",
  },
];

export function Portfolio() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Portfolio</h2>
        <p className="text-lg text-gray-700 mb-12">
          A showcase of our best work across different photography categories.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
