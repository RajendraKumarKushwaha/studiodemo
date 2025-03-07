import { useState } from "react";
import { Button } from "@/components/ui/button";

const galleryData = [
  {
    title: "Wedding Photography",
    images: [
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/2959203/pexels-photo-2959203.jpeg",
      "https://images.pexels.com/photos/2959203/pexels-photo-2959203.jpeg",
      "https://images.pexels.com/photos/2959203/pexels-photo-2959203.jpeg",
    
      
    ]
  },
  {
    title: "Pre-Wedding Photography",
    images: [
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
     
    ]
  },
  {
    title: "Maternity Photography",
    images: [
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      
    ]
  },
  {
    title: "Candid Photography",
    images: [
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
     
     
    ]
  }
];

export function Gallery() {
  const [expanded, setExpanded] = useState({});

  const toggleShowMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Gallery</h2>
        {galleryData.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {category.images.slice(0, expanded[index] ? category.images.length : 5).map((image, imgIndex) => (
                <img key={imgIndex} src={image} alt={`${category.title} ${imgIndex + 1}`} className="w-full object-cover rounded-lg shadow-lg" />
              ))}
            </div>
            {category.images.length > 5 && (
              <Button onClick={() => toggleShowMore(index)} className="mt-4 block mx-auto bg-black text-white px-6 py-2 rounded-lg">
                {expanded[index] ? "Show Less" : "Show More"}
              </Button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
