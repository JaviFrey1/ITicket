import React from "react";
import {Route, Redirect} from 'react-router-dom'
import { useAuth } from "./AuthContext";

export default function PrivateRouteAdmin({component:Component, ...rest}){
    const {activeUser} = useAuth()
    return (
        <Route
            {...rest}
            render= {
            (props)=>{
                return activeUser.isAdmin ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/home'/>
                );
            }}/>
        
    )
}