import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    const [scroll, setScroll] = useState(false);
    const [isMenu, setisMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);

      const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };

   
    return(
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky bg-white`}>
        <div className="container">


            <div className="menu-extras">
                <div className="menu-item">
                    <Link to="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                </div>
            </div>

    
            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                <ul className="navigation-menu nav-right" id="navmenu-nav">
                    <li className="has-submenu">
                        <a href="/" className="sub-menu-item">Home</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    )
}