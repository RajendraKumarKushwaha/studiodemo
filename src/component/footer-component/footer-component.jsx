import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mb-0 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Name and Description */}
        <div>
          <h2 className="text-2xl font-bold">StudioName</h2>
          <p className="mt-2 text-gray-400">
            Capturing timeless moments with precision and creativity. Your memories, our lens.
          </p>
        </div>

        {/* Services and Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><Link to="/wedding-photography" className="hover:text-white">Wedding Photography</Link></li>
              <li><Link to="/pre-wedding-photography" className="hover:text-white">Pre-Wedding Photography</Link></li>
              <li><Link to="/maternity-photography" className="hover:text-white">Maternity Photography</Link></li>
              <li><Link to="/candid-photography" className="hover:text-white">Candid Photography</Link></li>
              <li><Link to="/films" className="hover:text-white">Films & Slow Motion</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-4 flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} StudioName. All rights reserved.
      </div>
    </footer>
  );
}
