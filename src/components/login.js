import React, {useContext} from "react"
import { IdentityContext } from "../../identity-context"
import Layout from './layout'
import Container from './Container/Container'

const Login = () => {
    const {netlifyIdentity} = useContext(IdentityContext)
    return (
    <Layout>
    <Container text first>   
        
        <h1>Login Page</h1>
        <button onClick={ ()=>{
            netlifyIdentity.open()
            }}
            >
                Login
                </button>
        </Container>
    </Layout>
    )

}
export default Login