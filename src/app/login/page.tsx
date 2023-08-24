/* eslint-disable @next/next/no-img-element */
"use client";
import AuthInput from "@/components/Auth/AuthInput";
import { IconGoogle } from "@/components/icons";
import { useState } from "react";

export default function Login() {
    const [modo, setModo] = useState<"login" | "cadastro">("login");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function submit() {
        if (modo === "login") {
            console.log("Login...");
        } else {
            console.log("Cadastrar...");
        }
    }

    return (
        <div className={` flex items-center justify-center h-screen w-full`}>
            <div className="hidden md:block w-1/2">
                <img 
                    className={`h-screen w-full object-cover`}
                    src="https://source.unsplash.com/random/?list" 
                    alt="imagem"/>
            </div>
            <div className={`w-1/2 m-10`}>
                <h1 className={`text-xl font-bold mb-5`}>
                    {modo === "login"
                        ? "Entre com a sua Conta"
                        : "Cadastre-se na plataforma"}
                </h1>
                <AuthInput
                    tipo="email"
                    label="Email"
                    valor={email}
                    valorMudou={setEmail}
                />
                <AuthInput
                    tipo="password"
                    label="Senha"
                    valor={senha}
                    valorMudou={setSenha}
                />

                <button
                    onClick={submit}
                    className={`w-full text-white bg-indigo-500 hover:bg-indigo-400 rounded-l px-4 py-3 mt-6`}
                >
                    {modo === "login" ? "Entrar" : "Cadastrar"}
                </button>

                <hr className={`my-6 border-zinc-300 w-full`} />

                <button
                    onClick={submit}
                    className={`flex justify-center items-center w-full text-white bg-red-500 hover:bg-red-400 rounded-l px-4 py-3 `}
                >
                    <span className={`flex items-center gap-2`}>
                        Entrar com o Google
                        <div className={`bg-white rounded-full p-px`}>
                            {IconGoogle}
                        </div>
                    </span>
                </button>
            </div>
        </div>
    );
}
