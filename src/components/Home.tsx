import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
/>

export default function Home(){
    const { username } = useParams<{ username: string }>();
    const navigate = useNavigate();

    const loadLogout=()=>{
        navigate("/");
    }


    return(
        <div>
            <div className='welcome'>
                <h2>Welcome {username} !</h2>
                <button type="button" id="logoutBtn" className="btn btn-primary btn-lg btn-block" onClick={loadLogout}> <i className="fas fa-sign-out-alt"></i> Logout</button>
            </div>
        </div>
    )
}