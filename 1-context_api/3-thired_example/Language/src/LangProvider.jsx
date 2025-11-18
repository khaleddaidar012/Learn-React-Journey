
import { createContext } from 'react';
import {React , useContext,useState} from 'react'

const LangContext = createContext();



const LangProvider = ({children}) => {
    const [lang,setLang] = useState("en");
    const toggleLang =() => setLang((prev) =>(prev === "en" ? "ar" : "en"));
    const text = lang === "en" ? "hello world" : "مرحبا بالعالم"
  return (
    <LangContext.Provider value={{lang,toggleLang,text}}>
        {children}
    </LangContext.Provider>
  )
}

export default LangProvider
export const useLang = () => useContext(LangContext)