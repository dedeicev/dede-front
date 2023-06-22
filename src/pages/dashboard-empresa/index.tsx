import AgendamentoAdmin from "@/components/AgendamentAdmin";
import LayoutEmpresa from "@/components/layouts/layout_empresa";
import Calendar from 'react-calendar';
import { useState } from "react";
import AgendamentoAdminAgora from "@/components/AgendamentoAdmimAgora";

interface Solicitacoes {
    id: number,
    avatar: string,
    nomeCliente: string,
    hora: string
}

const solicitacoes: Solicitacoes[] = [
    {
        id: 1,
        avatar: "https://media.discordapp.net/attachments/1100930613218910220/1113636437108203590/12922bfa-e2af-4e15-b263-d7d4d44c52af.jpg?width=300&height=533",
        nomeCliente: "Caio Nunes",
        hora: "11:30"
    },
    {
        id: 2,
        avatar: "https://media.discordapp.net/attachments/1100930613218910220/1113634082753106040/image0.jpg?width=534&height=534",
        nomeCliente: "Marco Guimarães",
        hora: "10:00"
    },
    {
        id: 3,
        avatar: "https://media.discordapp.net/attachments/1100930613218910220/1113630796994064395/fotogithub.jpg?width=538&height=534",
        nomeCliente: "Asaph Oliveira",
        hora: "09:00"
    },
    {
        id: 4,
        avatar: "https://media.discordapp.net/attachments/1100930613218910220/1113635661174550630/ryanzin.jpg?width=534&height=534",
        nomeCliente: "Ryan Melo",
        hora: "08:30"
    },
]

export default function DashboardEmpresa() {

    const [value, onChange] = useState<Date>(new Date());


    return (
        <LayoutEmpresa>

            <div className="flex flex-row mt-7">
                <div>
                    <div className="w-[600px] items-start mb-5">
                        <h2 className="text-3xl font-bold">Serviços Agendados</h2>
                        <p className="text-[#9F0B0C]">Hoje  |  Dia 05  |  Domingo</p>
                    </div>

                    <AgendamentoAdminAgora />

                    <p className="">Manhã</p>
                    <hr />
                    {
                        solicitacoes.map(solicitacao => (
                            <AgendamentoAdmin
                                key={solicitacao.id}
                                avatar={solicitacao.avatar}
                                nomeCliente={solicitacao.nomeCliente}
                                hora={solicitacao.hora}
                            />
                        ))
                    }
                </div>

                <div className="ml-20">
                    <Calendar
                        value={value}
                        className="border border-[#CE0203] bg-[#F9F9F9] w-[250px] p-5 rounded-2xl"
                    />
                </div>
            </div>

        </LayoutEmpresa>
    );
}