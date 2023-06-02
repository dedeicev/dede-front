import NavBar from "@/components/NavBar";


export default function SolicitacaoServicoPage() {
    return(
        <>
        <NavBar/>
        <div className="flex flex-col items-center">
                <div className="mt-7">
                    <p className="text-lg font-medium">Para solicitar o serviço preencha os campos abaixo:</p>
                </div>
                <div className="grid grid-cols-2 gap-7 mt-8">
                    <div className="flex flex-col">
                        <label> Tipo de Serviço</label>
                        <select className="bg-[#F9F8F6] p-2 border-2 rounded" >
                            <option>Selecione um serviço</option>
                            <option></option>
                            <option></option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label>Cidade</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Rua</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>CEP</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Bairro</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Área em m2</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Complemento(Apt/Bloco/Casa)</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Contato</label>
                        <input className="bg-[#F9F8F6] p-2 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Número</label>
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