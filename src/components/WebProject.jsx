import React from "react"

import GithubLogo from "../assets/github-icon.png"
import WebIcon from "../assets/web-icon.png"

export default function WebProject(props) {

    let webHidden = ``
    let githubHidden = ``

    if (props.webUrl === "none") {
        webHidden = `hidden`
    }

    if (props.githubUrl == "none") {
        githubHidden = `hidden`
    }

    return (
        <div className="Web-project-container">
            <div className="Web-image site-image">
                <img src={props.imgURL} alt={props.projectTitle} />
            </div>
            <div className="web-text">
                <div className="web-info">
                <h3>{props.projectTitle}</h3>
                <p>⇢ <i>{props.type}</i></p>
                <p>{props.description}</p>
                <h3>My Contributions</h3>
                <p>{props.contributions}</p>
                </div>
                <div className="web-project-link">
                <div className={githubHidden}>
                <img src={GithubLogo} /><a href={props.githubUrl} target="new">View On Github</a>
                </div>
                </div>
                <div className="web-project-link">
                <div className={webHidden}>
                <img src={WebIcon} /><a href={props.webUrl} target="new">View On The Web</a>
                </div>
                </div>
            </div>
        </div>
    )
}