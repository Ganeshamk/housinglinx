import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

function Payment() {
  return (
    <MDBContainer className="mt-5">
      <section className="px-md-5 px-sm-2 m-0 p-2">
        <h3 className="fw-bold mb-3">Payment History</h3>

        <div className="shadow-4 rounded-5 table-responsive mb-5">
          <MDBTable>
            <MDBTableHead dark>
              <tr>
                <th>SN.</th>
                <th>Transaction Id</th>
                <th>Apartment No.</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody style={{ verticalAlign: "middle" }}>
              <tr>
                <td>
                  <p className="fw-normal mb-1">01</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">SN-1234-45</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">121</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">Maintance</p>
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
                  <p className="fw-normal mb-1">SN-1234-46</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">122</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">Late Fee</p>
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
                  <p className="fw-normal mb-1">SN-1234-47</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">123</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">Maintance</p>
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
                  <p className="fw-normal mb-1">SN-1234-48</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">124</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">Maintance</p>
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
                  <p className="fw-normal mb-1">SN-1234-50</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">125</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">Late Fee</p>
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
                  <p className="fw-normal mb-1">SN-1234-51</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">126</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">Maintance</p>
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

export default Payment;
