import Link from "next/link";

interface MenuItemProps {
    url?: string;
    texto: string;
    icone: any;
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem({ url, texto, icone , onClick, className}: MenuItemProps) {

    function renderizarLink() {
        return (
            <div className={`flex flex-col justify-center items-center h-16 w-full text-zinc-600 ${className}`}>
                {icone}
                <span className={`flex justify-center text-xs font-light  w-16`}>
                    {texto}
                </span>
            </div>
        )
    }
    return (
        <li onClick={onClick} className={`hover:bg-zinc-100 cursor-pointer `}>
            {url ? (
                <Link href={url}>
                    {renderizarLink()}
                </Link>
            ) : (
                renderizarLink()
            )}
        </li>
    );
}
