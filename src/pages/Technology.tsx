import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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

const Technology = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const technologies = {
    frontend: [
      { name: "React", description: "Modern JavaScript library for building user interfaces", logo: "⚛️" },
      { name: "Vue.js", description: "Progressive JavaScript framework", logo: "💚" },
      { name: "Angular", description: "Platform for building mobile and desktop web applications", logo: "🔺" },
      { name: "Next.js", description: "React framework for production", logo: "▲" },
      { name: "TypeScript", description: "Typed superset of JavaScript", logo: "📘" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework", logo: "🎨" }
    ],
    backend: [
      { name: "Node.js", description: "JavaScript runtime built on Chrome's V8 engine", logo: "💚" },
      { name: "Express.js", description: "Fast, unopinionated web framework for Node.js", logo: "🚀" },
      { name: "Laravel", description: "PHP framework for web artisans", logo: "🔥" },
      { name: "Python", description: "High-level programming language", logo: "🐍" },
      { name: "MongoDB", description: "NoSQL document database", logo: "🍃" },
      { name: "MySQL", description: "Relational database management system", logo: "🐬" }
    ],
    mobile: [
      { name: "React Native", description: "Build native apps using React", logo: "📱" },
      { name: "Flutter", description: "UI toolkit for building natively compiled applications", logo: "🦋" },
      { name: "Swift", description: "Programming language for iOS development", logo: "🍎" },
      { name: "Kotlin", description: "Modern programming language for Android", logo: "🤖" },
      { name: "Ionic", description: "Cross-platform mobile app development", logo: "⚡" },
      { name: "Xamarin", description: "Microsoft's mobile app development platform", logo: "💜" }
    ],
    cms: [
      { name: "WordPress", description: "Popular content management system", logo: "📝" },
      { name: "Shopify", description: "E-commerce platform", logo: "🛒" },
      { name: "Drupal", description: "Open-source content management framework", logo: "💧" },
      { name: "Magento", description: "E-commerce platform written in PHP", logo: "🔶" },
      { name: "Contentful", description: "Headless content management system", logo: "📄" },
      { name: "Strapi", description: "Open-source headless CMS", logo: "🚀" }
    ],
    design: [
      { name: "Figma", description: "Collaborative design tool", logo: "🎨" },
      { name: "Adobe XD", description: "Vector-based design tool", logo: "🔮" },
      { name: "Sketch", description: "Digital design toolkit", logo: "💎" },
      { name: "Adobe Photoshop", description: "Raster graphics editor", logo: "🖼️" },
      { name: "Adobe Illustrator", description: "Vector graphics editor", logo: "✏️" },
      { name: "InVision", description: "Digital product design platform", logo: "👁️" }
    ],
    cloud: [
      { name: "AWS", description: "Amazon Web Services cloud platform", logo: "☁️" },
      { name: "Google Cloud", description: "Google's cloud computing services", logo: "🌐" },
      { name: "Microsoft Azure", description: "Microsoft's cloud platform", logo: "🔷" },
      { name: "Firebase", description: "Google's app development platform", logo: "🔥" },
      { name: "Vercel", description: "Platform for frontend frameworks", logo: "▲" },
      { name: "Netlify", description: "Platform for web applications", logo: "🌐" }
    ]
  };

  const CategoryCard = ({ title, items, gradient }: { title: string, items: any[], gradient: string }) => (
    <div className="mb-16 animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4 animate-fade-in`}>
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((tech, index) => (
          <Card
            key={index}
            className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up card-hover group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6 relative overflow-hidden">
              <div className="text-center relative z-10">
                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 animate-bounce-gentle">
                  {tech.logo}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                  {tech.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-text-glow gradient-text">Technology</span> Stack
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-stagger-2">
              We use cutting-edge technologies and proven frameworks to build robust, scalable, and innovative digital solutions.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-stagger-3">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black bg-[#E6F1FE] hover:bg-white hover:text-blue-600 px-8 py-3 hover-lift"
                asChild
              >
                <Link to="/portfolio">
                  View Our Work
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

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Frontend Technologies */}
          <CategoryCard
            title="Frontend Development"
            items={technologies.frontend}
            gradient="from-blue-500 to-cyan-500"
          />

          {/* Backend Technologies */}
          <CategoryCard
            title="Backend Development"
            items={technologies.backend}
            gradient="from-green-500 to-emerald-500"
          />

          {/* Mobile Technologies */}
          <CategoryCard
            title="Mobile Development"
            items={technologies.mobile}
            gradient="from-purple-500 to-pink-500"
          />

          {/* CMS Technologies */}
          <CategoryCard
            title="Content Management Systems"
            items={technologies.cms}
            gradient="from-orange-500 to-red-500"
          />

          {/* Design Tools */}
          <CategoryCard
            title="Design & Prototyping"
            items={technologies.design}
            gradient="from-pink-500 to-rose-500"
          />

          {/* Cloud & Deployment */}
          <CategoryCard
            title="Cloud & Deployment"
            items={technologies.cloud}
            gradient="from-indigo-500 to-blue-500"
          />

        </div>
      </section>

      {/* Why We Choose These Technologies */}
      <section className="py-16 bg-gray-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Why We Choose These Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-stagger-2">
              Our technology choices are driven by performance, scalability, maintainability, and industry best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-left hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 animate-float">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Performance</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  We select technologies that ensure fast loading times, smooth user experiences, and optimal performance across all devices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up animate-stagger-2 hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 animate-float animate-stagger-2">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Scalability</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  Our chosen tech stack allows applications to grow with your business, handling increased traffic and functionality seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-right animate-stagger-3 hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 animate-float animate-stagger-4">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Maintainability</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  We prioritize technologies with strong community support, regular updates, and clean code practices for long-term success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;
