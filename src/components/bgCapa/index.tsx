export default function BgCapa() {
    return(
        <div className="bg-[url('/bg-login-and-create-account.svg')] bg-cover w-2/3 h-screan text-white flex flex-col justify-center items-start px-44">
            <h2 className="text-6xl font-extralight">Soluções de dedetização eficientes para sua casa ou empresa</h2>

            <div className="flex items-center mt-10">
              <img src="/relogio.svg" alt="relogio" />
              <p className="text-4xl font-extralight ml-3">Agendamento rápido e fácil</p>
            </div>

            <div className="flex items-center mt-10">
              <img src="/barata.svg" alt="relogio" />
              <p className="text-4xl font-extralight ml-3">Dedetização em poucos cliques</p>
            </div>

            <div className="flex items-center mt-10">
              <img src="/controle-de-qualidade.svg" alt="relogio" />
              <p className="text-4xl font-extralight ml-3">Preços justos e serviços de excelência</p>
            </div>
        </div>
    );
}