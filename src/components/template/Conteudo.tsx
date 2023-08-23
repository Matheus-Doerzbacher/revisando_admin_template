interface ConteudoProps {
    children?: any
}

export default function Conteudo({children}: ConteudoProps) {
    return (
        <div className={`flex flex-col mt-7`}>
            {children}
        </div>
    )
}