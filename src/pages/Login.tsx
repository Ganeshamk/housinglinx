import { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import houselinx from "./../assets/images/houselinx.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login(onHandleLogin: any) {
  const nav = useNavigate();

  // const user = localStorage.getItem("user");
  // if (user !== undefined) {
  //   nav("/");
  // }

  const [basicActive, setBasicActive] = useState("tab1");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  const handleOnSubmit = () => {
    if (mobileNumber === "9164082559" && password === "12345") {
      const user = { mobileNumber: mobileNumber, password: password };
      localStorage.setItem("user", JSON.stringify(user));
      onHandleLogin.onHandleLogin();
      nav("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="login-page-img"></div>
      <MDBRow className="d-flex justify-content-center houselinx p-0 m-0 pt-2">
        <MDBCol col="12" md="10">
          <div className="d-flex align-items-center justify-content-center">
            <MDBCard>
              <MDBRow className="g-0">
                <MDBCol md="6">
                  <div className="houselinx-img">
                    <MDBCardImage
                      src={houselinx}
                      alt="login form"
                      className="w-100"
                    />
                  </div>
                </MDBCol>

                <MDBCol md="6">
                  <MDBContainer className="tabs-block p-lg-5 p-md-3 p-4">
                    <>
                      <MDBTabs className="mb-4">
                        <MDBTabsItem>
                          <MDBTabsLink
                            className="tabs-link"
                            onClick={() => handleBasicClick("tab1")}
                            active={basicActive === "tab1"}
                          >
                            LOGIN
                          </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                          <MDBTabsLink
                            className="tabs-link"
                            onClick={() => handleBasicClick("tab2")}
                            active={basicActive === "tab2"}
                          >
                            REGISTER
                          </MDBTabsLink>
                        </MDBTabsItem>
                      </MDBTabs>

                      <MDBTabsContent>
                        <MDBTabsPane open={basicActive === "tab1"}>
                          <div className="password-block register-icon-formfield">
                            <i className="fas fa-phone ms-3 mat-icon"></i>
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Mobile Number / Email"
                              id="form1"
                              type="email"
                              onChange={(event) =>
                                setMobileNumber(event.target.value)
                              }
                            />
                          </div>
                          <div className="password-block register-icon-formfield">
                            <i className="fas fa-lock ms-3 mat-icon"></i>
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Password"
                              id="form2"
                              type="password"
                              onChange={(event) =>
                                setPassword(event.target.value)
                              }
                            />
                          </div>

                          <MDBBtn
                            className="mb-4 w-100 submit-button"
                            onClick={handleOnSubmit}
                          >
                            LOGIN
                          </MDBBtn>

                          <div className="d-flex justify-content-between">
                            <a href="/login">Forgot password?</a>
                          </div>

                          <p className="text-center mt-3">
                            Not a member?{" "}
                            <span
                              className="cursor-pointer text-primary"
                              onClick={() => handleBasicClick("tab2")}
                            >
                              Register
                            </span>
                          </p>
                        </MDBTabsPane>
                        <MDBTabsPane open={basicActive === "tab2"}>
                          <MDBRow className="g-10">
                            <MDBCol lg="6">
                              <MDBInput
                                wrapperClass="mb-4"
                                label="First Name"
                                id="form1"
                                type="text"
                              />
                            </MDBCol>
                            <MDBCol lg="6">
                              <MDBInput
                                wrapperClass="mb-4"
                                label="Last Name"
                                id="form1"
                                type="text"
                              />
                            </MDBCol>
                          </MDBRow>

                          <MDBRow className="g-10">
                            <MDBCol lg="6">
                              <div className="password-block register-icon-formfield">
                                <i className="fas fa-phone ms-3 mat-icon"></i>
                                <MDBInput
                                  wrapperClass="mb-4"
                                  label="Mobile Number"
                                  id="form1"
                                  type="text"
                                />
                              </div>
                            </MDBCol>
                            <MDBCol lg="6">
                              <div className="password-block register-icon-formfield">
                                <i className="fas fa-envelope ms-3 mat-icon"></i>
                                <MDBInput
                                  wrapperClass="mb-4"
                                  label="Email"
                                  id="form1"
                                  type="email"
                                />
                              </div>
                            </MDBCol>
                          </MDBRow>

                          <MDBRow className="g-10">
                            <MDBCol lg="6">
                              <select
                                className="form-select mb-4"
                                aria-label="Default select example"
                              >
                                <option selected>Flat/Villa</option>
                                <option value="1">Flat</option>
                                <option value="2">Villa</option>
                              </select>
                            </MDBCol>
                            <MDBCol lg="6">
                              <select
                                className="form-select mb-4"
                                aria-label="Default select example"
                              >
                                <option selected>Block</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </MDBCol>
                          </MDBRow>

                          <MDBRow className="g-10">
                            <MDBCol lg="6">
                              <select
                                className="form-select mb-4"
                                aria-label="Default select example"
                              >
                                <option selected>Phase</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </MDBCol>
                            <MDBCol lg="6">
                              <select
                                className="form-select mb-4"
                                aria-label="Default select example"
                              >
                                <option selected>Resident Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </MDBCol>
                          </MDBRow>

                          <div className="password-block register-icon-formfield">
                            <i className="fas fa-lock ms-3 mat-icon"></i>
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Password"
                              id="form1"
                              type="password"
                            />
                          </div>

                          <div className="password-block register-icon-formfield">
                            <i className="fas fa-lock ms-3 mat-icon"></i>
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Confirm Password"
                              id="form1"
                              type="password"
                            />
                          </div>

                          <MDBBtn className="mb-4 w-100 submit-button">
                            REGISTER
                          </MDBBtn>
                        </MDBTabsPane>
                      </MDBTabsContent>

                      <p className="text-center mt-3 terms-condition">
                        By signing up, you are agree with our
                        <a href="/">&nbsp; Terms and Condition</a>
                      </p>
                    </>
                  </MDBContainer>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
}

export default Login;
