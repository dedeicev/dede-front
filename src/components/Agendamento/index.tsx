export default function Agendamento() {
    return (
        <>
            <div className="w-[600px] bg-[#F5F5F5] flex flex-row py-5 rounded-xl">
                <div className="w-full flex flex-col justify-center itens-center pl-12 pr-3">
                    <p className="text-black text-lg font-medium">Destetização convencional</p>
                </div>

                <div className="flex flex-col w-full items-center justify-center pl-8 pr-16">
                    <div className="w-full flex justify-between">
                        <div className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>08:00</span>
                        </div>

                        <div className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                            <span>20/04</span>
                        </div>
                    </div>

                    <div className="w-full mt-2 flex bg-[#E9C300] bg-opacity-[24%] border-2 border-[#DB8402] rounded-lg justify-center items-center">
                        <p className="text-[#DB8402]">Em Andamento</p>
                    </div>
                </div>
            </div>
        </>
    );
}