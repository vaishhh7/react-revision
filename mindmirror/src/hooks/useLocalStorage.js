import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue){

    const [value, setValue]= useState(()=>{
        const saved= localStorage.getItem(key);
        return saved ? JSON.parse(saved) : initialValue;
    });

    const updateValue= (newValue)=>{
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
        window.dispatchEvent(new Event("storage")); // 🔥 THIS LINE
    }

    useEffect(()=>{

        const handleStorage = ()=>{
            const saved = localStorage.getItem(key);
            setValue(saved ? JSON.parse(saved) : initialValue);
        }

        window.addEventListener("storage", handleStorage);

        return ()=> window.removeEventListener("storage", handleStorage);

    },[key]);

    return [value, updateValue];
}

export default useLocalStorage;
