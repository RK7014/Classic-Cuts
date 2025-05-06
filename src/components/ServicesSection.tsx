import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { convertToINR } from "@/lib/utils";

interface ServiceItem {
  name: string;
  description: string;
  price: string;
  duration?: string;
  popular?: boolean;
}

interface ServiceCategory {
  title: string;
  services: ServiceItem[];
}

interface ServicesSectionProps {
  categories?: ServiceCategory[];
}

const ServicesSection = ({
  categories = defaultCategories,
}: ServicesSectionProps) => {
  return (
    <section className="py-0 px-4 bg-white" id="services">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of professional barbering services to keep you
            looking your best. From classic cuts to modern styles, our
            experienced barbers deliver quality results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="bg-gray-900 text-white py-6">
                <CardTitle className="text-xl font-bold text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">
                          {service.name}
                          {service.popular && (
                            <Badge
                              className="ml-2 bg-amber-500"
                              variant="secondary"
                            >
                              Popular
                            </Badge>
                          )}
                        </h3>
                        <span className="font-bold text-lg">
                          {convertToINR(service.price)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                      {service.duration && (
                        <div className="mt-2 text-sm text-gray-500">
                          Duration: {service.duration}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultCategories: ServiceCategory[] = [
  {
    title: "Haircuts",
    services: [
      {
        name: "Classic Cut",
        description:
          "Traditional haircut with scissors or clippers, includes wash and style.",
        price: "$8",
        duration: "30 min",
        popular: true,
      },
      {
        name: "Buzz Cut",
        description: "Short, uniform length all over using clippers.",
        price: "$11",
        duration: "30 min",
      },
      {
        name: "Fade",
        description:
          "Gradual transition from shorter to longer hair, perfect for a clean look.",
        price: "$14",
        duration: "35 min",
      },
      
    ],
  },
  {
    title: "Beard Services",
    services: [
      {
        name: "Beard Trim",
        description:
          "Shape and maintain your beard for a clean, professional look.",
        price: "$8",
        duration: "15 min",
      },
      {
        name: "Clean Shave",
        description:
          "Traditional straight razor shave with hot towel and aftershave.",
        price: "$10",
        duration: "30 min",
      },
      {
        name: "Luxury Beard Sculpting",
        description:
          "Precision beard shaping with hot towel treatment and beard oil.",
        price: "$15",
        duration: "45 min",
        popular: true,
      },
     
    ],
  },
  {
    title: "Premium Packages",
    services: [
      {
        name: "Father & Son",
        description: "Haircuts for dad and son (under 12) in one session.",
        price: "$40",
        duration: "45 min",
      },
      {
        name: "The Works",
        description: "Haircut, beard trim, hot towel treatment, and styling.",
        price: "$50",
        duration: "60 min",
        popular: true,
      },
    
      {
        name: "Groom Package",
        description:
          "Pre-wedding haircut, beard grooming, and styling for the big day.",
        price: "$60",
        duration: "75 min",
      },
    ],
  },
];

export default ServicesSection;
