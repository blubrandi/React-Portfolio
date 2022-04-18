import React from "react"

import IOSProjectList from "./iOSProjectList"

const iOSClasses = `content`

export default function iOS() {
    return (
        <div className={iOSClasses}>
         <h2>Some of my favorite iOS/Mobile Projects</h2>
         <IOSProjectList />
        </div>
    )
}