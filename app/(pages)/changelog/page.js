// pages/changelog.js
import ModernFooter from "@/app/components/ModernFooter";
import ModernNavbar from "@/app/components/ModernNavbar";
import Navbar from "@/app/components/Navbar";

const ChangelogPage = () => {
  return (
    <>
      <ModernNavbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Changelog
          </h1>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
            <p className="text-amber-700">
              This changelog page is currently under development.
            </p>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            We're working hard to document all the updates and improvements to our components.
            Please check back soon to see a detailed history of our changes!
          </p>
          <div className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Coming Soon
          </div>
        </div>
      </div>
      <ModernFooter />
    </>
  );
};

export default ChangelogPage;
