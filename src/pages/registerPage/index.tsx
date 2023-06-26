import BgCapa from "@/components/bgCapa";
import Link from "next/link";

export default function RegisterPage() {
    return (
      <>
        <div className="w-full h-screen flex flex-row justify-between">
          <BgCapa/>

          <div className="bg-white w-1/3 h-full flex flex-col items-center justify-center px-28">
            <img className="w-64" src="logo-dede.svg" alt="logo-dede" />

            <div className="flex flex-col mt-10 w-full">
              <h2 className="text-3xl font-bold mb-5">Crie Sua Conta</h2>

              <label>Nome</label>
              <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="text" name="name" id="name" />

              <label className="mt-5">Email</label>
              <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="text" name="email" id="email" />

              <label className="mt-5">Senha</label>
              <input className="bg-[#F9F8F6] p-3 border-2 rounded" type="password" name="password" id="password" />
     
              <div className="flex flex-row p-3">
                <input className="" type="checkbox" name="acceptTerms" id="acceptTerms"/>
                <label className="ml-4 ">Concordo com os Termos e Condições</label>
              </div>

              <div className="flex flex-col items-center">
                <Link className="mt-10" href="/loginPage">
                  <button className="bg-[#CE0203] px-10 py-4 rounded text-white">Cadastrar Conta</button>
                </Link>

                <Link className="mt-10" href="/loginPage">
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
    )
  }