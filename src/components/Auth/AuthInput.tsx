interface AuthInputProps {
    label: string;
    valor: any;
    tipo?: 'text' | 'email' | 'password'
    obrigatorio?: boolean
    valorMudou: (novoValor: any) => void;
}

export default function AuthInput({ label, valor, tipo, obrigatorio, valorMudou }: AuthInputProps) {
    return (
        <div className={`flex flex-col mt-4`}>
            <label>{label}</label>
            <input 
                type={tipo ?? 'text'} 
                value={valor} 
                onChange={e => valorMudou?.(e.target.value)} 
                required={obrigatorio}
                className={`
                    px-4 py-3 rounded-lg bg-zinc-200 mt-2
                    border focus:border-blue-500 focus:bg-white
                    outline-none
                `}
            />
        </div>
    );
}
