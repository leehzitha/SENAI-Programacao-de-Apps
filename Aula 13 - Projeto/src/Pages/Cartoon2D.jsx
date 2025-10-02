import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../App.css'

export const Cartoon2D = () =>{
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

    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-4 w-screen h-screen">
            <h1 className=" text-7xl font-bold mb-4 " id="title">Agentes</h1>

            {agents.length > 0 && (
            <div className="relative w-full max-w-6xl group">
                <img
                src={agents[currentIndex].bustPortrait} 
                alt={agents[currentIndex].displayName}
                className="w-full  rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg">
                    <span className="text-white text-5xl font-bold">{agents[currentIndex].displayName}</span>
                </div>
                <button
                onClick={prev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-5xl text-white px-3 py-1 rounded-r bg-transparent hover:bg-white/10"
                >
                ↼
                </button>
                <button
                onClick={next}
                className="absolute top-1/2 right-0 transform -translate-y-1/2  text-5xl text-white px-3 py-1 rounded-l bg-transparent hover:bg-white/10"
                >
                ⇀
                </button>
            </div>
            )}
        </div>
);
}

export default Cartoon2D;