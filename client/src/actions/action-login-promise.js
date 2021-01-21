
import actionPromise from './action-promise'

export default function actionLoginPromise(login, password) {
       
    let promise = fetch("/login", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ login, password })
    })
        .then(res => res.json())
    
    return actionPromise('login', promise)
}