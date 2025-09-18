import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col gap-20">
        <div className=" flex justify-between">
          <div className='flex flex-col justify-between items-center h-60 w-60 bg-blue-500' >
            <div className="bg-amber-500 w-20 h-20 "></div>
            <div className="bg-amber-500 w-20 h-20 "></div>
          </div>
          <div className=' bg-blue-500 w-60 h-60 flex justify-center items-center ' >
            <div className="bg-amber-500 w-20 h-20 "></div>
          </div>
          <div className=' bg-blue-500 w-60 h-60 flex flex-col justify-between'>
            <div className="">
              <div className="bg-amber-500 w-20 h-20 "></div>
            </div>
            <div className="flex justify-end">
              <div className="bg-amber-500 w-20 h-20 "></div>
            </div>
          </div>
          <div className=' bg-blue-500 w-60 h-60 flex justify-center items-end' >
            <div className="bg-amber-500 w-20 h-20 "></div>
          </div>
        </div>

        <div className=" flex justify-between">
          <div className="bg-blue-500 w-60 h-60 flex justify-center">
            <div className="bg-amber-500 w-20 h-20 "></div>
          </div>
          <div className="bg-blue-500 w-60 h-60 flex flex-col">
            <div className="flex justify-center">
              <div className="bg-amber-500 w-20 h-20 "></div>
            </div>
            <div className="flex justify-between">
              <div className="bg-amber-500 w-20 h-20 "></div>
              <div className="bg-amber-500 w-20 h-20 "></div>
            </div>
            <div className="flex justify-center">
              <div className="bg-amber-500 w-20 h-20 "></div>
            </div>  
          </div>
          <div className="bg-blue-500 w-60 h-60 flex justify-center">
            <div className="bg-amber-500 w-20 h-20"></div>
          </div>
        </div>

        <div className="flex justify-between">
           <div className=' bg-blue-500 w-60 h-60 flex flex-col justify-between' >
              <div className="flex justify-end">
                <div className="bg-amber-500 w-20 h-20"></div>
              </div>
              <div className="">
                <div className="bg-amber-500 w-20 h-20"></div>
              </div>
           </div>
            <div className=' bg-blue-500 w-60 h-60 flex justify-center items-center' >
              <div className="bg-amber-500 w-20 h-20"></div>
            </div>
            <div className=' bg-blue-500 w-60 h-60 flex justify-end ' >
              <div className="bg-amber-500 w-20 h-20"></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
