import Agendamento from "@/components/Agendamento";
import NavBar from "@/components/NavBar";
import LayoutCliente from "@/components/layouts/layout_cliente";
import Link from "next/link";

export default function ServicoSolicitadosPage() {

    return(
        <LayoutCliente>
            <div className="w-1/2 min-h-screen flex flex-col">
                <div className="w-full flex flex-row pt-10 items-center justify-between">
                    <h2 className="text-2xl">Seus serviços solicitados</h2>
                    <Link href="/solicitacaoServicoPage">
                        <button className="bg-[#CE0203] px-10 py-3 rounded-lg text-white">Solicitar Serviço</button>
                    </Link>
                </div>

                <div className="pt-10">
                    <Agendamento/>
                    <br/>
                    <Agendamento/>
                    <br/>
                    <Agendamento/>
                    <br/>
                    <Agendamento/>
                </div>
            </div> 
        </LayoutCliente>
    )
}