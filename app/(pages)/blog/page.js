import ModernFooter from "@/app/components/ModernFooter";
import ModernNavbar from "@/app/components/ModernNavbar";

function BlogPage() {
  return (
    <>
      <ModernNavbar />
      <section className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights about UI
              components and web development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Post 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src="/tabs.png"
                  alt="Building Responsive Layouts"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                  Design
                </span>
                <h2 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Building Responsive Layouts with Tailwind CSS
                </h2>
                <p className="mt-3 text-gray-600 line-clamp-3">
                  Learn how to create beautiful responsive layouts using
                  Tailwind CSS utility classes that adapt to any screen size.
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 overflow-hidden">
                    <img
                      src="/images/A.png"
                      alt="Author"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Alex Morgan
                    </p>
                    <p className="text-xs text-gray-500">
                      May 15, 2023 · 8 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src="/tabs.png"
                  alt="Next.js Performance Tips"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                  Development
                </span>
                <h2 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  10 Performance Tips for Next.js Applications
                </h2>
                <p className="mt-3 text-gray-600 line-clamp-3">
                  Optimize your Next.js applications with these proven
                  performance techniques that will make your sites blazing fast.
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 overflow-hidden">
                    <img
                      src="/images/S.png"
                      alt="Author"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Sarah Johnson
                    </p>
                    <p className="text-xs text-gray-500">
                      April 28, 2023 · 12 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src="/tabs.png"
                  alt="Component Design Systems"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                  UI/UX
                </span>
                <h2 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Creating a Robust Component Design System
                </h2>
                <p className="mt-3 text-gray-600 line-clamp-3">
                  Discover how to build and maintain a scalable component design
                  system that improves development workflow and consistency.
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 overflow-hidden">
                    <img
                      src="/images/M.png"
                      alt="Author"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Michael Chen
                    </p>
                    <p className="text-xs text-gray-500">
                      March 12, 2023 · 10 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium rounded-lg hover:from-indigo-500 hover:to-violet-500 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg">
              More Coming Soon
            </button>
          </div>
        </div>
      </section>
      <ModernFooter />
    </>
  );
}

export default BlogPage;
