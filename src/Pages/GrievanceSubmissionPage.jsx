import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Table,
  Modal,
} from "react-bootstrap";
import { io } from "socket.io-client";
import lookForward from "../assets/lookForward.png";
import "./grievance.css";
import { addGrievanceAPI, getUserGrievancesAPI } from "../Services/AllApi";
import { toast } from "react-toastify";
import { SERVER_URL } from "../Services/ServerUrl";
const GrievanceSubmissionPage = () => {
  // State for tracking form inputs
  const [grievanceDetails, setGrievanceDetails] = useState({
    name: "",
    email: "",
    issue: "",
    description: "",
    date: "",
  });
  const [grievances, setGrievances] = useState([]);
  const [status, setStatus] = useState("");
  const [submit, setSubmit] = useState(true);
  // Handle form inputs for submitting a new grievance
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGrievanceDetails({ ...grievanceDetails, [name]: value });
  };
  // fetching users grievances
  const getGrievances = async () => {
    try {
      const token = sessionStorage.getItem("token");

      if (token) {
        const userGrievances = await getUserGrievancesAPI();

        setGrievances(userGrievances.data);
      } else {
        toast.warn("Unauthorized user");
      }
    } catch (err) {
      console.error(err);
      setGrievances([]);
    }
  };
  const toggleTrackGrievance = () => {
    setSubmit(!submit);
  };

  // to realtime update when superhero updates
  useEffect(() => {
    const socket = io(SERVER_URL); 
    socket.on("new-grievance", (newGrievance) => {
      console.log("New grievance received:", newGrievance);
      setGrievances((prevGrievances) => [newGrievance, ...prevGrievances]);
    });

    return () => {
      socket.off("new-grievance");  
    };
  }, []);

  useEffect(() => {
    getGrievances();
  }, []);
  // Handle form submission of new grievance
  const handleSubmitGrievance = async (e) => {
    e.preventDefault();
    // ensure the user is logged in
    const token = sessionStorage.getItem("token");
    // set date
    const currentDate = new Date().toISOString();
    const grievanceData = {
      ...grievanceDetails,
      date: currentDate,
    };

    // Send grievanceDetails to the backend
    if (token) {
      try {
        const result = await addGrievanceAPI(grievanceData);
        if (result.status == 200) {
          // Reset form
          setGrievanceDetails({
            name: "",
            email: "",
            issue: "",
            description: "",
            date: "",
          });

          getGrievances();
          toast.success("Grievance submitted successfully!");
        } else {
          console.log(result.message);
          toast.error("Unauthorized email... Please enter registered email");
        }
      } catch (err) {
        console.log(err);
        toast.error("Sorry Failed to Submit Grievance...");
      }
    } else {
      toast.warn("Please login to submit Grievance");
    }
  };

  // modal to show details of the grievance
  const [showModal, setShowModal] = useState(false);
  const [selectedGrievance, setSelectedGrievance] = useState(null);

  const handleViewAction = (grievanceId) => {
    const grievance = grievances.find((g) => g._id === grievanceId);
    setSelectedGrievance(grievance);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedGrievance(null);
  };
  //
  return (
    <Container fluid className="p-sm-5 pt-5 p-1 grievance-bg">
      <div className="d-flex justify-content-end mt-5 pt-5">
        <Button variant="warning" className="" onClick={toggleTrackGrievance}>
          {submit ? "Track Grievance" : " Submit New Grievance"}
        </Button>
      </div>
      <Row>
        <Col md={5}></Col>
        <Col md={6} sm={12}>
          {submit && (
            <Card className="mb-4 mt-4 grievance-card ">
              <Card.Body>
                <Card.Title className="text-warning">
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

          {!submit && (
            <div className="mb-4 mt-4 grievance-card rounded p-3">
              <h2 className="text-light">Your Grievances</h2>
              {grievances?.length > 0 ? (
                <>
                  <Table className="customize_table" bordered>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Issue</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {grievances?.map((grievance, index) => (
                        <tr key={grievance._id}>
                          <td>{index + 1}</td>
                          <td>{grievance?.issue}</td>

                          <td>{grievance?.status}</td>
                          <td>{grievance?.action}</td>
                          <td>
                            <Button
                              variant="warning"
                              onClick={() => handleViewAction(grievance._id)}
                            >
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  {status && (
                    <div className="alert alert-info mt-3">{status}</div>
                  )}
                </>
              ) : (
                <p className="text-light">No grievances found.</p>
              )}
            </div>
          )}
        </Col>
      </Row>
      <Modal
        className="modal-bg"
        show={showModal}
        onHide={handleCloseModal}
        centered
      >
        <Modal.Header className="modal-body" closeButton>
          <Modal.Title className="text-warning">Grievance Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {selectedGrievance && (
            <div>
              <p>
                <strong className="text-warning">Issue: </strong>{" "}
                {selectedGrievance.issue}
              </p>
              <p>
                <strong className="text-warning">Description: </strong>{" "}
                {selectedGrievance.description}
              </p>
              <p>
                <strong className="text-warning">Status : </strong>{" "}
                {selectedGrievance.status}
              </p>
              <p>
                <strong className="text-warning">Action : </strong>
                {selectedGrievance.action}
              </p>
              <p>
                <strong className="text-warning">Updated Date: </strong>
                {selectedGrievance.updatedDate}
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="modal-body">
          <Button variant="warning" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GrievanceSubmissionPage;
