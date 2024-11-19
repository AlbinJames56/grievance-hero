import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./About.css";
import minnalImg from "../assets/ma-icon.png";
import Footer from "../Components/Footer";
const About = () => {
  const aboutData = [
    {
      title: "Our Mission",
      description:
        "In a city that never sleeps, problems don’t either. But now, there’s a hero ready to listen, act, and resolve. Minnal Murali’s mission is to empower citizens to voice their concerns, ensuring that no grievance goes unheard.",
    },
    {
      title: "How It Works",
      description:
        "Submit your concern, receive a unique ticket ID, heroic intervention, and get real-time updates as we work on your case, with a commitment to swift and effective solutions.",
    },
    {
      title: "Meet Our Hero",
      description:
        "Minnal Murali, known for his lightning-fast speed and unwavering courage, is here to defend justice. This app allows him to connect with the community and make a difference in the lives of everyday citizens.",
    },
    {
      title: "Why Choose Us?",
      description:
        "Our platform isn’t just a grievance redressal system; it’s a promise of hope, speed, and accountability. We prioritize every concern with the same dedication as Murali would if he were solving it in person.",
    },
  ];

  return (
    <Container className="my-md-5 pt-md-5">
      <Row>
        <Col sm={5} className="d-flex py-5 justify-content-center">
          <img width={300} src={minnalImg} alt="" />
        </Col>
        <Col sm={6} className="p-4 mt-md-4">
          <h5 className="text-warning mt-md-5">
            Empowering Justice with Lightning Speed Welcome to the Minnal Murali </h5>
            <p className="text-light">Grievance Portal Our journey begins in the heart of Kerala, where
            the courage and quick actions of our local hero, Minnal Murali,
            inspire us to stand up for justice every day. With unmatched speed
            and unwavering dedication, Minnal Murali fights against injustice,
            making our communities safer and more secure. Through this portal,
            we bring his vision to life by empowering you to report grievances
            swiftly and efficiently. Join us in creating a fair and just
            society, one grievance at a time.</p> 
         
        </Col>
      </Row>
      <Row>
        {aboutData.map((item, index) => (
          <Col md={6} className="mb-4" key={index}>
            <Card className="about-card  rounded-pill">
              <div className="card-front  rounded-pill">
                <Card.Body>
                  <Card.Title className="card-title">{item.title}</Card.Title>
                </Card.Body>
              </div>
              <div className="card-back rounded-pill">
                <Card.Body>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer/>
    </Container>
  );
};

export default About;
