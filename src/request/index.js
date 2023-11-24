import http from "./axios";

export const getPublicKey = function(data){
    return http.post('/system/uncheck/publicKey', data)
}

export const login = function(data){
    return http.post('/system/uncheck/login', data)
}