import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [roofTypesOpen, setRoofTypesOpen] = useState(false);
  const location = useLocation();

  const roofTypes = [
    { name: 'Shingle', href: '/roof-types/shingle' },
    { name: 'Tile', href: '/roof-types/tile' },
    { name: 'Metal', href: '/roof-types/metal' },
    { name: 'Flat', href: '/roof-types/flat' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Residential', href: '/residential-roofing' },
    { name: 'Commercial', href: '/commercial-roofing' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="w-full bg-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-xl font-bold text-white">All Phase Construction USA</span>
              <span className="text-[10px] text-neutral-500">FL Licenses: CGC1526236 • CCC1331464</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'text-red-500 bg-neutral-900'
                    : 'text-white hover:bg-neutral-900'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="relative">
              <button
                onMouseEnter={() => setRoofTypesOpen(true)}
                onMouseLeave={() => setRoofTypesOpen(false)}
                className="px-3 py-2 text-sm font-medium text-white rounded-lg hover:bg-neutral-900 transition-colors duration-200 flex items-center gap-1"
              >
                Roof Types
                <ChevronDown className="w-4 h-4" />
              </button>

              {roofTypesOpen && (
                <div
                  onMouseEnter={() => setRoofTypesOpen(true)}
                  onMouseLeave={() => setRoofTypesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-48 bg-neutral-900 rounded-lg shadow-xl py-2 border border-neutral-800 z-50"
                >
                  {roofTypes.map((type) => (
                    <Link
                      key={type.name}
                      to={type.href}
                      className="block px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors duration-200"
                    >
                      {type.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(3).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'text-red-500 bg-neutral-900'
                    : 'text-white hover:bg-neutral-900'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/roof-cost-calculator"
              className="ml-4 px-5 py-2 border border-red-600 text-red-500 text-sm font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200"
            >
              Roof Cost Calculator
            </Link>

            <Link
              to="/contact"
              className="ml-2 px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-500 transition-colors duration-200"
            >
              Request Roof Assessment
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-neutral-950 border-t border-neutral-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'text-red-500 bg-neutral-900'
                    : 'text-white hover:bg-neutral-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div>
              <button
                onClick={() => setRoofTypesOpen(!roofTypesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-white hover:bg-neutral-900 rounded-lg transition-colors duration-200"
              >
                Roof Types
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${roofTypesOpen ? 'rotate-180' : ''}`} />
              </button>
              {roofTypesOpen && (
                <div className="mt-1 ml-4 space-y-1">
                  {roofTypes.map((type) => (
                    <Link
                      key={type.name}
                      to={type.href}
                      className="block px-3 py-2 text-sm font-medium text-white hover:bg-neutral-900 rounded-lg transition-colors duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        setRoofTypesOpen(false);
                      }}
                    >
                      {type.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/roof-cost-calculator"
              className="block mt-4 px-5 py-2 border border-red-600 text-red-500 text-sm font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              Roof Cost Calculator
            </Link>

            <Link
              to="/contact"
              className="block px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-500 transition-colors duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              Request Roof Assessment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
