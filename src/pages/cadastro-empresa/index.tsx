import BgCapa from "@/components/bgCapa";
import Link from "next/link";

export default function CadastroEmpresa() {
    return (
        <>
            <div className="w-full h-full flex flex-row justify-between">
                <BgCapa />

                <div className="bg-white w-1/3 h-full mt-10 mb-10 flex flex-col items-center justify-center px-28">
                    <img className="w-64" src="logo-dede.svg" alt="logo-dede" />

                    <div className="flex flex-col mt-10 w-full">
                        <h2 className="text-3xl font-bold mb-5">Cadastre Sua Empresa:</h2>

                        <label>Nome da Empresa</label>
                        <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="text" name="empresa" id="empresa" />

                        <label className="mt-5">CNPJ</label>
                        <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="text" name="cnpj" id="cnpj" />

                        <div className="flex flex-row mt-5">
                            <div className="mr-3">
                                <label>Rua</label>
                                <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="text" name="rua" id="rua" />
                            </div>

                            <div> 
                                <label>CEP</label>
                                <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="text" name="cep" id="cep" />
                            </div>
                        </div>

                        <div className="flex flex-row mt-5">
                            <div className="mr-3">
                                <label>Número</label>
                                <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="text" name="numero" id="numero" />
                            </div>

                            <div>
                                <label>Bairro</label>
                                <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="text" name="bairro" id="bairro" />
                            </div>
                        </div>

                        <label className="mt-5">Complemento</label>
                        <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="text" name="complemento" id="complemento" />

                        <label className="mt-5">Email</label>
                        <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="text" name="email" id="email" />

                        <label className="mt-5">Telefone</label>
                        <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="text" name="telefone" id="telefone" />

                        <div className="flex flex-row p-3">
                            <input className="" type="checkbox" name="acceptTerms" id="acceptTerms" />
                            <label className="ml-4 ">Concordo com os Termos e Condições</label>
                        </div>

                        <div className="flex flex-col items-center">
                            <Link className="mt-3" href="/selecionarPragasEmpresa">
                                <button className="bg-[#CE0203] px-10 py-4 rounded text-white">Cadastrar Conta</button>
                            </Link>

                            <Link className="mt-3" href="/login-empresa">
                                <button className="text-[#CE0203] flex flex-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                    Voltar para o login
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}