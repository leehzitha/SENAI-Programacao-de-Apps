import { useLocation } from "react-router-dom";

export default function Profile(){
    const location = useLocation();
    const { user } = location.state || {};

    if (!user) return <p>Nenhum usuario selecionado.</p>

    return (
        <div className="bg-gray-400 w-screen h-screen flex justify-center items-center">
            <div className="bg-gray-200 p-12 w-120 rounded-lg opacity-80">
                <h2 className=" font-bold text-3xl mb-8">Perfil do Usuário</h2>
                <div className="flex flex-row justify-between">
                    <p className=" font-bold">Nome</p>
                    <p>{user.name}</p>
                </div>
                <div className="flex flex-row justify-between ">
                    <p className=" font-bold">Email</p>
                    <p>{user.email}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className=" font-bold">Telefone</p>
                    <p>{user.phone}</p>
                </div>
                
                
                
            </div>
        </div>
    );
}