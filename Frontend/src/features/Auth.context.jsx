import { createContext, useState } from "react";

export const Authcontext = createContext()

 export const ContextProvider = ({ children }) => {
    const [user, setuser] = useState("")
    const [loading, setloading] = useState(false)
    return (
        <Authcontext.Provider value={{ user, setuser, loading, setloading }}>
            {children}
        </Authcontext.Provider>
    )
}

