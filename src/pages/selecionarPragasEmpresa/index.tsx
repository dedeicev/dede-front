import LayoutEmpresa from "@/components/layouts/layout_empresa";
import Link from "next/link";

export default function SelecionarPragasEmpresa() {
    return (
        <LayoutEmpresa>
            <div>
                <h2 className="text-2xl mt-5">Selecione os tipos de pragas combatidos por sua empresa:</h2>

                <div className="flex flex-row mt-5 items-center justify-between">
                    <div className="flex items-center rounded bg-[#E8E8E8] mr-5 p-1">
                        <input type="checkbox" className="mx-2 " />
                        <label className="mx-1 text-2xl">Barata</label>
                    </div>

                    <div className="flex items-center rounded bg-[#E8E8E8] mr-5 p-1">
                        <input type="checkbox" className="mx-2" />
                        <label className="mx-1 text-2xl">Cupim</label>
                    </div>

                    <div className="flex items-center rounded bg-[#E8E8E8] mr-5 p-1">
                        <input type="checkbox" className="mx-2" />
                        <label className="mx-1 text-2xl">Formiga</label>
                    </div>

                    <div className="flex items-center rounded bg-[#E8E8E8] p-1">
                        <input type="checkbox" className="mx-2" />
                        <label className="mx-1 text-2xl">Rato</label>
                    </div>
                </div>

                <Link href="/dashboard-empresa" className="flex justify-center">
                    <button className="bg-[#CE0203] px-10 py-4 rounded text-white mt-10">Concluir Cadastro</button>
                </Link>

            </div>
        </LayoutEmpresa>
    );
}