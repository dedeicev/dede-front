import { Avatar } from '@chakra-ui/react'

interface Props {
    hora: any,
    nomeCliente: string,
    avatar: string
}

export default function AgendamentoAdmin(props: Props) {
    return (
        <>
            <div className="w-[600px] flex flex-row py-5 justify-between">

                <div className="flex flex-row justify-between">
                    <div className="flex flex-row mr-10 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{props.hora}</span>
                    </div>

                    <div className="flex flex-row items-center">
                        <Avatar name={props.nomeCliente} src={props.avatar} />
                        <p className="ml-2">{props.nomeCliente}</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}
