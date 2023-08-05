import LayoutCliente from "@/components/layouts/layout_cliente";
import Link from "next/link";

export default function ConfigPerfilPage() {
    return(
        <LayoutCliente>
            <div className="flex flex-col items-center">
                <div className="p-10">
                    <p className="font-medium text-3xl">Configurações</p>
                </div>
                <div className="mb-5">
                    <p className="font-medium text-xl">Alterar a senha:</p>
                </div>
                <div className="grid grid-cols-2 gap-7 mb-5">
                    <div className="flex flex-col">
                        <label>Senha atual</label>
                        <input className="bg-[#F9F8F6] py-1 px-10 border-2 rounded" type="password" name="senhaAtual" id="senhaAtual" />
                    </div>
                    <div className="flex flex-col">
                        <label>Nova senha</label>
                        <input className="bg-[#F9F8F6] py-1 px-10 border-2 rounded" type="password" name="senhaNova" id="senhaNova" />
                    </div>
                </div>
                <div className="">
                    <Link href="#">
                        <button className="bg-[#CE0203] px-10 py-2 rounded-lg text-white">Redefinir senha</button>
                    </Link>
                </div>
                <div className="py-5">
                    <p className="font-medium text-xl">Alterar ou adicionar endereço:</p>
                </div>
                <div className="grid grid-cols-2 gap-7 mb-5">
                    <div className="flex flex-col">
                        <label>Rua e Número</label>
                        <input className="bg-[#F9F8F6] py-1 px-10 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Cidade</label>
                        <input className="bg-[#F9F8F6] py-1 px-10 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Bairro</label>
                        <input className="bg-[#F9F8F6] py-1 px-10 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>CEP</label>
                        <input className="bg-[#F9F8F6] py-1 px-10 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Complemento(Apt/Bloco/Casa)</label>
                        <input className="bg-[#F9F8F6] py-1 px-10 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Área em m2</label>
                        <input className="bg-[#F9F8F6] py-1 px-10 border-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Contato</label>
                        <input className="bg-[#F9F8F6] py-1 px-10 border-2 rounded"/>
                    </div>
                    <div className="py-5">
                        <Link href="#">
                            <button className="bg-[#CE0203] px-10 py-2 rounded-lg text-white">Confirmar novo endereço</button>
                        </Link>
                    </div>
                </div>
            </div>
        </LayoutCliente>
    )
}