import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../App.css'


export const Home = () =>{
    const [agents, setAgents] = useState([]);
    const navigate = useNavigate();
    const [images, setImages] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        getAgents();
    }, [])

    const getAgents = async () => {
        const response = await axios.get('https://valorant-api.com/v1/agents')
        setAgents(response.data.data)
        // console.log(cartoons.image)
    }

     const next = () => {
        setCurrentIndex((prev) => (prev + 1) % agents.length);
     };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + agents.length) % agents.length);
    };

     const openAgent = (agent) => {
        navigate('/agent', {state: {agent}})
    }
    

    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-4 w-screen h-screen">
            <h1 className=" text-8xl font-bold mb-2 mt-10 " id="title">AGENTES</h1>

            {agents.length > 0 && (
            <div className="relative flex justify-center w-full h-full group">
                <img
                src={agents[currentIndex].bustPortrait} 
                alt={agents[currentIndex].displayName}
                className="w-4xl rounded-lg " 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black  flex items-end justify-center  opacity-100 w-fulltransition-opacity duration-300 rounded-lg" onClick={() => openAgent(agents[currentIndex])}>
                    <h1 className="text-white mb-45 text-4xl font-bold" id="name">{agents[currentIndex].displayName}</h1>
                </div>
                <button
                onClick={prev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-5xl ml-20 text-white px-3 py-1 rounded-r bg-transparent"
                >
                ↼
                </button>
                <button
                onClick={next}
                className="absolute top-1/2 right-0 transform -translate-y-1/2  mr-20 text-5xl text-white px-3 py-1 rounded-l bg-transparent    "
                >
                ⇀
                </button>
            </div>
            )}
        </div>
);
}

export default Home;