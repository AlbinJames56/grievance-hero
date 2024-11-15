import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import lookForward from "../assets/lookForward.png";
import "./grievance.css";
const GrievanceSubmissionPage = () => {
  // State for tracking form inputs
  const [grievanceDetails, setGrievanceDetails] = useState({
    name: "",
    email: "",
    issue: "",
    description: "",
  });
  const [trackingId, setTrackingId] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);
  const [submit, setSubmit] = useState(true);
  // Handle form inputs for submitting a new grievance
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGrievanceDetails({ ...grievanceDetails, [name]: value });
  };

  // Handle form submission for new grievance
  const handleSubmitGrievance = (e) => {
    e.preventDefault();
    // Send grievanceDetails to the backend API for submission
    console.log("Grievance submitted:", grievanceDetails);
    // Reset form
    setGrievanceDetails({ name: "", email: "", issue: "", description: "" });
    alert("Grievance submitted successfully!");
  };

  const toggleTrackGrievance=()=>{
setSubmit(!submit)
  }

  // Handle tracking ID submission
  const handleTrackGrievance = (e) => {
    e.preventDefault();
    // Fetch tracking result from the backend API
    console.log("Tracking grievance with ID:", trackingId);
    // Dummy response, replace with actual API call
    setTrackingResult({
      status: "In Progress",
      details: "Your grievance is being reviewed.",
    });
  };

  return (
    <Container fluid className="p-5 grievance-bg">
      <div className="d-flex justify-content-end mt-5 ">
        <Button variant="warning" className="" onClick={toggleTrackGrievance}>
          {submit?"Track Grievance":" Submit New Grievance"}
        </Button>
      </div>
      <Row>
        <Col sm={5}></Col>
        <Col sm={6}>
          {submit && (
            <Card className="mb-4 mt-4 grievance-card ">
              <Card.Body>
                <Card.Title className="text-warning" >
                  Submit New Grievance
                </Card.Title>
                <Form onSubmit={handleSubmitGrievance}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={grievanceDetails.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="email" className="mt-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={grievanceDetails.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="issue" className="mt-3">
                    <Form.Label>Issue</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Briefly describe the issue"
                      name="issue"
                      value={grievanceDetails.issue}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="description" className="mt-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Provide a detailed description of the grievance"
                      name="description"
                      value={grievanceDetails.description}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <div className=" mt-3  d-flex justify-content-end">
                    <Button type="submit" variant="warning">
                      Submit Grievance
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          )}

      {!submit&& 
        <Card className="mb-4 mt-4 grievance-card ">
              <Card.Body>
                <Card.Title className="text-warning" >
                  Track Grievance
                </Card.Title>
              <Form onSubmit={handleTrackGrievance}>
                <Form.Group controlId="trackingId">
                  <Form.Label>Tracking ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your tracking ID"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    required
                  />
                </Form.Group>
                <div className=" mt-3  d-flex justify-content-end">
                <Button variant="warning" type="submit">
                  Track Grievance
                </Button></div>
              </Form>

              {trackingResult && (
                <Card className="mt-4">
                  <Card.Body>
                    <Card.Title>Tracking Result</Card.Title>
                    <p><strong>Status:</strong> {trackingResult.status}</p>
                    <p><strong>Details:</strong> {trackingResult.details}</p>
                  </Card.Body>
                </Card>
              )}
            </Card.Body>
          </Card>}
        </Col>
      </Row>
    </Container>
  );
};

export default GrievanceSubmissionPage;
