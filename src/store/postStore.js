import { create } from 'zustand'

// Sample data for posts
const initialPosts = [
  {
    id: 1,
    imageUrl: 'https://source.unsplash.com/random/800x800?nature',
    caption: 'Beautiful day! 🌞',
    likes: 42,
    author: {
      username: 'nature_lover',
      avatar: 'https://source.unsplash.com/random/100x100?face',
    },
    comments: [
      {
        id: 1,
        username: 'user123',
        text: 'Amazing shot! 📸',
      },
    ],
    createdAt: '2025-10-16T10:00:00Z',
  },
  {
    id: 2,
    imageUrl: 'https://source.unsplash.com/random/800x800?travel',
    caption: 'Exploring new places! ✈️',
    likes: 28,
    author: {
      username: 'wanderlust',
      avatar: 'https://source.unsplash.com/random/100x100?portrait',
    },
    comments: [],
    createdAt: '2025-10-16T09:30:00Z',
  },
]

const usePostStore = create((set) => ({
  posts: initialPosts,
  addPost: (post) =>
    set((state) => ({
      posts: [{ id: state.posts.length + 1, ...post }, ...state.posts],
    })),
  likePost: (postId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      ),
    })),
  addComment: (postId, comment) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { id: post.comments.length + 1, ...comment },
              ],
            }
          : post
      ),
    })),
}))

export default usePostStore