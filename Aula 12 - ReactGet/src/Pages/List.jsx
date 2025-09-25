import axios from 'axios'
import { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

export const List = () => {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    }

    const openUserProfile = (user) => {
        navigate('/profile', {state: {user}})
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className=' flex flex-col justify-center items-center bg-gray-400 p-10 rounded-3xl '>
                <h1 className=' font-bold text-white mb-5'>Users</h1>
                {users.map(user => (
                <li key={user.id} onClick={(() => openUserProfile(user))}
                style={{ textDecoration: 'underline', listStyle:'none', cursor: 'pointer'}}>{user.id} - {user.name}</li>
                ))}
            </div>
        </div>
        
  )
}

export default List;