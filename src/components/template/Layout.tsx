"use client"
import useAppData from "@/data/hook/useAppData";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutProps {
    titulo: string;
    subtitulo: string;
    children?: any;
}
export default function Layout({ titulo, subtitulo, children }: LayoutProps) {
    const {tema, alterarTema} = useAppData()
    
    return (
        <div className={`
            ${tema}
            flex h-screen w-screen 
        `}>
            <MenuLateral />
            <div className={` 
                flex flex-col w-full p-7 bg-zinc-300 
                dark:bg-zinc-800 dark:text-zinc-200
            `}>
                <Cabecalho titulo={titulo} subtitulo={subtitulo} />
                <Conteudo>{children}</Conteudo>
            </div>
        </div>
    );
}
