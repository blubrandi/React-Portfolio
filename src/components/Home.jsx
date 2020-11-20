import React from "react"

import BrandiPic from "../assets/Brandi.jpg"
import GithubLogo from "../assets/github-icon.png"
import LinkedInLogo from "../assets/linkedin-icon.png"
import EmailLogo from "../assets/email-icon.png"



const homeClasses = `home content`

export default function Home() {
    return (
        <div className={homeClasses}>
            <div className="content-row">
                <div className="left">
                    <img src={BrandiPic} className="brandi-home" alt="Brandi The iOS Developer Picture"/>
                    <div className="home-icons">
                        <img src={GithubLogo} alt=""/>
                        <img src={LinkedInLogo} alt=""/>
                        <img src={EmailLogo} alt=""/>
                    </div>
                </div>
                <div className="right">
                    <h3>I am an 📱 iOS Developer, 👩‍💻 Web Developer, and 🎨 UI Designer with a passion for life, experiences, and all things Disney.</h3>

                    <p>I'm a proven leader who believes in empowering my team members by enabling them to bring the best version of themselves to any project. I believe in celebrating diverse skillsets and abilities that others contribute, in order to meet and exceed organizational goals.</p>

                    <p>I have a long history working in IT, Web & Graphic Design, and working with clients to create a professional digital presence.</p>
                </div>
            </div>
        </div>
    )
}