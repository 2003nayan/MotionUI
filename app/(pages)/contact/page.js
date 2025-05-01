import ModernFooter from "@/app/components/ModernFooter";
import ModernNavbar from "@/app/components/ModernNavbar";
import Link from "next/link";
import { Mail, Github, Linkedin, Twitter, MapPin, Phone, MessageCircle, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <ModernNavbar />
      <section className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl mb-6">
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about MotionUI or need custom development services? I'm here to help.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <a href="mailto:nayankatiyara03@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                      nayankatiyara03@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 9561884240</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600">Pune, India</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/2003nayan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/nayankatiyara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com/NayanKatiyara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-indigo-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Let's Connect</h3>
                  <p className="text-gray-600">I typically respond within 24 hours during business days.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center space-x-3 text-sm text-gray-700">
                    <Clock className="h-4 w-4 text-indigo-500" />
                    <p>Available: Mon-Fri, 9am-6pm IST</p>
                  </div>
                </div>
                <div className="bg-indigo-600 text-white rounded-lg p-4 text-center">
                  <p className="font-medium">Looking forward to hearing from you!</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to collaborate?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Whether you need custom components, a complete website, or have questions about MotionUI, I'm here to help you build something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:nayankatiyara03@gmail.com">
                <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  Send an Email
                  <Mail size={18} />
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

export default ContactPage;
