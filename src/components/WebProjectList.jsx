import React from "react"

import WebProject from "./WebProject"

import VueToDoImg from "../assets/VueToDo.png"
import ReplateDocs from "../assets/replate-endpoints.png"
import Hart from "../assets/hartconstruction.jpg"
import MH from "../assets/mikehacker.jpg"
import OneThirtyFive from "../assets/135-Degrees.png"
import JSCO from "../assets/jscobooth.jpg"

export default function WebProjectList() {
    return (
        <>

            <WebProject imgURL={ReplateDocs} projectTitle="RePlate Backend" type="Collaborative" description="This is a Backend API built for a the RePlate app.  Full backend documentation provided via View on Web Link." contributions="Node.js, Express, Heroku Deployment, Authentication, and JSON Web Tokens." githubUrl="https://github.com/blubrandi/Backend---Brandi-Bailey" webUrl="https://replate-endpoints.netlify.app" />

            <WebProject imgURL={VueToDoImg} projectTitle="VueToDo" type="Solo Project" description="VueToDo is a simple web todo list written in Vue with JavaScript." contributions="UI, Vue, LocalStorage for persisitence, deployment via Netlify." githubUrl="https://github.com/blubrandi/VueTodo" webUrl="https://serene-archimedes-856275.netlify.app/" />

            <WebProject imgURL={Hart} projectTitle="Hart Construction" type="Contract Work" description="The Hart Construction site was built on WordPress as a contractor project." contributions="I was responsible for building out the custom WordPress site from the ground up, responsible for all styles and development from a blank WordPress site." webUrl="https://www.hartconstruction.net"  githubUrl="none" />

            <WebProject imgURL={MH} projectTitle="Mike Hacker, Attorney at Law" type="Personal Client" description="This site was designed and created by me by my personal client, Mike Hacker." contributions="I was responsible for building out the custom WordPress site from the ground up, responsible for all styles and development from a blank WordPress site, as well as deploying and maintaining his website." githubUrl="none" webUrl="none" />

            <WebProject imgURL={OneThirtyFive} projectTitle="135 Degrees" type="Contract Work" description="The 135 Degrees catering site was built on WordPress as a contractor project." contributions="I was responsible for building out the custom WordPress site from the ground up, responsible for all styles and development from a blank WordPress site." githubUrl="none" webUrl="https://www.135degreesnm.com" />

            <WebProject imgURL={JSCO} projectTitle="JSCOBooth" type="Personal Client" description="I built the JSCOBooth website for a personal client for their Photobooth Business." contributions="I was responsible for building out the custom WordPress site from the ground up, responsible for all styles and development from a blank WordPress site, as well as deploying and maintaining his website." githubUrl="none" webUrl="none" />

        </>
    )
}