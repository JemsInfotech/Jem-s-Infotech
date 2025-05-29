import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import p_img1 from "../../public/assets/Portfolio E-commerce Fashion Store.jpg";
import p_img2 from "../../public/assets/Portfolio Restaurant Mobile App.jpg";
import p_img3 from "../../public/assets/Portfolio Corporate Website.webp";
import p_img4 from "../../public/assets/Portfolio Healthcare Dashboard.jpg";
import p_img5 from "../../public/assets/Portfolio Blog & Portfolio Site.jpg";
import p_img6 from "../../public/assets/Portfolio Fitness App UI Design_files.jpg";
import p_img7 from "../../public/assets/Portfolio Real Estate Platform.jpg";
import p_img8 from "../../public/assets/Portfolio Online Learning App.png";
import p_img9 from "../../public/assets/Portfolio Beauty Products Store.jpg";

import {
  Code,
  Smartphone,
  ShoppingBag,
  FileText,
  Palette,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Scroll to top when component mounts
  useState(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const categories = ["All", "Web Development", "Mobile Apps", "E-commerce", "UI/UX Design", "WordPress"];

  const projects = [
    {
      id: 1,
      title: "E-commerce Fashion Store",
      category: "E-commerce",
      description: "Modern Shopify store with custom theme and advanced filtering features.",
      image: p_img1,
      technologies: ["Shopify", "JavaScript", "CSS3", "Liquid"],
      link: "#"
    },
    {
      id: 2,
      title: "Restaurant Mobile App",
      category: "Mobile Apps",
      description: "React Native app for food ordering with real-time tracking.",
      image: p_img2,
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      link: "#"
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "Web Development",
      description: "Responsive corporate website built with React and modern design.",
      image: p_img3,
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 4,
      title: "Healthcare Dashboard",
      category: "Web Development",
      description: "Administrative dashboard for healthcare management system.",
      image: p_img4,
      technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
      link: "#"
    },
    {
      id: 5,
      title: "Blog & Portfolio Site",
      category: "WordPress",
      description: "Custom WordPress theme for creative professional portfolio.",
      image: p_img5,
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
      link: "#"
    },
    {
      id: 6,
      title: "Fitness App UI Design",
      category: "UI/UX Design",
      description: "Modern mobile app design for fitness tracking application.",
      image: p_img6,
      technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
      link: "#"
    },
    {
      id: 7,
      title: "Real Estate Platform",
      category: "Web Development",
      description: "Full-stack real estate platform with property search and listings.",
      image: p_img7,
      technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
      link: "#"
    },
    {
      id: 8,
      title: "Online Learning App",
      category: "Mobile Apps",
      description: "Educational mobile app with course management and progress tracking.",
      image: p_img8,
      technologies: ["Flutter", "Firebase", "Dart", "Node.js"],
      link: "#"
    },
    {
      id: 9,
      title: "Beauty Products Store",
      category: "E-commerce",
      description: "Elegant Shopify store for beauty and cosmetics products.",
      image: p_img9,
      technologies: ["Shopify", "Liquid", "JavaScript", "SCSS"],
      link: "#"
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-stagger-2">
              Explore our latest projects and see how we've helped businesses transform their digital presence.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-stagger-3">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black bg-[#E6F1FE] hover:bg-white hover:text-blue-600 px-8 py-3 hover-lift"
                asChild
              >
                <Link to="/">
                  Back to Home
                </Link>
              </Button>
              <Button
                size="lg"
                className="btn-gradient text-white  hover:bg-gray-100 px-8 py-3 hover-lift"
                asChild
              >
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 animate-fade-in-up animate-stagger-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`${activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "text-gray-600 hover:text-blue-600"
                  } transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group animate-fade-in-up card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300"
                        onClick={() => window.open(project.link, '_self')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-blue-200">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full transition-all duration-300 group-hover:bg-gray-200 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-gray-500 text-lg">No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-scale-in hover-glow" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2 animate-bounce-gentle">100+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div className="animate-scale-in hover-glow" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2 animate-bounce-gentle">50+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="animate-scale-in hover-glow" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2 animate-bounce-gentle">12+</div>
              <div className="text-blue-100">Team Member</div>
            </div>
            <div className="animate-scale-in hover-glow" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold mb-2 animate-bounce-gentle">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up animate-stagger-2">
            Let's work together to create something amazing. Contact us today to discuss your project requirements.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in animate-stagger-3"
            asChild
          >
            <a href="/contact">
              Start Your Project
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
