import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'

export default function Signup() {
  const navigate = useNavigate()
  const login = useAuthStore(state => state.login)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate signup - in a real app, this would make an API call
    login({ username: formData.username })
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto mt-12">
      <div className="bg-surface rounded-2xl shadow-card p-8">
        <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          Create Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="block w-full rounded-lg border-gray-200 bg-gray-50 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="block w-full rounded-lg border-gray-200 bg-gray-50 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="block w-full rounded-lg border-gray-200 bg-gray-50 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-subtle hover:shadow-card transition-all duration-200"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}