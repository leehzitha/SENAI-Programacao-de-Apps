import { useNavigate } from "react-router-dom"

export default function About() {

    const navigate = useNavigate();


    return (
        <>
            <h1>Sobre</h1>
            <button onClick={() => navigate("/")}>Voltar para a tela inicial</button>
        </>
    )
};