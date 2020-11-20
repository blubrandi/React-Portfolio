import React from "react"

import GithubLogo from "../assets/github-icon.png"

export default function IOSProject(props) {
    return (
        <div className="iOS-project-container">
            <div className="iOS-image">
                <img src={props.imgURL} alt={props.projectTitle} />
            </div>
            <div className="ios-text">
                <div className="iOS-info">
                <h3>{props.projectTitle}</h3>
                <p>⇢ <i>{props.type}</i></p>
                <p>{props.description}</p>
                <h3>My Contributions</h3>
                <p>{props.contributions}</p>
                </div>
                <div className="ios-project-link">
                <img src={GithubLogo} /><a href={props.githubUrl} target="new">View On Github</a>
                </div>
            </div>
        </div>
    )
}