import React from 'react'
import { Container, Header, List } from 'semantic-ui-react'

const texts = [
    'Java', 'Python', 'HTML/CSS/JS', 'React', 'Node.js'
]
const Body = () => {
    return (
        <Container textAlign='center'>
            <Header as='h2' textAlign = 'center'>About Me</Header>
            <i class="china flag"></i> <i class="us flag"></i>
            <p>Hi I'm Alex Wang, a first year student at the University of Pittsburgh planning to major in Computer Science and minor in Economics and Philosophy.
            I am looking for a Software Engineering based internship position in 2021 which will enable me to continue to further my technical and soft skills
            and gain some valuable work experience. When I am not coding or doing coursework, I spend the bulk of my time either lifting, hiking, or cooking.
            </p>
            <Header as='h2' floated='left'>Skills</Header>
            <div>
                <List animated floated='left' verticalAlign='bottom'>
                    {texts.map(t => <List.Item>{t}</List.Item>)}
                </List>
            </div>
            <br></br>
            <div>
                <Header floated='left' as='h2'>Current Goals</Header>
                <List animated floated='left' items={['Continue to grow and learn more', 'Bench 200 Pounds', 'Finish this website and deploy it in a week']} />
            </div>

        </Container>
    )
}

export { Body }