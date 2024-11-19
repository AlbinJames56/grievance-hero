import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../Services/AllApi";
import { Flip, ToastContainer, toast } from "react-toastify";
import { TokenAuthContext } from "../ContextAPI/TokenAuth";
import boyImg from "../assets/boy.png";
function Auth({ register }) {
    const { isAuthorized, setIsAuthorized } = useContext(TokenAuthContext);
  const isRegisterForm = register ? true : false;
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  // login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      toast.info("Please fill all fields!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    } else {
      try {
        const result = await loginAPI({ email, password });
        
        if (result.status === 200) {
          sessionStorage.setItem("username", result.data.existingUser.username);

          sessionStorage.setItem("token", result.data.token);
            setIsAuthorized(true);
            navigate("/grievance");
          
          setUserData({ email: "", password: "" });
        } else {
          toast.warning("Invalid Email or password");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  // register
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      toast.info("Please fill all fields");
    } else {
      // api calling
      try {
        const result = await registerAPI(userData);
        if (result?.status === 200) {
          toast.success(`${result.data.username} has successfully registered`);
          navigate("/login");
          setUserData({ username: "", email: "", password: "" });
        } else {
          toast.warning(result?.response?.data || "An error occurred");
        }
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };
  return (
    <div className="  p-md-5 pt-5 mb-md-0 mb-5 mt-md-1 mt-5  ">
      <div
        className="d-flex justify-content-center align-items-center p-5"
        style={{ height: "70vh" }}
      >
        <div className="container pt-5 pt-md-0 container col-md-6  col-sm-12">
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bolder",
            }}
            className="mx-5"
          >
            <i
              className="fa-solid
          fa-arrow-left mb-5"
            ></i>
            Back To Home
          </Link>
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex flex-column align-items-center">
              <img src={boyImg} width={300} alt="" />
              <div
                style={{
                  width: "80%",   
                  height: "4px",  
                  backgroundColor: "#000", 
                }}
              ></div>
            </div>
            <div className="col-lg-6">
              <h1 className="fw-bolder text-light">
                <i className="fa-solid fa-list-check me-3"></i>Grievance Portal
              </h1>
              <h5 className="text-light my-4">
                {isRegisterForm
                  ? "Sign Up to your Account "
                  : "Sign In to your Account"}
              </h5>
              <Form className="w-100 ">
                {isRegisterForm && (
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlUsername"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Username"
                      onChange={(e) =>
                        setUserData({ ...userData, username: e.target.value })
                      }
                      value={userData.username}
                    />
                  </Form.Group>
                )}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlEmail"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    value={userData.email}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlPswd"
                >
                  <Form.Control
                    type="Password"
                    placeholder="Enter Your Password"
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    value={userData.password}
                  />
                </Form.Group>
              </Form>
              {isRegisterForm ? (
                <div>
                  <button
                    className="btn btn-dark text-light my-2"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                  <p className="text-light">
                    Already have a Account?Click here..
                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                      Login
                    </Link>
                  </p>
                </div>
              ) : (
                <div>
                  <button
                    className="btn btn-dark text-light my-2"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <p className="text-light">
                    Don't have a Account?Click here..
                    <Link to={"/register"} style={{ textDecoration: "none" }}>
                      Register
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Auth;
