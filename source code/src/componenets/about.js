import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const About = () => {
  const history = useHistory();
  const callAboutPage = async () => {
    try {
      const res = await fetch('/aboutme', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      console.log(res);
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        throw new Error('error no user');
      }
    } catch (error) {
      console.log(error);
      history.push('/signin');
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="picpic">
        <div className="container emp-profile">
          <form method="GET">
            <div className="row">
              <div className="col-md-4">
                <img
                  className="profile-img"
                  src="https://ctl.s6img.com/society6/img/CeBjEnPtWJZHHDQ-oSwW0rh3gkY/w_1500/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/7f293656de104a4889a9579da0f45270/~~/percy-jackson-side-profile-prints.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5 className="name">Utkarsh</h5>
                  <h6 className="name_work">Web developer</h6>
                  <p className="profile-rating mt-3 mb-5">
                    <span className="rank">Ranking:</span>
                  </p>
                  {/*  */}
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        TimeLine
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  value="edit profile"
                  name="btnAddmore"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p className="work">Work Link</p>
                  {/* NavLink */}
                  <a className="links" href="/" target="_blank">
                    Instagram
                  </a>
                  <br />
                  <a className="links" href="/" target="_blank">
                    LinkedIn
                  </a>
                  <br />
                  <a className="links" href=" /" target="_blank">
                    Facebook
                  </a>
                  <br />
                  <a
                    className="links"
                    href="https://github.com/utkarshpr"
                    target="_blank"
                  >
                    Github
                  </a>
                  <br />
                </div>
              </div>
              {/* <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    Home
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    Timeline
                  </div> */}
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6">
                        <label>H</label>
                      </div>
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <label>H</label>
                      </div>
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <label>H</label>
                      </div>
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <label>H</label>
                      </div>
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <label>H</label>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <label>H</label>
                      </div>
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6">
                        <label>H</label>
                      </div>
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6">
                        <label>H</label>
                      </div>
                      <div className="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div className="col-md-6">
                        <label>H</label>
                      </div>
                      <div className="col-md-6">
                        <label>Availabilty</label>
                      </div>
                      <div className="col-md-6">
                        <label>H</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default About;
