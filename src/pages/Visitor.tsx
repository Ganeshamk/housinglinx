import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBadge,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Home.css";

function Visitor() {
  return (
    <MDBContainer className="mt-5">
      <section className="px-md-5 px-sm-2 m-0 p-2">
        <div className="row">
          <div className="col-xl-4 col-sm-4 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="align-self-center">
                    <i className="fas fa-pencil-alt text-info fa-3x"></i>
                  </div>
                  <div className="text-end">
                    <h3>278</h3>
                    <p className="mb-0">Total Visitors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-4 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="align-self-center">
                    <i className="far fa-comment-alt text-info fa-3x"></i>
                  </div>
                  <div className="text-end">
                    <h3>156</h3>
                    <p className="mb-0">Active Visitors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-sm-4 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="align-self-center">
                    <i className="fas fa-rocket text-info fa-3x"></i>
                  </div>
                  <div className="text-end">
                    <h3>158</h3>
                    <p className="mb-0">Overstay Visitors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-md-5 px-sm-2 m-0 p-2">
        <div className="row d-flex align-items-center">
          <div className="col-xl-3 col-sm-3 col-md-2 col-12 mb-3">
            <h4 className="fw-bold mb-0">Visitors Log</h4>
          </div>
          <div className="col-xl-9 col-sm-9 col-md-10 col-12 mb-3">
            <div className="input-group">
              <MDBInput label="Search" type="text" />
              <div className="input-group-append d-flex ms-1 justify-content-end buttons">
                <MDBBtn className="me-1" color="success">
                  Add Visitor
                </MDBBtn>
                <MDBBtn color="success">Export</MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-md-5 px-sm-2 m-0 p-2">
        <div className="shadow-4 rounded-5 table-responsive mb-5">
          <MDBTable>
            <MDBTableHead dark>
              <tr>
                <th>Name</th>
                <th>Purpose</th>
                <th>Company</th>
                <th>Host</th>
                <th>Check-in</th>
                <th>Check-out</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody style={{ verticalAlign: "middle" }}>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">John Doe</p>
                      <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">General Visit</p>
                </td>
                <td>
                  <p className="text-muted mb-0">Tech ABC</p>
                </td>
                <td>
                  <MDBBadge light color="success" pill>
                    Lorna Yang
                  </MDBBadge>
                </td>
                <td>1:20 PM</td>
                <td>3:20 PM</td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                      className="rounded-circle"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Alex Ray</p>
                      <p className="text-muted mb-0">alex.ray@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">General Visit</p>
                </td>
                <td>
                  <p className="text-muted mb-0">Tech ABC</p>
                </td>
                <td>
                  <MDBBadge light color="success" pill>
                    Michael Tan
                  </MDBBadge>
                </td>
                <td>1 PM</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                      className="rounded-circle"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Kate Hunington</p>
                      <p className="text-muted mb-0">
                        kate.hunington@gmail.com
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">General Visit</p>
                </td>
                <td>
                  <p className="text-muted mb-0">Tech ABC</p>
                </td>
                <td>
                  <MDBBadge light color="success" pill>
                    Lorna Yang
                  </MDBBadge>
                </td>
                <td>8 AM</td>
                <td>3:20 PM</td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">John Doe</p>
                      <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">General Visit</p>
                </td>
                <td>
                  <p className="text-muted mb-0">Tech ABC</p>
                </td>
                <td>
                  <MDBBadge light color="success" pill>
                    Lorna Yang
                  </MDBBadge>
                </td>
                <td>1:20 PM</td>
                <td>3:20 PM</td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                      className="rounded-circle"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Alex Ray</p>
                      <p className="text-muted mb-0">alex.ray@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">General Visit</p>
                </td>
                <td>
                  <p className="text-muted mb-0">Tech ABC</p>
                </td>
                <td>
                  <MDBBadge light color="success" pill>
                    Michael Tan
                  </MDBBadge>
                </td>
                <td>1 PM</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                      className="rounded-circle"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Kate Hunington</p>
                      <p className="text-muted mb-0">
                        kate.hunington@gmail.com
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">General Visit</p>
                </td>
                <td>
                  <p className="text-muted mb-0">Tech ABC</p>
                </td>
                <td>
                  <MDBBadge light color="success" pill>
                    Lorna Yang
                  </MDBBadge>
                </td>
                <td>8 AM</td>
                <td>3:20 PM</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </section>
    </MDBContainer>
  );
}

export default Visitor;
