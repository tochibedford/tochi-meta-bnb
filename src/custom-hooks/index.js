import { useEffect } from "react"

export const useStopScroll = ()=>{
    useEffect(()=>{
        document.querySelector("body").style.overflowY = "hidden"
        return ()=>{
            document.querySelector("body").style.overflowY = "auto"
        }
    }, [])
}