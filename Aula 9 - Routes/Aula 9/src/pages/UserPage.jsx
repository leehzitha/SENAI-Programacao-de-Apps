import { useParams } from "react-router-dom"

export const UserPage = () => {
    const { id } = useParams();

    return <h3>Você está na página do usuário {id}</h3>

}

export default UserPage;