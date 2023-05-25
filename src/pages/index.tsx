import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/NavBar'
import AgendamentoAdmin from '@/components/AgendamentAdmin'
import Agendamento from '@/components/Agendamento'
import AgendamentoAdminAgora from '@/components/AgendamentoAdmimAgora'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>

      <AgendamentoAdminAgora/>

      <AgendamentoAdmin/>

      <Agendamento/>
    </>
  )
}
