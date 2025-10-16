import { Link } from 'react-router-dom'
import { HomeIcon, PlusCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import useAuthStore from '../store/authStore'
import MessageIcon from './icons/MessageIcon'

export default function Navbar() {
  const { isAuthenticated, logout } = useAuthStore()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-surface shadow-subtle backdrop-blur-sm bg-white/80">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Instagram Clone
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-6">
              <Link to="/" className="p-2 text-gray-700 hover:text-primary-500 transition-colors">
                <HomeIcon className="h-6 w-6" />
              </Link>
              <Link to="/messages" className="p-2 text-gray-700 hover:text-primary-500 transition-colors relative group">
                <MessageIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
                <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 right-0 top-full mt-1 whitespace-nowrap">
                  Messages
                </span>
              </Link>
              <Link to="/create" className="p-2 text-gray-700 hover:text-primary-500 transition-colors">
                <PlusCircleIcon className="h-6 w-6" />
              </Link>
              <Link to="/profile" className="p-2 text-gray-700 hover:text-primary-500 transition-colors">
                <UserCircleIcon className="h-6 w-6" />
              </Link>
              <button
                onClick={logout}
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              <Link
                to="/login"
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="text-sm font-medium bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors shadow-subtle hover:shadow-card"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}