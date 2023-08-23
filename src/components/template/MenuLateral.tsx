"use client"
import { IconAjustes, IconHome, IconLogout } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside className={`
            flex flex-col
            bg-zinc-200 text-zinc-900
            dark:bg-zinc-900 
        `}>
            <div className={
                `h-16 w-16 
                bg-gradient-to-br from-orange-500 to-purple-500`
            }>
                <span className={`
                    flex justify-center items-center h-full 
                    text-white font-bold
                `}>
                    Logo
                </span>
            </div>
            
            <ul className={`flex-grow`}>
                <MenuItem url="/" texto="Home" icone={IconHome} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconAjustes} />
            </ul>

            <ul className={``}>
                <MenuItem 
                    onClick={() => console.log('Logout')} 
                    texto="Sair" 
                    icone={IconLogout} 
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}