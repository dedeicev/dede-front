import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <h1>Olá eu sou DEDE</h1>
    </>
  )
}
