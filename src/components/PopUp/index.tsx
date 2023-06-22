/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function PopUp({isVisible, onClose}) {
    if (!isVisible) return null;
    return(
        <>
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
                <img src="/desratizacoes.svg"/>

            </div>
        </div>
        
        </>
    )
}