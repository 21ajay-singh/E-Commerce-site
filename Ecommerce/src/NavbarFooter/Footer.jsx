import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer=()=>{
    return(

            <footer>
                <div>
                    <div>
                        <Link to={"/"}>MS Shop</Link>
                        <p>Quality products at unbeatable prices, delivered to your door.</p>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to={"/shop"}>Shop</Link></li>
                            <li><Link to={"/about"}>About Us</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                            <li><Link to={"/blog"}>Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Follow Us</h4>
                        <Link to={"/"}>🌐</Link>
                        <Link to={"/"}>📘</Link>
                        <Link to={"/"}>📸</Link>
                    </div>
                </div>
                <p> © {new Date().getFullYear()} MS Shop. All rights reserved.</p>
            </footer>
            );
}

export default Footer;