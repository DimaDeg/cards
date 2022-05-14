import {NavLink} from "react-router-dom";
import {PATH} from "../v2-routes/Routes";
import s from './Header.module.css'

export const Header = () => {
    return (<div className={s.header}>
        <NavLink to={PATH.PROFILE} className={s.text}>Profile</NavLink>
        <NavLink to={PATH.LOGIN} className={s.text}>Login</NavLink>
        <NavLink to={PATH.REGISTER} className={s.text}>Register</NavLink>
        <NavLink to={PATH.RECOVER} className={s.text}>Recover</NavLink>
        <NavLink to={PATH.ENTER_PASSWORD} className={s.text}>Enter new password</NavLink>
        <NavLink to={PATH.TEST} className={s.text}>Test</NavLink>
    </div>)
}