import Post from '../components/Post'
import usePostStore from '../store/postStore'

export default function Feed() {
  const posts = usePostStore((state) => state.posts)

  return (
    <div className="max-w-xl mx-auto py-8">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}