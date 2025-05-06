import React from "react";
import { motion } from "framer-motion";
import { Menu, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import ServicesSection from "./ServicesSection";
import GallerySection from "./GallerySection";
import TestimonialsSection from "./TestimonialsSection";
import ContactForm from "./ContactForm";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
  {/* Navigation Bar */}
  <header className="sticky top-0 z-50 bg-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      
      {/* Logo + Title */}
      <div className="flex items-center space-x-4">
        <img
          src="https://i.postimg.cc/XqhxkFHV/A-circular-logo-with-the-text-CLASSIC-CUTS-written-in-uppercase-letters-an-illustration-of-a-trad.jpg"
          alt="Classic Cut Logo"
          width="50"
          height="50"
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold text-gray-900">Classic Cuts</h1>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">Home</a>
        <a href="#services" className="text-gray-900 hover:text-gray-600 font-medium">Services</a>
        <a href="#gallery" className="text-gray-900 hover:text-gray-600 font-medium">Gallery</a>
        <a href="#testimonials" className="text-gray-900 hover:text-gray-600 font-medium">Testimonials</a>
        <a href="#contact" className="text-gray-900 hover:text-gray-600 font-medium">Contact</a>
      </nav>
    </div>
  </header>



        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-900 hover:text-gray-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#gallery"
                className="text-gray-900 hover:text-gray-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                className="text-gray-900 hover:text-gray-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:text-gray-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-[80vh] bg-gray-900 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=80"
            alt="Barber shop interior"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            className="max-w-2xl text-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4"
              variants={fadeIn}
            >
              Premium Grooming for the Modern Gentleman
            </motion.h1>
            <motion.p className="text-xl mb-8" variants={fadeIn}>
              Experience the art of traditional barbering with a contemporary
              twist.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white"
              >
                <a href="#contact">Book Appointment</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-amber-500 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Clock className="h-6 w-6 mb-2" />
              <h3 className="font-medium">Opening Hours</h3>
              <p>Mon-Fri: 9am - 7pm</p>
              <p>Sat: 9am - 5pm</p>
              <p>Sun: Closed</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-6 w-6 mb-2" />
              <h3 className="font-medium">Contact Us</h3>
              <p>(+91) 1234567890</p>
              <p>info@classiccuts.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-6 w-6 mb-2" />
              <h3 className="font-medium">Location</h3>
              <p>01 Vasant Kunj </p>
              <p>South Delhi, Delhi 110070</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
                        
          </div>
          <ServicesSection />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our gallery of haircuts and styles.
            </p>
          </div>
          <GallerySection />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied
              customers.
            </p>
          </div>
          <TestimonialsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Book an Appointment
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready for a fresh look? Fill out the form below to schedule your
              appointment.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Classic Cuts</h3>
              <p className="mb-4">
                Premium grooming services for the modern gentleman. Experience
                the difference with our skilled barbers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-400">
                  Facebook
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  Instagram
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  Twitter
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-gray-400"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-white hover:text-gray-400"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-white hover:text-gray-400"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white hover:text-gray-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <p className="mb-2">
                01 Vasant Kunj, South Delhi, Delhi 110070
              </p>
              <p className="mb-2">(+91) 1234567890</p>
              <p>info@classiccuts.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
