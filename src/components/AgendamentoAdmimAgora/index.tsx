import { Avatar } from "@chakra-ui/react";

export default function AgendamentoAdminAgora() {
    return (
        <>
            <div className="w-[600px] bg-[#9F0B0C] flex flex-row py-5 px-3 justify-between text-white rounded-lg">
                <div className="flex flex-row items-center">
                    <Avatar name='Thiago Rodrigo' src='https://pbs.twimg.com/profile_images/1632560494853627904/Ijbrl_vd_400x400.jpg' />
                    <p className="ml-2">Ryan Melo</p>
                </div>

                <div className="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>08:00</span>
                </div>
            </div>
        </>
    );
}