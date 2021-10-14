import React from "react";
import {Route, Redirect} from 'react-router-dom'
import { useAuth } from "./AuthContext";

export default function PrivateRouteUser({component:Component, ...rest}){
    const {activeUser} = useAuth()
    return (
        <Route
            {...rest}
            render={(props)=>{
                return activeUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/login'/>
                );
            }}/>
    )
}