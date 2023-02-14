import { getToken } from "./users-service"

const BASE_URL = "/api/users"

export default async function sendRequest(url, method="GET", payload=null) {
    const options = { method }
    if (payload) {
        options.headers = { "Content-Type": "application/json" }
        options.body = JSON.stringify(payload)
    }  

    
    const token = getToken()
    //if there's a token, include it in req
    if(token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token}`
    }

    const res = await fetch(url, options) 
    if(res.ok) {
        return res.json()
    } else {
        throw new Error("Bad Request")
    }
}


export async function signUp(userData) {
    return sendRequest(BASE_URL, "POST", userData)
}

export async function login(credentials) {
    return sendRequest(BASE_URL + "/login", "POST", credentials)
}

export async function checkToken() {
    return sendRequest(BASE_URL + "/check-token")
}

export async function createNote(noteData) {
    return sendRequest(BASE_URL + "/create-note", "POST", noteData)
}
export async function getMyNotes() {
    return sendRequest(BASE_URL + "/get-my-notes")
}