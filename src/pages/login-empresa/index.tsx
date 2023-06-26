import BgCapa from "@/components/bgCapa";
import Link from "next/link";

export default function LoginPageEmpresa() {
    return (
      <>
        <div className="w-full h-screen flex flex-row justify-between">
          <BgCapa/>

          <div className="bg-white w-1/3 h-full flex flex-col items-center justify-center px-28">
            <img className="w-64" src="logo-dede.svg" alt="logo-dede" />

            <div className="flex flex-col mt-10 w-full">
              <h2 className="text-3xl font-bold mb-5">Acesso Empresarial</h2>

              <label>Email</label>
              <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="text" name="email" id="email" />

              <label className="mt-5">CNPJ</label>
              <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="text" name="email" id="email" />

              <label className="mt-5">Senha</label>
              <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="password" name="password" id="password" />

              <div className="flex flex-col items-center">
                <Link className="mt-10" href="/dashboard-empresa">
                  <button className="bg-[#CE0203] px-10 py-4 rounded text-white">Fazer Login</button>
                </Link>

                <Link className="mt-10" href="/cadastro-empresa">
                  <button className="text-[#CE0203] flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 rotate-180">
                      <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                    Criar Conta
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }