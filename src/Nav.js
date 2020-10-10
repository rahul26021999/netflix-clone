import React,{useEffect,useState} from 'react';
import "./Nav.css";
import avatar from "./avatar.png"

function Nav() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true)
            }else handleShow(false)
        });
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="Netflix Logo" className="nav__logo"/>
            <img src={avatar} alt="Netflix avatar" className="nav__avatar"/>
        </div>
    )
}

export default Nav
