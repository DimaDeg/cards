import {Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "../../../z3-features/v4-profile/Profile";
import {Test} from "../../../z3-features/v1-test/Test";
import {Login} from "../../../z3-features/v2-auth/b1-login/Login";
import {Register} from "../../../z3-features/v2-auth/b2-register/Register";
import {RecoverPassword} from "../../../z3-features/v2-auth/b3-recover-password/RecoverPassword";
import {EnterNewPassword} from "../../../z3-features/v2-auth/b4-new-password/EnterNewPassword";
import {NotFound} from "../../../z3-features/v3-404/NotFound";

export const PATH = {
    TEST: '/test',
    LOGIN: '/login',
    REGISTER: '/register',
    RECOVER: '/recover',
    ENTER_PASSWORD: '/enter-password',
    PROFILE: '/profile'
}


export const CardsRoutes = () => {
    return(<div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTER} element={<Register/>}/>
                <Route path={PATH.RECOVER} element={<RecoverPassword/>}/>
                <Route path={PATH.ENTER_PASSWORD} element={<EnterNewPassword/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Routes>
        </div>
    )
}