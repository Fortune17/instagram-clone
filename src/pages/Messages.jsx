import { useState } from 'react'
import MessageIcon from '../components/icons/MessageIcon'
import useAuthStore from '../store/authStore'

const DUMMY_MESSAGES = [
  {
    id: 1,
    user: {
      username: 'sarah_designs',
      avatar: 'https://source.unsplash.com/random/100x100?portrait=1'
    },
    lastMessage: 'Hey! Love your latest post! 😊',
    timestamp: '2m ago',
    unread: true
  },
  {
    id: 2,
    user: {
      username: 'mike_photographer',
      avatar: 'https://source.unsplash.com/random/100x100?portrait=2'
    },
    lastMessage: 'Thanks for the feedback!',
    timestamp: '1h ago',
    unread: true
  }
]

export default function Messages() {
  const { user } = useAuthStore()
  const [selectedChat, setSelectedChat] = useState(null)

  return (
    <div className="bg-surface rounded-2xl shadow-card overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Messages List */}
        <div className="border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">{user?.username}</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {DUMMY_MESSAGES.map((message) => (
              <button
                key={message.id}
                onClick={() => setSelectedChat(message)}
                className={`w-full p-4 text-left hover:bg-gray-50 flex items-center space-x-3 ${
                  selectedChat?.id === message.id ? 'bg-gray-50' : ''
                }`}
              >
                <img
                  src={message.user.avatar}
                  alt={message.user.username}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {message.user.username}
                    </h3>
                    <span className="text-xs text-gray-500">{message.timestamp}</span>
                  </div>
                  <p className={`text-sm truncate ${
                    message.unread ? 'text-gray-900 font-medium' : 'text-gray-500'
                  }`}>
                    {message.lastMessage}
                  </p>
                </div>
                {message.unread && (
                  <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="col-span-2 h-[calc(100vh-12rem)]">
          {selectedChat ? (
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
                <img
                  src={selectedChat.user.avatar}
                  alt={selectedChat.user.username}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <h3 className="font-medium text-gray-900">
                  {selectedChat.user.username}
                </h3>
              </div>
              <div className="flex-1 p-4 bg-gray-50">
                {/* Messages would go here */}
              </div>
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Message..."
                    className="flex-1 rounded-full border-gray-200 bg-gray-50 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  />
                  <button className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors shadow-subtle hover:shadow-card">
                    Send
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <MessageIcon className="h-16 w-16 mb-4" />
              <p>Select a chat to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}