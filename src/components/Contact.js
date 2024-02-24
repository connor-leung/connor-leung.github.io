import { useState } from "react"
import { Col, Container, Row, Icon } from "react-bootstrap"
import "./Contact.css"
import { Linkedin, Phone, Envelope} from "react-bootstrap-icons"

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails]  = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonText('Sending...')
        let response = await fetch(`${"https://www.connorleung.com"}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        }) 
        setButtonText("Send")
        let result = await response.json()
        setFormDetails(formInitialDetails)
        if (result.code === 200) {
            setStatus({ success: true, message: "Message sent successfully"})
        } else {
            setStatus({ success: false, message: "Something went wrong, please try again later."})
        }
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                            </Col>
                            <Col sm={12} className="px-1">
                                <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message && 
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Row>
                <Row>
                    <div className="contact-info">
                        <h3>Or You Can Find Me Here</h3>
                        <div className="contact-details">
                            <Col>
                                <p>
                                    <Phone/> +1 (778) 788 6178
                                    |  <Envelope/> <a href="mailto:connor.leung@queensu.ca" style={{color:"white"}}>connor.leung@queensu.ca</a> <span> </span>
                                    |  <Linkedin/> <a href="https://www.linkedin.com/in/connorleung" style={{color:"white"}}>ConnorLeung</a>
                                </p>
                            </Col>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}