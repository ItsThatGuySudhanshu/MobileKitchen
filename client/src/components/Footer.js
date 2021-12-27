import { Col, Container, Row, Form, Button} from "react-bootstrap";
import '../styles/footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <Row>
                <Col>
                Copyright C 2021
                </Col>
                <Col>
                Team:
                <br/>
                Sudhanshu Moghe - Fullstack Developer
                <br />
                Shaleen Srivastava - Fullstack Developer
                <br />
                Dillon Patel - UX designer
                </Col>
                <Col>
                <p id="contact-us-text">Contact Us!</p>

                </Col>
            </Row>

        </footer>
    );
}

export default Footer;