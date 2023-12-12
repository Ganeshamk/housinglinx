import { MDBBadge, MDBContainer } from "mdb-react-ui-kit";
import "./Profile.css";
import avatar from "./../assets/images/avatar.jpg";

function Profile() {
  return (
    <MDBContainer>
      <div className="col-12 mx-auto p-2">
        <section>
          <div className="card testimonial-card">
            <div className="card-up card-image profile-img">
              <div className="rgba-black-strong h-100 p-3 white-text">
                <div className="profile-info">
                  <span>
                    <i className="fas fa-user mat-icon mt-1"></i>
                  </span>
                  <span className="font-weight-normal mb-0">Ganesh</span>
                </div>

                <div className="profile-info">
                  <span>
                    <i className="fas fa-building mat-icon mt-1"></i>
                  </span>
                  <span className="font-weight-normal mb-0">
                    Apartment Number:{" "}
                    <MDBBadge light color="warning" pill>
                      #221
                    </MDBBadge>
                  </span>
                </div>

                <div className="profile-info">
                  <span>
                    <i className="fas fa-calendar mat-icon mt-1"></i>
                  </span>
                  <span className="font-weight-normal mb-0">
                    Last Login Time :{" "}
                    <MDBBadge light color="success" pill>
                      07/12/2023 10:55:46
                    </MDBBadge>
                  </span>
                </div>
              </div>
            </div>

            <div className="avatar mx-auto white">
              <img src={avatar} className="rounded-circle" alt="woman avatar" />
            </div>

            <div className="card-body px-3 py-4">
              <div className="col-12 col-md-8 mx-auto">
                <div className="row">
                  <div className="col text-center">
                    <p className="font-weight-bold mb-0">2400</p>
                    <p className="small text-uppercase mb-0">Sales</p>
                  </div>
                  <div className="col text-center border-left border-right">
                    <p className="font-weight-bold mb-0">15000</p>
                    <p className="small text-uppercase mb-0">Followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MDBContainer>
  );
}

export default Profile;
