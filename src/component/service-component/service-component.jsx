import { motion } from "framer-motion";
const services = [
    {
        title: "Wedding Photography",
        description: "Capturing the most beautiful moments of your special day with stunning visuals.",
        icon: "📸",
    },
    {
        title: "Portrait Photography",
        description: "Professional and artistic portraits that tell your story in a single frame.",
        icon: "👤",
    },
    {
        title: "Event Photography",
        description: "Documenting your corporate or personal events with high-quality images.",
        icon: "🎉",
    },
    {
        title: "Product Photography",
        description: "Enhancing your brand with high-resolution product images for marketing.",
        icon: "🛍️",
    },
    {
        title: "Fashion Photography",
        description: "Showcasing style and elegance through creative fashion photography.",
        icon: "👗",
    },
    {
        title: "Nature Photography",
        description: "Bringing the beauty of nature to life with breathtaking shots.",
        icon: "🌿",
    },
];

export function Service() {
    return (
        <section className="w-full bg-gray-100 py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h2>
                <p className="text-lg text-gray-700 mb-12">
                    We provide a wide range of photography services to capture your best moments.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                    >
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-700">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
  
}
