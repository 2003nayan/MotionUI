import ModernFooter from "@/app/components/ModernFooter";
import ModernNavbar from "@/app/components/ModernNavbar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Nayan Katiyara",
      role: "Founder & Lead Developer",
      image: "/images/team/nayan.jpg",
      bio: "Full-stack developer with a passion for creating beautiful UI components and seamless user experiences.",
    },
    {
      name: "Alex Morgan",
      role: "UI/UX Designer",
      image: "/images/team/alex.jpg",
      bio: "Designer focused on creating intuitive interfaces that balance aesthetics with functionality.",
    },
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      image: "/images/team/sarah.jpg",
      bio: "React specialist with expertise in animation and interactive components.",
    },
  ];

  return (
    <>
      <ModernNavbar />
      <section className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl mb-6">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">MotionUI</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A modern UI component library built with Next.js and Tailwind CSS, designed to help developers create beautiful interfaces quickly.
            </p>
          </div>

          {/* Our Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
              MotionUI was born out of a simple need: to create high-quality, reusable UI components that work seamlessly with Next.js and Tailwind CSS. What started as a personal collection of components quickly evolved into a comprehensive library.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to empower developers to build beautiful, responsive, and accessible web applications without reinventing the wheel. We believe that great design should be accessible to everyone, regardless of their design background.
              </p>
              <p className="text-gray-600">
                Today, MotionUI is used by developers around the world to create everything from personal projects to enterprise applications.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/NextBlend_main_page.png" 
                alt="MotionUI Components" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600">
                  We build components with performance in mind, ensuring they're lightweight and optimized for production.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  We're committed to creating components that are accessible to everyone, following WCAG guidelines.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customization</h3>
                <p className="text-gray-600">
                  Our components are designed to be easily customized to match your brand and design requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meet the Developer</h2>
            <div className="flex justify-center">
              <div className="bg-transperant rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 max-w-md">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <img 
                    src="/images/Linkedin_Profile.png" 
                    alt="Nayan Katiyara"
                    className="object-contain w-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Nayan Katiyara</h3>
                  <p className="text-indigo-600 mb-3">Founder & Developer</p>
                  <p className="text-gray-600">
                    Full-stack developer with a passion for creating beautiful UI components and seamless user experiences. MotionUI is my personal project to help developers build beautiful interfaces quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to build something amazing?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Start using MotionUI today and transform your development workflow with our beautiful, responsive components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/components">
                <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  Explore Components
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/pricing">
                <button className="px-6 py-3 bg-indigo-700 text-white font-medium rounded-lg hover:bg-indigo-800 transition-colors">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ModernFooter />
    </>
  );
};

export default AboutPage;
