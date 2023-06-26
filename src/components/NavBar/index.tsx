import Link from 'next/link'
import React from 'react'
import { Avatar } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>
            <nav className="bg-[#CE0303] w-full top-0 left-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <img src="img/logo-dede-branca.png" className="h-8 mr-3" alt="Dede Logo" />
                    </a>
                    <div className="flex md:order-2 justify-center items-center">
                        <Avatar name='Thiago Rodrigo' src='https://bit.ly/dan-abramov' />
                        <span className="text-white mx-2 hover:text-stone-700">Thiago Rodrigo</span>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            <li>
                                <Link href="/homePage" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-stone-700 dark:text-white" aria-current="page">Início</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-stone-700 dark:text-white">Serviços</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-stone-700 dark:text-white">Solicitações</Link>
                            </li>
                        </ul>
                    </div>
                </div>  
            </nav>
        </>
    )
}

export default NavBar

