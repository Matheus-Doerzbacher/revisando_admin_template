interface TituloProps {
    titulo: string
    subtitulo: string
}

export default function Titulo({titulo, subtitulo}: TituloProps) {
    return (
        <div>
            <h1 className={`
                font-black text-2xl 
                text-zinc-900 dark:text-zinc-100
            `}>
                {titulo}
            </h1>
            
            <h2 className={`
                font-light text-sm 
                text-zinc-600 dark:text-zinc-300
            `}>
                {subtitulo}
            </h2>
        </div>
    )
}