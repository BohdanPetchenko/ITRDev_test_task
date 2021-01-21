import actionLoginPromise from './action-login-promise'
import actionToken from './action-token'

import {history} from "../history/index";

export default function actionLogin(login, password) {
    return async dispatch => {
       debugger
        let result = await dispatch(actionLoginPromise(login, password))
        
        if (result){
            localStorage.setItem("userToken" , result)
            history.push('/')
            dispatch(actionToken(result))  
        }
        else{
            history.push('/login')
        }
        
    }
}