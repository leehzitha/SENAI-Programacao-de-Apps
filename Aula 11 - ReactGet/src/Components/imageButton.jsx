import { useState } from "react"

const imageButton = () => {
    const [dog, setDog] = useState();

    const getDog = async () => {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    setDog(response.data);
  }

    return (
        <>
        <button onClick={imageButton()}>Troque o cachorro</button>
        </>
    )
}
export default imageButton;