import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg' />

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
            : <NavLink to={'/login'} > Login </NavLink>}
        </div>
    </header>
}

export default Header; 