import Link from "next/link";

interface MenuItemProps {
    url: string;
    texto: string;
    icone: any;
}

export default function MenuItem({ url, texto, icone }: MenuItemProps) {
    return (
        <li className={`hover:bg-zinc-100`}>
            <Link href={url}>
                <div className={`flex flex-col justify-center items-center h-16 w-full`}>
                    {icone}
                    <span className={`flex justify-center text-xs font-light text-zinc-600 w-16`}>
                        {texto}
                    </span>
                </div>
            </Link>
        </li>
    );
}
