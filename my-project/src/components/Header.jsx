import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const publicLinks = [
  { to: '/', label: 'Home' },
];

const unauthenticatedLinks = [
  { to: '/login', label: 'Log In' },
  { to: '/signup', label: 'Sign Up' },
];

const authenticatedLinks = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/profile', label: 'Profile' },
];

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  return { isLoggedIn, setIsLoggedIn };
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isLoggedIn, setIsLoggedIn } = useAuth(); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20); 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allNavLinks = [
    ...publicLinks, 
    ...(isLoggedIn ? authenticatedLinks : unauthenticatedLinks)
  ];

  const isActive = (path) => location.pathname === path;

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 backdrop-blur-sm 
        bg-linear-to-r from-gray-50 via-indigo-100 to-purple-100 ${
        scrolled
          ? 'shadow-xl border-b border-indigo-300'
          : 'shadow-lg' 
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link
            to="/"
            className={`text-3xl font-extrabold tracking-tighter transition-colors duration-300 
              text-indigo-800 hover:text-indigo-900`}
            aria-label="Home"
          >
            MyApp
          </Link>

          <nav className="hidden md:flex items-center gap-1" role="navigation">
            {allNavLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 
                  text-gray-700 hover:text-indigo-700 flex items-center`}
              >
                {label}
                {isActive(to) && (
                  <motion.span
                    layoutId="pill-desktop"
                    className="absolute inset-0 bg-indigo-300 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {isLoggedIn && (
              <motion.button
                key="signout"
                onClick={() => setIsLoggedIn(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-5 px-5 py-2.5 rounded-full bg-red-600 text-white text-sm font-semibold shadow-md hover:bg-red-700 transition-colors"
              >
                Sign Out
              </motion.button>
            )}

          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-full transition-colors duration-300 z-50 
              bg-white text-gray-800 shadow-md hover:bg-gray-100`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`md:hidden absolute left-0 right-0 px-6 pb-6 pt-2 overflow-hidden bg-white shadow-xl`} 
              role="navigation"
            >
              <motion.div 
                className="space-y-2"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.07 }
                  }
                }}
              >
                {allNavLinks.map(({ to, label }, index) => ( 
                  <motion.div key={to} variants={linkVariants} transition={{ duration: 0.2 + index * 0.05 }}> 
                    <Link
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive(to)
                          ? 'bg-indigo-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100' 
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
                
                {isLoggedIn && (
                  <motion.button
                    key="mobile-signout"
                    onClick={() => { setIsLoggedIn(false); setIsOpen(false); }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 px-4 py-3 rounded-xl bg-red-500 text-white text-base font-semibold shadow-lg hover:bg-red-600 transition-colors"
                  >
                    Sign Out
                  </motion.button>
                )}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}