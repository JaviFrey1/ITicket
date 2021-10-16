import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userData from '../actions/userData'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const dispatch = useDispatch()
    const activeUser = useSelector(state => state.activeUser)

    useEffect(() => {
        dispatch(userData())
    }, [dispatch])

    const value = {
        activeUser
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}