import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const { username } = useParams<{ username: string }>();
    const navigate = useNavigate();

    const loadLogout=()=>{
        navigate("/");
    }


    return(
        <div>
            <h2>Welcome {username} !</h2>

            <button onClick={loadLogout}>Logout</button>
        </div>
    )
}