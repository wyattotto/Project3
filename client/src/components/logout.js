import { GoogleLogin, GoogleLogout } from 'react-google-login'

const clientId = "505822463133-un5iefgvk2dl5umafed35mo6lrt4lqpa.apps.googleusercontent.com"

function Logout() {

    const onSuccess = (res) => {
        console.log("Logout Success!")
    }

    return(
        <div id='signOutButton'>
            <GoogleLogout
                clientId={clientId}
                buttonText={"LogOut"}
                onLogoutSuccess={onSuccess}
                />
        </div>
    )
}

export default Logout;