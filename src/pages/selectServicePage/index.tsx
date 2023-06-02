import NavBar from '@/components/NavBar'


export default function SelectServicePage() {
    return(
        <>
        <NavBar/>
        <div className='mt-10 ml-40'>
            <p className='text-2xl font-medium'>Selecione os serviços:</p>
        </div>
        <div className='flex flex-col items-center mt-10'>
            <div className="flex flex-col">
                <label className='text-lg font-medium'> Tipo de Serviço</label>
                <input className="bg-[#F9F8F6] px-40 py-4 border-2 rounded"/>
            </div>
        </div>
        <div className=" flex flex-col items-center mt-6">
            <button className="bg-[#CE0203] px-10 py-4 rounded text-white">Adicionar Serviço</button>
        </div>
        </>
    )
}