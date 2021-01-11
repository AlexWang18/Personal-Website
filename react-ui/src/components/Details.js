import React from 'react'
const texts = [
    'Java', 'Python', 'HTML/CSS/JS', 'React', 'Node.js'
]

const Details = (props) => {
    return (
        <>
            <h3>Alex Wang</h3>
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