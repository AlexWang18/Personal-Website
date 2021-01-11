import React from 'react'
const texts = [
    'Java', 'Python', 'HTML/CSS/JS', 'React', 'Node.js'
]
const Tabs = (props) => {
    return (
        <div className = "tab">
            <button className = "About Me" onClick = {props.handleAboutMe}>About Me</button>
            <button className = "Portfolio" onClick = {props.handlePortfolio}>Porfolio</button>
            <button className = "Gallery" onClick = {props.handleGallery}>Gallery</button>
            <button className = "Contact" onClick = {props.handleContact}>Contact</button>
        </div>
    )
}
const Details = (props) => {
    return (
        <>
            <h2>Alex Wang</h2>
            <Tabs />
            <h3 className = "intro">Student Developer</h3>
            <h3>Resume</h3>
            <button onClick={props.handleResume}>Click to view</button>
            <h3>Technical Skills</h3>
            <ul>
                {texts.map((text, i) => (
                    <Skill key={i} text={text} />
                ))}
            </ul>
        </>
    )
}

const Skill = ({ text }) => {
    return (
        <li>
            {text}
        </li>
    )
}

export default Details