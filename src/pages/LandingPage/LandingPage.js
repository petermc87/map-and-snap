// AuthPage.js
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import NavBar from "../../components/NavBar/NavBar"
import IntroSection from '../../components/IntroSection/IntroSection'
import InfoCard from '../../components/InfoCard/InfoCard'

export default function AuthPage(props){
    return(
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <IntroSection />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />

                <h1>Login and SignUp</h1>
                <SignUpForm setUser={props.setUser}/>
                <LoginForm setUser={props.setUser}/>
            </main>
        </>
    )
}