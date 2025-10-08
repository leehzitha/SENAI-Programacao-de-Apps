import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Agent(){
    const location = useLocation();
    const { agent } = location.state || {};
    
    if (!agent) return <p>Nenhum agent selecionado.</p>

    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col  p-15 bg-black">
            <h1 className="text-8xl text-amber-50" id="nome-titulo">{agent.displayName}</h1>
            <div className="flex flex-row items-center gap-10 justify-between">
                <img src={agent.bustPortrait} className="w-3xl" />
                <p className="text-amber-50 text-2xl w-150 leading-normal">{agent.description}</p>
            </div>
        </div> 

    )
}