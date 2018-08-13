import * as myActions from '../ActionDescriptions'

export default function user(state = {isLoggedIn: false}, action) {
    console.log(action.type)
    switch (action.type) {
            case myActions.USER_LOGIN:
                return {
                    ...state, user:{...user, isLoggedIn: true}
                }
            
            case myActions.USER_LOGOUT:
                return {
                   ...state, user:{isLoggedIn: false}
                 }

            default:
                return {user:{isLoggedIn: false, junk: false}}
    }
}    
