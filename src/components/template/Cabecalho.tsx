import useAppData from "@/data/hook/useAppData"
import Titulo from "./Titulo"

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho({titulo, subtitulo}: CabecalhoProps) {
    const {alterarTema} = useAppData()
    return (
        <div className={` flex `}>
            <Titulo titulo={titulo} subtitulo={subtitulo}/>
            <div className={`flex flex-grow justify-end`}>
                <button 
                    onClick={alterarTema}
                    className={`
                        border px-6 rounded-xl
                        border-zinc-900
                        dark:border-zinc-200
                    `}
                >
                    Tema
                </button>
            </div>
        </div>
    )
}