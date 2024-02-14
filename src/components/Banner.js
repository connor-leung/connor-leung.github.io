import { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headshot from '../assets/img/QTMA Headshots R1 (27 of 31).jpg'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import './Banner.css'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Connor"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisable }) => 
                            <div className={isVisable ? "animated__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi I'm `}<span className="wrap">{text}</span></h1>
                                <p>
                                    Currently a Second Year studying Computer Engineering Innovation student at Queen's University. I have a passion for entreprenuership and innovation.
                                </p>
                                <button onClick={() => window.location.href="https://drive.google.com/file/d/1g-b8p9_CTkDTySJ5vPEsR01jmzjpHFVB/view?usp=sharing"}>Resume <ArrowRightCircle size={25} /></button>
                            </div>
                        } 
                        </TrackVisibility>
                    </Col>
                    <Col>
                        {/* <img src={headshot} className="profile"/>  */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}