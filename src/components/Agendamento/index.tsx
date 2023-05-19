import React from 'react'

const Agendamento = () => {
    return (
    <>
        <nav className="w-[#fafafa] fixed w-200 z-20 top-0 left-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex md:order-2 justify-center items-center">
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

export default Agendamento