import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserList from "./UserList";

export default function Home(){
    return (
        <>
            <h1>Home</h1>
            <UserList></UserList>
        </>
      
    )
};

