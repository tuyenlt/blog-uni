import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({
    user: undefined,
    login: () => { },
    logout: () => { },
})

export const useAuthContext = () => useContext(AuthContext)

export function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    const login = async (email, password) => {
        try {
            const response = await api.post("/user/login", {
                email,
                password
            })

            if (response.status === 200) {
                setUser(response.data)
                navigate("/home")
            }
        } catch (err) {
            console.error("Login failed", err)
        }
    }

    const logout = () => {
        setUser(null)
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}