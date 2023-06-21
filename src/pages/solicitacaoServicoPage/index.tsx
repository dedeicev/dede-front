import NavBar from "@/components/NavBar";


export default function SolicitacaoServicoPage() {
    return(
        <>
        <NavBar/>
        <div className="flex flex-col items-center">
                <div className="mt-7">
                    <p className="text-lg font-medium">Para solicitar o serviço preencha os campos abaixo:</p>
                </div>
                <div className="flex justify-start mt-4">
                    <p className="">Tipo de Praga:</p>
                </div>
                
                <div className="flex flex-row font-medium">
                    
                    <div className="flex items-center rounded bg-[#E8E8E8] mr-5 p-1">
                        <input type="checkbox" className="mx-2"/>
                        <label className="mx-1">Barata</label>      
                    </div>
                    <div className="flex items-center rounded bg-[#E8E8E8] mr-5 p-1">
                        <input type="checkbox" className="mx-2"/>
                        <label className="mx-1">Cupim</label>
                    </div>
                    <div className="flex items-center rounded bg-[#E8E8E8] mr-5 p-1">
                        <input type="checkbox" className="mx-2"/>
                        <label className="mx-1">Formiga</label>
                    </div>
                    <div className="flex items-center rounded bg-[#E8E8E8] mr-5 p-1">
                        <input type="checkbox" className="mx-2"/>
                        <label className="mx-1">Rato</label>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-7 py-5">
                    <div className="flex flex-col">
                        <label>Rua e Número</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Cidade</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Bairro</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>CEP</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Complemento(Apt/Bloco/Casa)</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Área em m2</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Contato</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Pessoa física ou jurídica</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                </div>

                <div className="mt-8">
                    <button className="bg-[#CE0203] px-10 py-4 rounded text-white"> Solicitar Serviço</button>
                </div>

            </div>
        </>
    )
}