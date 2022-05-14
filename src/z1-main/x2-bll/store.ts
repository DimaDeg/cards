import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./reducers/profile-reducer";
import {LoginReducer} from "./reducers/login-reducer";
import {RegisterReducer} from "./reducers/register-reducer";
import {RecoverReducer} from "./reducers/recover-reducer";
import {PasswordReducer} from "./reducers/password-reducer";
import {TestReducer} from "./reducers/test-reducer";


const RootReducer = combineReducers({
    profile: ProfileReducer,
    login: LoginReducer,
    register: RegisterReducer,
    recover: RecoverReducer,
    password: PasswordReducer,
    test: TestReducer
})

export const store = createStore(RootReducer)

export type AppRootStateType = ReturnType<typeof RootReducer>

