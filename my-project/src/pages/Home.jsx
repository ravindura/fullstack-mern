import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 px-6 py-20 flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          Welcome to <span className="text-indigo-600">Your App</span>
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
          A simple, clean React project using the latest routing setup.  
          Create an account or log in to get started.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 rounded-lg shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
