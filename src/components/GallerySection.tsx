import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface GallerySectionProps {
  images?: GalleryImage[];
}

// Default gallery images
const defaultImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    alt: "Classic haircut with fade",
    category: "Haircuts",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800&q=80",
    alt: "Modern pompadour style",
    category: "Haircuts",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
    alt: "Beard trim and styling",
    category: "Beard",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80",
    alt: "Straight razor shave",
    category: "Shaves",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
    alt: "Skin fade with textured top",
    category: "Haircuts",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&q=80",
    alt: "Before and after transformation",
    category: "Before/After",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
    alt: "Full beard grooming",
    category: "Beard",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1593702288056-f5525dc83859?w=800&q=80",
    alt: "Vintage style haircut",
    category: "Haircuts",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1634302086887-13b5585a8883?w=800&q=80",
    alt: "Before and after beard trim",
    category: "Before/After",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?w=800&q=80",
    alt: "Hot towel treatment",
    category: "Shaves",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    alt: "Modern textured crop",
    category: "Haircuts",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800&q=80",
    alt: "Classic scissor cut",
    category: "Haircuts",
  },
];

const GallerySection = ({ images = defaultImages }: GallerySectionProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const categories = [
    "All",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of stylish haircuts and
            transformations. See the quality of our work and find inspiration
            for your next visit.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full mb-8">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="px-4 py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div
                      className="aspect-square w-full relative group"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 font-medium">
                          View
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
