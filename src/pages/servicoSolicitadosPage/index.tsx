import Agendamento from "@/components/Agendamento";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function ServicoSolicitadosPage() {

    return(
        <>
        <NavBar/>
        <div className="flex flex-col">
            <div className="flex flex-row justify-between p-20">
                <div className=" text-3xl font-medium">Seus serviços solicitados</div>
                <div className=" flex justify-end">
                    <Link href="/solicitacaoServicoPage">
                        <button className="bg-[#CE0203] px-10 py-3 rounded text-white ">Solicitar Serviço</button>
                    </Link>
                </div>
            </div>
            <div className="px-20">
                <Agendamento/>
                <br/>
                <Agendamento/>
                <br/>
                <Agendamento/>
                <br/>
                <Agendamento/>
            </div>
        </div>
        
        </>
    )


}