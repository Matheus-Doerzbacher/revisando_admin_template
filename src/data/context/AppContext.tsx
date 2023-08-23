"use client"
import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppContextProps {
    tema: Tema
    alterarTema: () => void
}

const AppContext = createContext<AppContextProps>({
    tema: "",
    alterarTema: () => null
})

export function AppProvider({children}: any){
    const [tema, setTema] = useState<Tema>('dark')

    function alterarTema() {
        setTema(tema === '' ? 'dark' : '')
    }

    return (
        <AppContext.Provider value={{
            tema,
            alterarTema
        }}>
        {children}
       </AppContext.Provider> 
    )
}

export default AppContext