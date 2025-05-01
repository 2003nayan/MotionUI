import Navbar from "@/app/components/Navbar";
import ModernFooter from "@/app/components/ModernFooter";
import ModernNavbar from "@/app/components/ModernNavbar";

function page() {
  return (
    <>
      <ModernNavbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Documentation
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-blue-700">
              This documentation page is currently under development.
            </p>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            We're working hard to create comprehensive documentation for our
            components and features. Please check back soon for updates!
          </p>
          <div className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Coming Soon
          </div>
        </div>
      </div>
      <ModernFooter />
    </>
  );
}

export default page;
