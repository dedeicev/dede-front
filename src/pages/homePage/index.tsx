/* eslint-disable @next/next/no-img-element */
import NavBar from "@/components/NavBar";
import PopUp from "@/components/PopUp";
import { Fragment, useState } from "react";


export default function HomePage() {
    const [showPopup,setShowPopUp] = useState(false);
    return(
        <>
        <Fragment>
        <NavBar/>
        <div className="flex flex-col">
            <div className="flex flex-row px-12 py-10 justify-between">
                <div className="flex items-center rounded-md border-2 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input type="text" placeholder="Busque por serviços" className="focus:outline-none ml-2 mr-10"/>
                </div>
                <div className=" flex justify-end">
                    <button className="bg-[#CE0203] px-10 py-3 rounded text-white "> Solicitar Serviço</button>
                </div>
            </div>
            <div className="flex justify-center">
                <img src="/banner_home.svg" alt="" />
            </div>
            <p className="flex self-center text-2xl p-10">SERVIÇOS</p>
            <div className="flex flex-row justify-between px-10">
                <button onClick={() => setShowPopUp(true)}>
                    <img src="/controle_de_ratos.svg" alt="" />
                </button>
                <button>
                    <img src="/controle_de_barata.svg" alt="" />
                </button>
                <button>
                    <img src="/controle_de_cupins.svg" alt="" />
                </button>
                <button>
                    <img src="/controle_de_insetos.svg" alt="" />
                </button>
            </div>
            <p className="flex self-center text-2xl p-10">EMPRESAS BEM AVALIADAS</p>
            <div className="flex flex-row justify-between px-10 mb-20">
                <button>
                    <img src="/empresas_avaliadas.svg" alt="" />
                </button>
                <button>
                    <img src="/empresas_avaliadas.svg" alt="" />
                </button>
                <button>
                    <img src="/empresas_avaliadas.svg" alt="" />
                </button>
                <button>
                    <img src="/empresas_avaliadas.svg" alt="" />
                </button>
            </div>

        </div>
        <PopUp isVisible={showPopup} onClose={() => setShowPopUp(false) }/>
        </Fragment>
        </>
    )
}