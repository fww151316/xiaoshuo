import Cookies from 'js-cookie'
const TokenKey = 'token'


export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function getToken() {  //取token
    return Cookies.get(TokenKey)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

// 存书id
export function setToken2(name,id) {
    return Cookies.set(name, id)
}

export function getToken2(name) {  //取token
    return Cookies.get(name)
}

export function removeToken2(name) {
    return Cookies.remove(name)
}


