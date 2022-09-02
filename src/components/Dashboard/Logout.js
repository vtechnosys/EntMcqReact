import React,{useEffect} from "react";


function Logout()
{
    function logout()
    {
        localStorage.removeItem("login");
        window.location.href="/login";

    }
    useEffect(()=>{
        logout();
    },[])
    return(
        <div>Loggin out...</div>
    )
}
export default Logout;