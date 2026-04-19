import { CSSProperties } from 'react'
import {Html, Body, Container, Text, Link, Preview, Tailwind} from "@react-email/components"

const WelcomeTemplate = ({name}:{name:string}) =>{
    return (
        <Html>
            <Preview>Welcome Aboard!</Preview>
            <Tailwind>
            <Body style={body}>
                <Container>
                    <Text style={heading}>Hello {name}</Text>
                    <Link href="https://codewithmosh.com">Get Started</Link>
                </Container>
            </Body>
            </Tailwind>
        </Html>
    )
}

const body: CSSProperties = {
    background: 'white'
}

const heading: CSSProperties = {
    fontSize: 32
}

export default WelcomeTemplate
