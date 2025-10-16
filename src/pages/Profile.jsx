import useAuthStore from '../store/authStore'
import usePostStore from '../store/postStore'
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import HeartCheckIcon from '../components/icons/HeartCheckIcon'

export default function Profile() {
  const { user } = useAuthStore()
  const posts = usePostStore((state) => state.posts)
  const userPosts = posts.filter((post) => post.author.username === user?.username)

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Profile Header */}
      <div className="bg-surface rounded-2xl shadow-card p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src="https://source.unsplash.com/random/100x100?portrait"
            alt={user?.username}
            className="w-32 h-32 rounded-full object-cover ring-4 ring-primary-100 shadow-subtle"
          />
          <div className="md:ml-12 mt-6 md:mt-0 text-center md:text-left">
            <h1 className="text-3xl font-light mb-4 text-gray-900">{user?.username}</h1>
            <div className="flex space-x-12 justify-center md:justify-start">
              <div className="text-center">
                <span className="block text-2xl font-semibold text-gray-900">{userPosts.length}</span>
                <span className="text-gray-600">posts</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-semibold text-gray-900">0</span>
                <span className="text-gray-600">followers</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-semibold text-gray-900">0</span>
                <span className="text-gray-600">following</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {userPosts.map((post) => (
          <div key={post.id} className="aspect-square group relative overflow-hidden rounded-xl shadow-card">
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex space-x-6 text-white">
                <div className="flex items-center">
                  <HeartCheckIcon className="h-6 w-6 mr-2 text-white" />
                  <span className="font-semibold">{post.likes}</span>
                </div>
                <div className="flex items-center">
                  <ChatBubbleOvalLeftIcon className="h-6 w-6 mr-2" />
                  <span className="font-semibold">{post.comments.length}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}