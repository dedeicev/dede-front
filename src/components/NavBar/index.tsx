/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import React, { useState } from 'react'
import { Avatar, Button, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>
            <nav className="bg-[#CE0303] w-full top-0 left-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/homePage" className="flex items-center">
                        <img src="img/logo-dede-branca.png" className="h-8 mr-3" alt="Dede Logo" />
                    </a>

                    <div className="flex flex-row items-center">
                        <div className="justify-between w-full md:flex md:w-auto mr-8" id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                                <li>
                                    <Link href="/homePage" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-stone-200 dark:text-white" aria-current="page">Início</Link>
                                </li>
                                <li>
                                    <Link href="/servicoSolicitadosPage" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-stone-200 dark:text-white">Solicitações</Link>
                                </li>
                            </ul>
                        </div>
                        <Menu>
                            {({ isOpen }) => (
                                <>
                                    <MenuButton isActive={isOpen} as={Button} background={"none"} _hover={{ bg: "none" }}  _expanded={{  bg: "none" }}>
                                        <div className="flex justify-center items-center">
                                            <Avatar name='Thiago Rodrigo' src='https://bit.ly/dan-abramov' />
                                        </div>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem><Link href="/configPerfilPage">Editar Perfil</Link></MenuItem>
                                        <MenuItem><Link href="#">Configurações</Link></MenuItem>
                                        <MenuItem><Link href="/loginPage">Sair</Link></MenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                    </div>
                </div>  
            </nav>
        </>
    )
}

export default NavBar

