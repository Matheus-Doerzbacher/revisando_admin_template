interface ConteudoProps {
    children?: any
}

export default function Conteudo({children}: ConteudoProps) {
    return (
        <div className={`
            flex flex-col mt-7 dark:text-zinc-200
        `}>
            {children}
        </div>
    )
}