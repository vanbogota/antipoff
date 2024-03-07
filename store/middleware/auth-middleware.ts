
import { ThunkAction } from 'redux-thunk';
import { setToken } from '../slice/auth-slice';
import { RootState } from '../store';

//данные для запроса, согласно требованиям провайдера
const state = {
    email: "eve.holt@reqres.in",
    password: "pistol"
}

export const registerUser = (email: any, password: any): ThunkAction<void, RootState, unknown, any> => async (dispatch, getState) => {
    console.log(email, password);

    const initData = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    }

    let response

    try {
        response = await fetch('https://reqres.in/api/register', initData);
        if (response.ok) {
            const data = await response.json();
            dispatch(setToken(data.token));
        } else {
            console.log('Результат запроса при регистрации', response.status)
        }
    } catch (error) {
        console.log('Ошибка при регистрации:', error);
    }
}

// export const logout = (): ThunkAction<void, RootState, unknown, any> => async (dispatch, getState) => {
//     localStorage.removeItem('userToken');
//     dispatch(logOut())
// }

// export const authMiddleware = (store: any) => (next: any) => async (action: any) => {
//     if (action.type === 'auth/signup') {

//         const initData = {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(state)
//         }

//         let response

//         try {
//             response = await fetch('https://reqres.in/api/register', initData);
//             if (response.ok) {
//                 const data = await response.json();
//                 store.dispatch(setToken(data.token));
//             } else {
//                 console.log('Результат запроса при регистрации', response.status)
//             }
//         } catch (error) {
//             console.log('Ошибка при регистрации:', error);
//         }

//     } else if (action.type === 'auth/logout') {
//         localStorage.removeItem('userToken');
//         store.dispatch(logOut())
//     }
//     return next(action);
// }

