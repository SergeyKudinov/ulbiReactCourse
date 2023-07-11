import { Link } from 'react-router-dom';
import cssClasses from "./Navbar.module.css";

export default function Navbar() {
    return (
    <div className={cssClasses.navbar}>
        <div className={cssClasses.navbar_links}>
            <Link to="/about">О сайте</Link>
            <Link to="/">Посты</Link>
        </div>
    </div>
    )
}
