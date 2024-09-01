import react from "react";
import '../PageNotFound/pagenot.css'
import Image404 from "../Assets/404.png"
import { useNavigate } from "react-router-dom";

function Pagenotfound(){
    const Navigate = useNavigate()
//         function goClick(){
//             Navigate('/')
//         }
    return(
       

        <div className="tw-Not-Found">
            <img loading="lazy" src={Image404}/>
            <h1 className="GotoHomePage" onClick={()=>{Navigate('/')}}>Go Back To Home Page</h1>
        </div>
        
    )
}
export default Pagenotfound 