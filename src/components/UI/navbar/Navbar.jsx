import { Link } from 'react-router-dom';
import cssClasses from "./Navbar.module.css";
import MyButton from '../button/MyButton';
import { useContext } from 'react';
import { AuthContext } from '../../../context';

export default function Navbar() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
    };

    return (
    <div className={cssClasses.navbar}>
        <MyButton onClick={logout}>
            Выйти
        </MyButton>
        <div className={cssClasses.navbar_links}>
            <Link to="/about">О сайте</Link>
            <Link to="/">Посты</Link>
        </div>
    </div>
    )
}
