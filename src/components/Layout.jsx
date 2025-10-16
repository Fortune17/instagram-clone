import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-4xl pt-20 px-4 pb-8">
        <div className="max-w-full mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}