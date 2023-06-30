import { GoogleLogin } from 'react-google-login'

const clientId = "505822463133-un5iefgvk2dl5umafed35mo6lrt4lqpa.apps.googleusercontent.com"

function Login() {

    const onSuccess = (res) => {
        console.log("Login Success! Current User:", res.profileObj)
    }
    const onFailure = (res) => {
        console.log("LOGIN FAIL", res)
    }

        return(
            <div id="signInButton">
                <GoogleLogin 
                    clientId={clientId}
                    buttonText='Login'
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
        )
}

export default Login;