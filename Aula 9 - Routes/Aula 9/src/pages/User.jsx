import { useParams } from "react-router-dom";

export default function User(){
    const {id} = useParams();

    let intId = parseInt(id);

    if (intId === 1){
        return (
            <>
                <h1>Admin</h1>
            </>
        );
    }

    return (
            <>
                <h1>Usuário comum</h1>
            </>
    )
}