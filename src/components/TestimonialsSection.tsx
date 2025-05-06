import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  testimonial: string;
  date: string;
}

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: {
  testimonials?: TestimonialProps[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage =
    typeof window !== "undefined" && window.innerWidth >= 1024
      ? 3
      : typeof window !== "undefined" && window.innerWidth >= 768
        ? 2
        : 1;

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - itemsPerPage
        : prevIndex - itemsPerPage,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= testimonials.length
        ? 0
        : prevIndex + itemsPerPage,
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience at our barber shop.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400" : "stroke-yellow-400 fill-transparent"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-3">
                    "{testimonial.testimonial}"
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {testimonials.length > itemsPerPage && (
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous testimonials</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next testimonials</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const defaultTestimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Rajeev Sharma",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    rating: 5,
    testimonial:
      "Best haircut I've ever had! The attention to detail is incredible and the atmosphere is so welcoming. I won't go anywhere else now.",
    date: "March 15, 2025",
  },
  {
    id: 2,
    name: "Rahul Verma",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    rating: 5,
    testimonial:
      "I brought my son in for his first proper haircut and the staff were amazing with him. Patient, friendly and the result was perfect!",
    date: "April 3, 2025",
  },
  {
    id: 3,
    name: "Vijay Sankar",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    rating: 4,
    testimonial:
      "Great beard trim and styling advice. The hot towel treatment was an unexpected bonus. Will definitely be back.",
    date: "February 22, 2025",
  },
  {
    id: 4,
    name: "Viraj Verma",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    rating: 5,
    testimonial:
      "I've been coming here for years and have never had a bad experience. The consistency and quality is unmatched in the city.",
    date: "May 1, 2025",
  },
  {
    id: 5,
    name: "sonam jha",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    rating: 5,
    testimonial:
      "I was nervous about trying a new style, but my barber listened carefully and gave me exactly what I wanted. So happy with the results!",
    date: "January 18, 2025",
  },
  {
    id: 6,
    name: "Priyanka sharma",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
    rating: 4,
    testimonial:
      "The shop has such a cool vibe and the staff are all skilled professionals. Love the complimentary beverages while you wait too.",
    date: "April 29, 2025",
  },
];

export default TestimonialsSection;
