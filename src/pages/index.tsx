import { Inter } from 'next/font/google'
import Navbar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
    </>
  )
}
