import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/connorleung/"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://github.com/connor-leung"><img src={navIcon2} alt="Icon"/></a>
                            <a href="https://www.instagram.com/captures.cl"><img src={navIcon3} alt="Icon"/></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}