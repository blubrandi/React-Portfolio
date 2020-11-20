import React from "react"

import BrandiPainting from "../assets/brandi-painting.png"

import SwiftLogo from "../assets/1200px-Swift_logo.png"
import PythonLogo from "../assets/python.png"
import HTMLLogo from "../assets/html.png"
import SASS from "../assets/sass.png"
import LESS from "../assets/less.png"
import SQLite from "../assets/sqlite.png"
import ReactLogo from "../assets/react.png"
import JavaScriptLogo from "../assets/JavaScript-logo.png"

const aboutClasses = `content`

export default function About() {
    return (
        <div className={aboutClasses}>
            <h2>Hi, I'm Brandi! 👋 </h2>
            <p>
                I've been building websites for far too many decades to mention.  My passion of building websites started in the late 90's, when I learned that any average could create content that is at the fingertips of the (almost) entire world.
            </p>
            <p>
                I was immediately hooked, and what I considered a hobby quickly became my life's work.  During the past decades, I've built what feels like thousands of websites for clients that included sites for political campaigns, attorneys, religious organizations, marketing firms, and sports clubs.  I've also worked as an employee doing web design work for a large local medical practice and online startup building marketing websites for Realtors and real estate agents.
            </p>
            <p>
                Wanting to level up, I began attending <a href="https://lambdaschool.com" target="new">Lambda School</a> in 2018 and went through both Full-stack Web Development and iOS Development curricula.  After studying my core tracks, I learned Data Structures & Algorithms, and have become fully-endorsed by the school as an employable developer.
            </p>
            <p>
                Prior to "Web Explosion", I was a artist and musician.  I've been a photographer for even longer than I started building websites, and my love of art easily translated to the UI Design aspect of being a web designer.  One of my biggest qualities of being a software developer, is that I have a keen eye for design.  But I'm not only stringent about User Interfaces being "pretty", they have to make sense and be usable.  The design of an interface has to make sense for the ease of the user, or it's pointless.
            </p>
            <div>
                <h3>Languages, Frameworks & SDKs/Libraries</h3>
                <div className="languages">
                    <div className="language">
                        <img src={SwiftLogo} alt="" /><p>Swift</p>
                    </div>
                    <div className="language">
                        <img src={PythonLogo} alt="" /><p>Python</p>
                    </div>
                    <div className="language">
                        <img src={HTMLLogo} alt="" /><p>HTML/CSS</p>
                    </div>
                    <div className="language">
                        <img src={ReactLogo} alt="" /><p>React</p>
                    </div>
                    <div className="language">
                        <img src={JavaScriptLogo} alt="" /><p>JavaScript</p>
                    </div>
                    <div className="language">
                        <img src={SASS} alt="" /><p>SASS</p>
                    </div>
                    <div className="language">
                        <img src={LESS} alt="" /><p>LESS</p>
                    </div>
                    <div className="language">
                        <img src={SQLite} alt="" /><p>SQLite</p>
                    </div>
                </div>
            </div>
            <h3>My Favorite Apple APIs:</h3>
        
            <p>UIKIt, MapKit & CoreLocation, AVKit, CoreData</p>
            <h3>Other Platforms, Frameworks, and Libraries</h3>
            <p>MapBox, CocoaPods, Carthage, Django, Firebase/Firestore, Heroku, Netlify, WordPress, Divi</p>
            <h3>Strong Working knowledge of:</h3>
            <p>Objective-C, Redux, Node.js, Express, PostgreSQL, Vue </p>
            <h3>My Hobbies</h3>
            <p className="last">
                Painting, Photo-taking and editing, gaming (support main), cat (and dog) lady, staring at maps for hours, star-gazing, selecting random ingredients to make one-of-a-kind soups.
            </p>
        </div>
    )
}