import adnan from "../assets/adnan.png"
import backbutton from "../assets/button.png"
import demo from "../assets/demo.png"
import docs from "../assets/docs.png"
import logo from "../assets/mmplogo.png"

function Header () {
    return(
        <header className="header">
            <div className="top">
                <div className="top-left">
                    <img src={logo} alt="mmp" className="logo"/>
                    <span className="logo-text"> MakeMyPass</span>
                </div>
                <div className="top-right">
                    <p className="hello">Hi, adnankattekaden43</p>
                    <img src={adnan} alt="mr adnan" className="adnan" />
                </div>
            </div>
            
            <div className="mid-row">
                <div className="middle">
                    <img src={backbutton} alt="back buton" className="back-button"/>
                    <img src={demo} alt="logo" className="demo" />
                <span className="title">Paradox Productions Meet-Up</span>
            </div>
                <button className="mid-right">
                    <img src={docs} alt="docs icon" className="docs"/> View Docs
                </button>
            </div>

            <nav className="navbar">
                <span>Overview</span>
                <span>Insights</span>
                <span>Guests</span>
                <span>|</span>
                <span>Event Page</span>
                <span>Form Builder</span>
                <span>|</span>
                <span>Scan QR</span>
                <span>In-Event</span>
                <span>|</span>
                <span>Logs</span>
                <span>Finance</span>
                <span>|</span>
                <span>Post Event</span>
                <span>Child Events</span>
            </nav>
        </header>
    )
}
export default Header
