import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Scroll to top when component mounts
  useState(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "jemsinfotech7@gmail.com",
      link: "mailto:hello@jemsinfotech.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 90164 02930",
      link: "tel:+919016402930"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Coming Soon...",
      link: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-stagger-2">
              Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <Button
              size="lg"
              variant="outline"
              className="mt-9 border-white text-black bg-[#E6F1FE] hover:bg-white hover:text-blue-600 px-8 py-3 hover-lift"
              onClick={() => window.open('https://wa.me/919016402930', '_blank')}
              asChild
            >
              <Link to="/portfolio">
                Chat now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <Card className="border-0 shadow-xl animate-fade-in-left hover-lift">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-fade-in">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:scale-105"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in"
                    style={{ animationDelay: '0.5s' }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="animate-fade-in-right">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-fade-in">Contact Information</h2>
              <p className="text-gray-600 mb-8 animate-fade-in-up animate-stagger-2">
                We're here to help you with your digital transformation journey. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1 card-hover group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 transition-transform duration-300 group-hover:scale-110 animate-float">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{info.title}</h3>
                          {info.link !== "#" ? (
                            <a
                              href={info.link}
                              className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{info.details}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* WhatsApp Button */}
              <Card className="mt-8 border-0 shadow-lg bg-gradient-to-r from-green-500 to-green-600 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-scale-in animate-stagger-5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 animate-bounce-gentle">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold">WhatsApp Chat</h3>
                        <p className="text-green-100">Quick response guaranteed!</p>
                      </div>
                    </div>
                    <Button
                      className="bg-white text-green-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('https://wa.me/919016402930', '_blank')}
                    >
                      Chat Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Find Us</h2>
            <p className="text-gray-600 animate-fade-in-up animate-stagger-2">Coming Soon...</p>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-scale-in animate-stagger-3">
            <div className="h-96 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-bounce-gentle" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">Google Maps integration would go here <br />Coming Soon...</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Frequently Asked Questions</h2>
            <p className="text-gray-600 animate-fade-in-up animate-stagger-2">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-hover group animate-fade-in-left">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">How long does a typical project take?</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Project timelines vary based on complexity, but most websites take 4-8 weeks, while mobile apps can take 8-16 weeks.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-hover group animate-fade-in-right">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Do you provide ongoing support?</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Yes! We offer comprehensive support and maintenance packages to keep your digital solutions running smoothly.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-hover group animate-fade-in-left animate-stagger-3">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">What's included in your web development service?</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Our web development includes responsive design, SEO optimization, content management, and performance optimization.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-hover group animate-fade-in-right animate-stagger-4">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Can you work with our existing brand guidelines?</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Absolutely! We can work with your existing brand guidelines or help create new ones that align with your vision.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;