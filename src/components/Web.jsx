import React from "react"

import WebProjectList from "./WebProjectList"

const webClasses = `content`

export default function Web() {
    return (
        <div className={webClasses}>
        <h2>Some of my favorite Web Projects</h2>
            <p>Images are scrollable to allow viewing of the entire front page.</p>
            <WebProjectList />
        </div>
    )
}
