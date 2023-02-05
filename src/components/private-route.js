import React, {Component, useContext} from 'react'
import {navigate} from 'gatsby'
import { IdentityContext } from '../../identity-context'


const PrivateRoute = ({component: Component, location, ...rest}) => {
    const {user} = useContext(IdentityContext)
    console.log(user)
    if (!user && location.pathname !== '/app/login') {
       navigate('/app/login')
      
        return null
    }
    return <Component {...rest} />

}


export default PrivateRoute
