import { Inter } from 'next/font/google'
import Navbar from '../components/NavBar'
import Agendamento from '@/components/Agendamento'
import AgendamentoAdmin from '@/components/AgendamentAdmin'
import AgendamentoAdminAgora from '@/components/AgendamentoAdmimAgora'
import NavBarEmpresa from '@/components/NavBarEmpresa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>

      <Agendamento/>

      <AgendamentoAdmin/>

      <AgendamentoAdminAgora/>

    </>
  )
}
