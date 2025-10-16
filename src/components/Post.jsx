import { useState } from 'react'
import { HeartIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import HeartCheckIcon from './icons/HeartCheckIcon'
import usePostStore from '../store/postStore'
import useAuthStore from '../store/authStore'

export default function Post({ post }) {
  const [comment, setComment] = useState('')
  const [isLiked, setIsLiked] = useState(false)
  const { user } = useAuthStore()
  const { likePost, addComment } = usePostStore()

  const handleLike = () => {
    likePost(post.id)
    setIsLiked(true)
  }

  const handleComment = (e) => {
    e.preventDefault()
    if (!comment.trim()) return

    addComment(post.id, {
      username: user.username,
      text: comment,
    })
    setComment('')
  }

  return (
    <div className="bg-surface rounded-xl shadow-card mb-8 overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center p-4 border-b border-gray-100">
        <img
          src={post.author.avatar}
          alt={post.author.username}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-primary-100"
        />
        <span className="ml-3 font-medium text-gray-900">{post.author.username}</span>
      </div>

      {/* Post Image */}
      <div className="relative aspect-square">
        <img
          src={post.imageUrl}
          alt={post.caption}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex space-x-4">
          <button 
            onClick={handleLike} 
            className="focus:outline-none transform active:scale-110 transition-transform"
          >
            {isLiked ? (
              <HeartCheckIcon className="h-7 w-7 text-primary-500" />
            ) : (
              <HeartIcon className="h-7 w-7 text-gray-700 hover:text-primary-500 transition-colors" />
            )}
          </button>
          <button className="focus:outline-none transform active:scale-110 transition-transform">
            <ChatBubbleOvalLeftIcon className="h-7 w-7 text-gray-700 hover:text-primary-500 transition-colors" />
          </button>
        </div>
        <p className="font-semibold mt-3 text-gray-900">{post.likes} likes</p>
        
        {/* Caption */}
        <p className="mt-2 text-gray-800">
          <span className="font-semibold text-gray-900">{post.author.username}</span>{' '}
          {post.caption}
        </p>

        {/* Comments */}
        {post.comments.length > 0 && (
          <div className="mt-3 space-y-2">
            {post.comments.map((comment) => (
              <p key={comment.id} className="text-gray-700 text-sm">
                <span className="font-semibold text-gray-900">{comment.username}</span>{' '}
                {comment.text}
              </p>
            ))}
          </div>
        )}

        {/* Add Comment */}
        <form onSubmit={handleComment} className="mt-4 relative">
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border-gray-200 rounded-full bg-gray-50 pr-12 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 text-sm"
          />
        </form>
      </div>
    </div>
  )
}