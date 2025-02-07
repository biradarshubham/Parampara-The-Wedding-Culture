import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Protected=({comp})=>{
    const navigate=useNavigate();
    
    useEffect(()=>{
        let Login=localStorage.getItem("login");
        if(!Login){
            navigate("/login")
        }
    })
    return(
        <div>
            {comp}
        </div>
    )
}
export default Protected