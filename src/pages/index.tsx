import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
      <h1>Hola eu sou DEDE</h1>
    </>
  )
}
