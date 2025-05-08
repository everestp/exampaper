import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu,
  Search,
  User,
  BookOpen,
  Home,
  PenTool,
  MessageSquare,
  Edit
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="hidden md:flex">
              <span className="font-bold text-xl text-study-700">exampaper</span>
              <span className="text-xl text-muted-foreground">.org</span>
            </div>
            <div className="md:hidden">
              <span className="font-bold text-sm text-study-700">exampaper</span>
              <span className="text-sm text-muted-foreground">.org</span>
            </div>
          </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search papers and notes..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <Link to="/">
              <Button variant="ghost" className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300">
                <Home className="h-5 w-5 mr-1" />
                Home
              </Button>
            </Link>

            <Link to="/books">
              <Button variant="ghost" className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300">
                <BookOpen className="h-5 w-5 mr-1" />
                Libary
              </Button>
            </Link>

            <Link to="/mcq">
              <Button variant="ghost" className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300">
                <PenTool className="h-5 w-5 mr-1" />
                Practice MCQs
              </Button>
            </Link>

            <Link to="/discussions">
              <Button variant="ghost" className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300">
                <MessageSquare className="h-5 w-5 mr-1" />
                Discussions
              </Button>
            </Link>

            <Link to="/profile">
              <Button variant="ghost" className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300">
                <User className="h-5 w-5 mr-1" />
                Profile
              </Button>
            </Link>

            <Link to="/login">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 pb-3 pt-2 animate-fade-in">
          <div className="px-4 space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search papers and notes..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300">
              <div className="flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Home
              </div>
            </Link>
            
            <Link to="/books" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Libary
              </div>
            </Link>
            
            <Link to="/mcq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300">
              <div className="flex items-center">
                <PenTool className="h-5 w-5 mr-2" />
                Practice MCQs
              </div>
            </Link>
            
            <Link to="/discussions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Discussions
              </div>
            </Link>
            
            <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Profile
              </div>
            </Link>
            
            <div className="pt-2">
              <Link to="/login">
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
