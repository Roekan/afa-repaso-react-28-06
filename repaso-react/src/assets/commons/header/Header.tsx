import './Header.css'
import jwtDecode from 'jwt-decode'
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Header = () => {

const navigate = useNavigate();

const token = sessionStorage.getItem("token")
let decoded;
if(token){
    decoded = jwtDecode(token)
}

const logoutHandler = ()=>{
    sessionStorage.clear()
    navigate("/")
}


    return (
        <>
        
        <div className="box-header">
            <div className="box-title-header">
                <img className="image" src="../../../public/images/logo-project.png" alt="" />
                {token ? (
                    <>
                    <div className="container-link-menu">
                        <div className="box-link-menu">
                        <div>HOLA, {decoded?.name}</div>
                        </div>
                        <div className="box-link-menu box-logout">
                        <div onClick={()=>logoutHandler()}>LOGOUT</div>
                        </div>
                    </div>
                    </>
                ) : (
                    <div className="box-link-menu box-login">
                    <div onClick={() => navigate("/login")}>LOGIN</div>
                    </div>
                )}
            </div>
            <div className="box-menu">
                <a href="/useState">useState/useEffect</a>
                <a href="/login">Login</a>
                <a href="/llamadaAPI">API R&M</a>
            </div>
        </div>
            
        </>
    )
}
