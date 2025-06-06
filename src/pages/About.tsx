import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Award, Clock, Globe } from "lucide-react";

// import {
//   Code,
//   Smartphone,
//   ShoppingBag,
//   FileText,
//   Palette,
//   TrendingUp,
//   ArrowRight,
//   CheckCircle
// } from "lucide-react";

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

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  const team = [
    {
      name: "Vatsal Sojitra",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "At Jem’s Infotech, we craft intelligent, real-time web applications using the powerful MERN stack — turning bold ideas into seamless digital experiences. Our focus is on high performance, clean and modern design, and delivering intuitive user journeys that drive real results."
    },
    {
      name: "Shivani Patel",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1d9?w=300&h=300&fit=crop&crop=face",
      bio: "At Jem’s Infotech, we build intelligent, high-performance web apps using the MERN stack. Our focus is on clean design, seamless user experiences, and delivering real-world results through modern, scalable digital solutions. We help businesses innovate faster, streamline operations, and stand out in a competitive digital landscape."
    }
    // {
    //   name: "Michael Chen",
    //   role: "UI/UX Designer",
    //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    //   bio: "Creating beautiful and intuitive designs that users love."
    // },
    // {
    //   name: "Emily Davis",
    //   role: "Marketing Specialist",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    //   bio: "Helping businesses grow their online presence strategically."
    // }
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

  const stats = [
    { icon: Users, number: "50+", label: "Happy Clients" },
    { icon: Award, number: "100+", label: "Projects Completed" },
    { icon: Clock, number: "1.5+", label: "Years Experience" },
    { icon: Globe, number: "12+", label: "Team Member" }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Company Founded",
      description: "Started with a vision to create exceptional digital experiences."
    },
    {
      year: "2024 May, First",
      title: "First Major Project",
      description: "Successfully delivered our first enterprise-level application."
    },
    {
      year: "2024 End",
      title: "Team Expansion",
      description: "Grew our team to include specialists in design and marketing."
    },
    {
      year: "2025 Start",
      title: "New Projects",
      description: "Proud to have delivered a wide range of successful projects, consistently exceeding client expectations and driving impactful digital outcomes."
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
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent gradient-text">Jem's Infotech</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-6xl mx-auto animate-fade-in-up animate-stagger-2">
              {/* We're a team of passionate professionals dedicated to creating digital solutions that drive business growth and enhance user experiences. */}
              At Jem's Infotech, we specialize in crafting powerful and scalable web and mobile applications tailored to meet your business needs. Our team of expert developers turns ideas into fully functional digital solutions that drive results and enhance user experiences. Whether you need a custom website, a dynamic web app, or a cross-platform mobile application, we focus on delivering clean, efficient, and high-performing solutions that help your business grow in the digital world.We’re not just building software — we’re building digital experiences that are secure, fast, and future-ready.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-stagger-3">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black bg-[#E6F1FE] hover:bg-white hover:text-blue-600 px-8 py-3 hover-lift"
                asChild
              >
                <Link to="/services">
                  View Our Service
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

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 animate-fade-in-left hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 animate-float">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg">
                  {/* To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their audiences. */}
                  At Jem’s Infotech, our mission is to drive innovation through technology and creativity by providing high-quality digital solutions tailored to the unique needs of every business. We believe that every brand has a story to tell — and our job is to bring that story to life through powerful websites, intuitive applications, stunning UI/UX designs, and result-oriented digital marketing strategies.
                  {/* <br />We aim to be more than just a service provider — we are your long-term technology partner, dedicated to supporting your journey from idea to execution. Our team is driven by a passion for excellence, a love for design, and a deep understanding of modern development practices. Whether it’s a startup looking for identity or an established brand seeking digital transformation, we provide scalable and effective solutions that generate real-world results. */}
                  <br />By combining innovation, integrity, and technical expertise, we help our clients build a strong online presence, improve customer engagement, and grow their business sustainably. At Jem’s Infotech, your success is our mission — and we build every pixel with purpose.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 animate-fade-in-right animate-stagger-2 hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 animate-float animate-stagger-2">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">
                  {/* To be the leading digital transformation partner, recognized for our innovation, quality, and commitment to client success in every project we undertake. */}
                  Our vision at Jem’s Infotech is to become a globally recognized leader in digital innovation, empowering businesses to thrive through transformative technology. We envision a future where every idea, no matter how small, can be brought to life with creativity, code, and purpose.
                  <br />We strive to build a digital ecosystem where user-centric design, seamless development, and strategic marketing come together to deliver extraordinary experiences. By continuously embracing change, advancing our skills, and adopting cutting-edge technologies, we aim to help brands not only keep up with the digital world — but lead it.
                  <br />Our ultimate goal is to inspire trust, build long-lasting partnerships, and make a meaningful impact on the success of our clients through solutions that are beautiful, functional, and future-ready.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white animate-scale-in hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animate-stagger-2">
              Our talented team brings together diverse skills and expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up card-hover group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3 group-hover:text-purple-600 transition-colors duration-300">{member.role}</p>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

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

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animate-stagger-2">
              A timeline of our growth and milestones over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-scale-in"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center animate-fade-in-up ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-hover group">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2 group-hover:text-purple-600 transition-colors duration-300">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg animate-pulse-slow"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
