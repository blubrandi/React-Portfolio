import React from "react"

import WebProject from "./WebProject"

import VueToDoImg from "../assets/VueToDo.png"

export default function WebProjectList() {
    return (
        <>
            <WebProject imgURL={VueToDoImg} projectTitle="VueToDo" type="Solo Project" description="VueToDo is a simple web todo list written in Vue with JavaScript." contributions="UI, Vue, LocalStorage for persisitence, deployment via Netlify." githubUrl="https://github.com/blubrandi/VueTodo" webUrl="https://serene-archimedes-856275.netlify.app/" />

        </>
    )
}