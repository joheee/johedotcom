import { useEffect } from "react"
import { notLogin } from "./auth"

export default function Admin(){

    useEffect(()=>{
        notLogin()
    },[])

    return (
        <div className="">
            this is admin page
        </div>
    )
}