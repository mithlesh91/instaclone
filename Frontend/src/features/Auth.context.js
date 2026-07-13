import { createContext } from "react";

const authcontex = createContext()
const [user, setuser] = useState(null)
const [loading, setloading] = useState(null)

export const provider = ({children}) => {
    return <authcontex.Provider value={{user, setuser, loading, setloading}}>
        {children}
    </authcontex.Provider>
}