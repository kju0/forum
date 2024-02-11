'use client'

import {useRouter} from "next/navigation"
export default function DetailLink(){
    let router = useRouter()
    useRouter()
    return (
        <button onClick={()=>{router.push('/')}}>버튼</button>
    )
}