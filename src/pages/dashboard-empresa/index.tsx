import LayoutEmpresa from "@/components/layouts/layout_empresa";

interface Solicitacoes {
    avatar: string,
    nomeCliente: string,
    hora: string
}

const solicitacoes: Solicitacoes[] = [
    {
        avatar: "https://media.discordapp.net/attachments/1100930613218910220/1113636437108203590/12922bfa-e2af-4e15-b263-d7d4d44c52af.jpg?width=300&height=533",
        nomeCliente: "Caio Nunes",
        hora: "11:30"
    },
    {
        avatar: "https://media.discordapp.net/attachments/1100930613218910220/1113634082753106040/image0.jpg?width=534&height=534",
        nomeCliente: "Marco Guimarães",
        hora: "10:00"
    },
    {
        avatar: "https://media.discordapp.net/attachments/1100930613218910220/1113630796994064395/fotogithub.jpg?width=538&height=534",
        nomeCliente: "Asaph Oliveira",
        hora: "09:00"
    },
    {
        avatar: "https://media.discordapp.net/attachments/1100930613218910220/1113635661174550630/ryanzin.jpg?width=534&height=534",
        nomeCliente: "Ryan Melo",
        hora: "08:30"
    },
]

export default function DashboardEmpresa() {
    return(
        <LayoutEmpresa>

        </LayoutEmpresa>
    );
}