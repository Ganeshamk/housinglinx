import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

function Management() {
  return (
    <MDBContainer className="mt-5">
      <section className="px-md-5 px-sm-2 m-0 p-2">
        <h3 className="fw-bold mb-3">Visitor Management</h3>

        <div className="shadow-4 rounded-5 table-responsive mb-5">
          <MDBTable>
            <MDBTableHead dark>
              <tr>
                <th>SN.</th>
                <th>Visitor Name</th>
                <th>Purpose</th>
                <th>Date</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody style={{ verticalAlign: "middle" }}>
              <tr>
                <td>
                  <p className="fw-normal mb-1">01</p>
                </td>
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
                  <p className="fw-normal mb-1">Courier</p>
                </td>
                <td>
                  <p className="text-muted mb-0">07-12-2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="fw-normal mb-1">02</p>
                </td>
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
                  <p className="fw-normal mb-1">Cylinder</p>
                </td>
                <td>
                  <p className="text-muted mb-0">07-12-2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="fw-normal mb-1">03</p>
                </td>
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
                  <p className="fw-normal mb-1">Ola</p>
                </td>
                <td>
                  <p className="text-muted mb-0">07-12-2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="fw-normal mb-1">04</p>
                </td>
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
                  <p className="fw-normal mb-1">Courier</p>
                </td>
                <td>
                  <p className="text-muted mb-0">07-12-2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="fw-normal mb-1">05</p>
                </td>
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
                  <p className="fw-normal mb-1">Cylinder</p>
                </td>
                <td>
                  <p className="text-muted mb-0">07-12-2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="fw-normal mb-1">06</p>
                </td>
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
                  <p className="fw-normal mb-1">Ola</p>
                </td>
                <td>
                  <p className="text-muted mb-0">07-12-2023</p>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </section>
    </MDBContainer>
  );
}

export default Management;
