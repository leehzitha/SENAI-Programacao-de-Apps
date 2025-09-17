import { useNavigate, useParams } from "react-router-dom";

export default function Product() {
    const {category} = useParams();
    const {id} = useParams();

    return (
        <>
            <h1>Categoria: {category}</h1>
            <h1>Produto: {id}</h1>
        </>
    )


}