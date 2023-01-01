import { useEffect, useState } from 'react'
import auth from '../styles/ContactPage.module.scss'
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'
import router from 'next/router'

export function decodeToken(token){
    return jwt.decode(atob(token))
}
export function encodeToken(token){
    return btoa(token)
}
export function setAuthCookie(encodeToken){
    // logic for set session and time limit
    Cookies.set('random',encodeToken,{ expires:1 })
    router.push('/admin')
}
export function getAuthCookie(){
    if(Cookies.get('random') === undefined) return 'hehe'
    return Cookies.get('random')
}
export function alreadyLogin(){
    if(getAuthCookie() !== 'hehe'){
        const getToken = decodeToken(getAuthCookie())
        if(getToken.admin === true){
            router.push('/admin')
        }
    }
}
export function notLogin(){
    if(getAuthCookie() === 'hehe'){
        router.push('/auth')
    }
}

export default function Auth(props) {
    useEffect(()=>{
        alreadyLogin()
    },[])

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [errorMsg,setError] = useState('')

    async function handleLogin(){
        const res = await fetch(`api/auth`,{
            method:`POST`,
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({username,password})
        }).then((t)=>t.json())
    
        const error = res.error
        if(error !== undefined) {
            setError(error)
            return
        }

        setAuthCookie(encodeToken(res.token))
    }

    return (
        <div className={auth.authContainer}>
            <div className={auth.authTtile}>
                login
            </div>
            <div className={auth.ContactInput}>
                username
                <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className={auth.ContactInput}>
                password
                <input type="password"  onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            {
                errorMsg === '' ? null :
                <div className={auth.authErrorMessage}>
                    {errorMsg}
                </div>
            }
            <button className={auth.resumeButton} onClick={handleLogin}>
                login
            </button>
        </div>
    )
}