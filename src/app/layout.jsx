import { Manrope } from 'next/font/google'
import './globals.css'
import Footer from '@/features/Footer'
import { Toaster } from 'react-hot-toast'

const font = Manrope({ subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '800']
})

export const metadata = {
  title: 'CRUD - Next.js & MongoDB',
  description: 'CRUD con Next js y MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      <body className={font.className}>
        <div className="w-full min-h-screen flex flex-col">
          <div className='px-4 md:px-1 flex-1 flex flex-col justify-center pt-10'>
            <div className='mx-auto text-center'>
              <h1 className="text-3xl font-bold text-primary mb-2">Task Manager</h1>
              <p>Manage your tasks with ease.</p>
            </div>
            <br />
            <div className="flex-1">
              {children}
            </div>
          </div>
          <Footer />
          <Toaster position='top-center' reverseOrder />
        </div>
      </body>
    </html>
  )
}
