import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import img1 from "../../public/assets/Coding workshop-bro.svg";
import img2 from "../../public/assets/10354235_4428859.svg";
import img3 from "../../public/assets/Ecommerce web page-bro.svg";
import img4 from "../../public/assets/wordpress developer.jpg";
import img5 from "../../public/assets/16683373_5785948.jpg";
import img6 from "../../public/assets/digital-marketing-business-concept_714192-6.avif";
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

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Create stunning, responsive websites that perfectly represent your brand and engage your audience.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "Content Management Systems",
        "E-commerce Integration"
      ],
      technologies: ["React", "Vue.js", "HTML5/CSS3", "JavaScript", "Node.js", "PHP"],
      gradient: "from-blue-500 to-cyan-500",
      image: img1
    },
    {
      icon: Smartphone,
      title: "Application Development",
      description: "Build powerful mobile and web applications that streamline your business processes and delight users.",
      features: [
        "Cross-platform Development",
        "Native iOS & Android Apps",
        "Progressive Web Apps",
        "API Integration",
        "Database Design",
        "Cloud Integration"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
      gradient: "from-purple-500 to-pink-500",
      image: img2
    },
    {
      icon: ShoppingBag,
      title: "Shopify Development",
      description: "Complete e-commerce solutions with custom Shopify themes and functionality to boost your online sales.",
      features: [
        "Custom Theme Development",
        "App Integration",
        "Payment Gateway Setup",
        "Inventory Management",
        "Analytics & Reporting",
        "Mobile Optimization"
      ],
      technologies: ["Shopify Liquid", "JavaScript", "CSS3", "Shopify APIs", "Third-party Apps"],
      gradient: "from-green-500 to-emerald-500",
      image: img3
    },
    {
      icon: FileText,
      title: "WordPress Development",
      description: "Custom WordPress solutions including themes, plugins, and complete website development.",
      features: [
        "Custom Theme Development",
        "Plugin Development",
        "WooCommerce Integration",
        "Performance Optimization",
        "Security Hardening",
        "Content Migration"
      ],
      technologies: ["PHP", "WordPress APIs", "MySQL", "JavaScript", "CSS3", "WooCommerce"],
      gradient: "from-orange-500 to-red-500",
      image: img4
    },
    {
      icon: Palette,
      title: "Graphic & UI/UX Design",
      description: "Beautiful designs that enhance user experience and strengthen your brand identity across all platforms.",
      features: [
        "User Interface Design",
        "User Experience Design",
        "Brand Identity Design",
        "Logo & Graphics Design",
        "Wireframing & Prototyping",
        "Design Systems"
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle", "Framer"],
      gradient: "from-pink-500 to-rose-500",
      image: img5
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to increase your online visibility and drive qualified traffic to your business.",
      features: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Content Marketing",
        "Pay-per-Click Advertising",
        "Email Marketing",
        "Analytics & Reporting"
      ],
      technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "SEMrush", "Mailchimp", "Hootsuite"],
      gradient: "from-indigo-500 to-blue-500",
      image: img6
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-stagger-2">
              Comprehensive digital solutions to help your business thrive in the modern digital landscape.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-stagger-3">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black bg-[#E6F1FE] hover:bg-white hover:text-blue-600 px-8 py-3 hover-lift"
                asChild
              >
                <Link to="/technology">
                  Our Technology Stack
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''} animate-fade-in-up animate-stagger-${index + 1}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 animate-pulse-slow hover-glow`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What We Offer:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className={`flex items-center animate-fade-in-left animate-stagger-${featureIndex + 1}`}>
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 animate-bounce-gentle" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies We Use:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover-lift animate-scale-in animate-stagger-${techIndex + 1}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white btn-gradient hover-lift`}
                    asChild
                  >
                    <Link to="/contact">
                      Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-fade-in-${index % 2 === 1 ? 'left' : 'right'}`}>
                  <Card className="border-0 shadow-2xl overflow-hidden card-hover">
                    {/* <img 
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1461749280684-dccba630e2f6' :
                        index === 1 ? '1581091226825-a6a2a5aee158' :
                        index === 2 ? '1487887235947-a955ef187fcc' :
                        index === 3 ? '1498050108023-c5249f4df085' :
                        index === 4 ? '1473091534298-04dcbce3278c' :
                        '1605810230434-7631ac76ec81'
                      }?w=600&h=400&fit=crop`}
                      alt={service.title}
                      className="w-full h-80 object-cover hover-glow transition-all duration-500"
                    /> */}
                    <img src={service.image} alt="iamges" className="w-full object-cover hover-glow transition-all duration-500" />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in animate-text-glow">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in animate-stagger-2">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-stagger-3">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 hover-lift"
              asChild
            >
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-600 px-8 py-3 hover-lift"
              asChild
            >
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
