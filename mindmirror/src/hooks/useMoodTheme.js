import {useEffect} from "react"

function useMoodTheme(mood){

    useEffect(()=>{

        const body= document.body

        if (mood==="happy"){
            body.style.backgroundColor= "#3B2F63"   // deep lavender
            body.style.color= "#F3E8FF"
        }

        else if (mood=== "calm"){
            body.style.backgroundColor="#1E3A5F"   // navy blue calm
            body.style.color= "#DBEAFE"
        }

        else if (mood==="sad"){
            body.style.backgroundColor="#2C2C2C"   // dark grey
            body.style.color= "#E5E5E5"
        }

        else {
            body.style.backgroundColor="#121212"   // default dark
            body.style.color="#FFFFFF"
        }

    },[mood])
}

export default useMoodTheme
