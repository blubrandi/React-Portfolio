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
                        <a href="https://github.com/blubrandi" target="new"> <img src={GithubLogo} alt=""/></a>
                        <a href="https://www.linkedin.com/in/brandi-the-ios-dev/" target="new"> <img src={LinkedInLogo} alt=""/></a>
                        <a href="mailto:branditheiosdev@gmail.com"><img src={EmailLogo} alt=""/></a>
                    </div>
                </div>
                <div className="right">
                    <h3>I am an 📱 iOS/Mobile Developer, 👩‍💻 Web Developer, and 🎨 UI Designer with a passion for life, experiences, and all things Disney.</h3>

                    <p>I'm a proven leader who believes in empowering my team members by enabling them to bring the best version of themselves to any project. I believe in celebrating diverse skillsets and abilities that others contribute, in order to meet and exceed organizational goals.</p>

                    <p>I have a long history working in IT, Web & Graphic Design, and working with clients to create a professional digital presence.</p>
                </div>
            </div>
        </div>
    )
}