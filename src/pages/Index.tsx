
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
// import aboutimg1 from "../../public/assets/about img 1 ChatGPT Image May 27, 2025, 02_39_57 PM.png";
import aboutimg1 from "../../public/assets/about img 3 ChatGPT Image May 27, 2025, 06_09_17 PM.png";
import {
  Code,
  Smartphone,
  ShoppingBag,
  FileText,
  Palette,
  TrendingUp,
  Search,
  Wrench,
  Rocket,
  Shield,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites built with modern technologies and responsive design.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Application Development",
      description: "Mobile and web applications tailored to your business needs.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: ShoppingBag,
      title: "Shopify Development",
      description: "Complete e-commerce solutions with Shopify customization.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins for your unique requirements.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "Graphic & UI/UX Design",
      description: "Beautiful designs that enhance user experience and brand identity.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence.",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const steps = [
    {
      icon: Search,
      title: "Requirement Analysis",
      description: "We understand your needs and analyze project requirements thoroughly."
    },
    {
      icon: Palette,
      title: "Design & Development",
      description: "Creating beautiful designs and developing robust solutions."
    },
    {
      icon: Rocket,
      title: "Testing & Deployment",
      description: "Rigorous testing followed by smooth deployment to production."
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep everything running smoothly."
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      feedback: "Exceptional work! They delivered exactly what we needed and more. Highly recommended!",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      rating: 5,
      feedback: "Professional team with great communication. Our website looks amazing and works perfectly.",
      avatar: "MC"
    },
    {
      name: "Emily Davis",
      rating: 5,
      feedback: "Outstanding service from start to finish. They transformed our digital presence completely.",
      avatar: "ED"
    },
    {
      name: "David Wilson",
      rating: 5,
      feedback: "Top-notch quality and timely delivery. Will definitely work with them again!",
      avatar: "DW"
    }
  ];

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className=" text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              {/* We Build Digital Solutions  */}

              Wellcome to<span className="cust-font bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient"> Jem's Infotech </span>

              <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 mt-3 animate-fade-in-up">
                <span className=" bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient"> That Matter </span>We Build your Journey
              </div>

            </h1>
            <p className="hero_text text-xl md:text-2xl text-gray-600 mb-8 max-w-6xl mx-auto animate-fade-in-up animate-stagger-2">
              {/* From Websites to Branding, We Make Your Vision Real. */}
              We're a team of passionate developers, designers, and thinkers who are dedicated to delivering high-quality digital solutions to our clients. Our expertise spans across a wide range of technologies and platforms, ensuring that our clients receive the best possible solutions that meet their needs.
              Your website is your first impression. We make sure it’s unforgettable, high-converting, and built to dominate.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg btn-gradient animate-fade-in-up animate-stagger-3 hover-lift"
              asChild
            >
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            {/* <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg btn-gradient animate-fade-in-up animate-stagger-3 hover-lift"
              asChild
            >
              <Link to="/about">
                Our Story <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button> */}

          </div>
        </div>
      </section>

      {/* About Short Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {/* About Jem's Infotech */}
                The Story of Jem's Infotech
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {/* We are a passionate team of developers, designers, and digital strategists dedicated to creating exceptional digital experiences. */}
                At Jem's Infotech, we specialize in crafting powerful and scalable web and mobile applications tailored to meet your business needs. Our team of expert developers turns ideas into fully functional digital solutions that drive results and enhance user experiences.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {/* With years of expertise in web development, mobile apps, and digital marketing, we help businesses transform their ideas into reality. */}
                Whether you need a custom website, a dynamic web app, or a cross-platform mobile application, we focus on delivering clean, efficient, and high-performing solutions that help your business grow in the digital world.We’re not just building software — we’re building digital experiences that are secure, fast, and future-ready.
              </p>
              <Button variant="outline" size="lg" className="hover-lift" asChild>
                <Link to="/about">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-fade-in-right">
              <img
                src={aboutimg1}
                alt="Team working on digital solutions"
                className="rounded-2xl shadow-2xl hover-glow animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto animate-fade-in animate-stagger-2">
              {/* We offer comprehensive digital solutions to help your business thrive in the digital world. */}
              We offer comprehensive digital solutions to help your business thrive in the digital world.
              Unlock the power of innovation with our expert web and app development services. From sleek designs to robust functionality, we create digital solutions that drive success and elevate your brand. Let's build something extraordinary together!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`group card-hover border-0 shadow-lg animate-fade-in-up animate-stagger-${index + 1}`}>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 animate-pulse-slow`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 group-hover:translate-x-2 transition-transform duration-300" asChild>
                    <Link to="/services">
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">How does it work?</h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto animate-fade-in animate-stagger-2">
              {/* Our proven process ensures successful project delivery and client satisfaction. */}
              Our process is simple and efficient. we understand your needs, design a tailored solution, develop it with precision, and deliver with full support—ensuring smooth implementation and long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className={`text-center group animate-scale-in animate-stagger-${index + 1}`}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 animate-bounce-gentle hover-glow">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Jem's Infotech?? */}
      <section className="py-16 bg-gray-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Why Choose Jem's Infotech ??
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto animate-fade-in-up animate-stagger-2">
              At Jem’s Infotech, we turn ideas into powerful digital experiences through smart development, clean design, and a client-first approach. With a focus on quality, performance, and innovation, we deliver solutions that truly make an impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-left hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 animate-float">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Fast Delivery</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  We deliver on time without compromising quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up animate-stagger-2 hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 animate-float animate-stagger-2">
                  <span className="text-3xl">🥇</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Trusted Experts</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  Certified professionals and experienced developers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-right animate-stagger-3 hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 animate-float animate-stagger-4">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Custom Solutions</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  Every service is tailored exactly to your business needs.
                </p>
              </CardContent>
            </Card>
          </div>
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

      {/* Reviews Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto animate-fade-in animate-stagger-2">
              {/* Don't just take our word for it - hear from our satisfied clients. */}
              Don't just take our word for it - hear from our satisfied clients. Our clients' success speaks for itself. Read what our users have to say about their experience with our services and how we've helped them achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className={`bg-white/80 backdrop-blur-sm border-0 shadow-lg hover-lift card-hover animate-fade-in-up animate-stagger-${index + 1}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 animate-pulse-slow`}>
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 text-yellow-400 fill-current animate-bounce-gentle animate-stagger-${i + 1}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{review.feedback}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in animate-text-glow">
            Let's Build Something Together!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in animate-stagger-2">
            Ready to transform your digital presence? Contact us today and let's discuss your project.
            {/* At Jem's Infotech, collaboration is at the heart of everything we do. */}
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold hover-lift animate-fade-in animate-stagger-3"
            onClick={() => window.open('https://wa.me/919016402930', '_blank')}
            asChild
          >
            <Link to="/contact">
              Chat now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section >

      <Footer />
    </div >
  );
};

export default Index;
