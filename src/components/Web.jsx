import React from "react"

import WebProjectList from "./WebProjectList"

const webClasses = `content`

export default function Web() {
    return (
        <div className={webClasses}>
            <WebProjectList />
            <p>More Web Projects will be added soon!  In the meantime, please feel free to browse my <a href="https://github.com/blubrandi" target="new"> Github</a> to see more of my Web work!</p>
        </div>
    )
}