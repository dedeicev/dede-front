import React from 'react'
import { Avatar } from '@chakra-ui/react'

const AgendamentoAdmin = () => {
    return (
        <>
        <nav className="r-[#b91c1c] fixed w-200 z-20 top-0 left-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex md:order-2 justify-center items-center">
                        <Avatar name='Thiago Rodrigo' src='https://bit.ly/dan-abramov' />
                        <span className="text-white mx-2 hover:text-stone-50">Thiago Rodrigo</span>
                </div>
                    <a href="#" className="flex items-right">
                        <img src="public/relogio.svg" className="h-8 mr-3" alt="Relogio" />
                    </a>
                    <span className="text-white mx-2 hover:text-stone-950">8:00</span>
            </div>
        </nav>
        </>
    );


}


export default AgendamentoAdmin