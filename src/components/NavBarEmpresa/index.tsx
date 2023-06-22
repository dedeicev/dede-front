import Link from 'next/link'
import React from 'react'
import { Avatar } from '@chakra-ui/react'

export default function NavBarEmpresa() {
    return (
        <>
            <nav className="bg-[#CE0303] w-full top-0 left-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <img src="img/logo-dede-branca.png" className="h-8 mr-3" alt="Dede Logo" />
                    </a>
                    <div className="flex md:order-2 justify-center items-center">
                        <div className="bg-white rounded-3xl p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#CE0303" className="w-6 h-6">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-white mx-2">Bem Vindo,</p> 
                            <p className="text-white mx-2 font-bold">Central de Atendimento</p>
                        </div>
                    </div>
                </div>  
            </nav>
        </>
    )
}


