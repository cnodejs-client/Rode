export const LOGOUT = 'LOGOUT'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export function logout () {
  return {
    type: LOGOUT
  }
}

export function loginRequest (token) {
  return {
    type: LOGIN_REQUEST,
    token
  }
}

export function loginSuccess (token) {
  return {
    type: LOGIN_SUCCESS,
    token
  }
}

export function loginError () {
  return {
    type: LOGIN_ERROR
  }
}