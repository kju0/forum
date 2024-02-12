'use client'

import {useRouter} from "next/navigation"
export default function DetailLink(props){
    let router = useRouter()
    useRouter()
    return (
        // <button onClick={()=>{router.push('/edit/' + props.id)}}>버튼</button>
        <button onClick={()=>{router.push('/potato/' + props.id)}}>버튼</button>
    )
}