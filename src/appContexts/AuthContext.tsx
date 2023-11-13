import { useState, createContext, useContext } from 'react'

interface userType {
    id: number,
    name: string,
    email: string,
    token: string
}

type AuthContextType = {
    user: userType | null,
    login: (user: userType) => void,
    logout: () => void,
    isLoggedIn: boolean,
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => { },
    logout: () => { },
    isLoggedIn: false,
})

export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
    const [user, setUser] = useState<userType | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = (user: userType) => {
        setUser(user)
        setIsLoggedIn(true)
    }

    const logout = () => {
        setUser(null)
        setIsLoggedIn(false)
    }

    const value = {
        user,
        login,
        logout,
        isLoggedIn,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider