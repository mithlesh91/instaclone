import { login, register } from "../service/Auth.api";
import { useContext } from "react";
import { Authcontext } from '../../Auth.context'

export function useAuth() {
    const context = useContext(Authcontext)
    const { user, setuser, loading, setloading } = context

    const registerhandle = async (username, email, password) => {
        setloading(true)
        try {
            const data = await register(username, email, password)
            setuser(data.user)
        }
        catch (error) {
            console.error(error)
        } finally {
            setloading(false)
        }
    }

    const loginhandle = async (username, password) => {
        setloading(true)
        try {
            const data = await login(username, password)
            setuser(data.user)
        }
        catch (error) {
            console.error(error)
        } finally {
            setloading(false)
        }
    }
    return { user, loading, registerhandle,loginhandle }
}