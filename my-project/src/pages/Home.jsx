import { Zap, TrendingUp, CheckCircle, ArrowRight, UserCheck } from 'lucide-react';

// Reusable Feature Component
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 h-full">
    <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* NOTE: Your existing Header/Navbar component will go here.
        This div assumes it follows your header and handles the main content.
      */}
      <main>
        {/* 1. Hero Section: The App's Main Pitch */}
        <section className="py-20 sm:py-32 text-center bg-blue-50 relative overflow-hidden">
          {/* Background Gradient/Decoration (Modern touch) */}
          <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
            {/* Visual element to make the background look dynamic */}
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full">
              <path fill="#3b82f6" fillOpacity="0.1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
              Conquer Your Day with Effortless <span className="text-blue-600 dark:text-blue-400">Task Management</span>.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Taskify is the intelligent platform that helps you prioritize, collaborate, and get more done, whether you're working solo or with a team.
            </p>
            
            {/* Call to Action */}
            <div className="flex justify-center space-x-4">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-xl transform hover:scale-[1.02]"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}