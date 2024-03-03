import { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
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
    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text, delta, tick])

    const handleResume = () => {
        window.open("https://drive.google.com/file/d/1GyXQaNuuA8Q71N557TXbyG9LZI4-DcsU/view?usp=sharing", '_blank')
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisable }) => 
                            <div className={isVisable ? "animated__animated animate__fadeIn" : ""}>
                                <h1>{`Hi I'm `}<span className="wrap">{text}</span></h1>
                                <p>
                                    Currently a Second Year studying Computer Engineering Innovation student at Queen's University. I have a passion for entreprenuership and innovation. I also do photography.
                                </p>
                                <button onClick={handleResume}>Resumé <ArrowRightCircle size={25} /></button>
                            </div>
                        } 
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}