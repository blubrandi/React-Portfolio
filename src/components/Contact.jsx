import React from "react"

const contactClasses = `content`

export default function Contact() {
    return (
    <div className={contactClasses}>
        <div className="content-row">
            <div className="left">
            <p className="largeText">🤩</p> 
            </div>
            <div className="right">
            <p>
            <strong>I look forward to speaking with you and getting to know you!</strong>
        </p>
        <p>
            I'm currently located in Albuquerque, NM and am available for remote work within the United States.
        </p>
        <p><strong>Email:</strong>  BrandiTheiOSDev@gmail.com</p>
        <p><strong>Github:</strong> @blubrandi</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/brandi-the-ios-dev/" target="new">https://www.linkedin.com/in/brandi-the-ios-dev/</a>
            </p>
            </div>
        </div>
    </div>
    )
}