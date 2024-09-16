import { Navbar } from "../../components";
import { ProfileNavbar } from "./components";

export default function ProfileDetailsPage() {
  return (
    <div>
      <Navbar/>
      <section className="clearfix job-bg ad-profile-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Profile Details</li>
            </ol>
            <h2 className="title">My Profile</h2>
          </div>
          <ProfileNavbar/>
          <div className="profile job-profile">
            <div className="user-pro-section">
              <div className="profile-details section">
                <h2>Profile Details</h2>
                <form action="#">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jhon Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email ID</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="jhondoe@mail.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="+213 1234 56789"
                    />
                  </div>
                  <div className="form-group">
                    <label>Your City</label>
                    <select className="form-control">
                      <option value="#">Los Angeles, USA</option>
                      <option value="#">Dhaka, BD</option>
                      <option value="#">Shanghai</option>
                      <option value="#">Karachi</option>
                      <option value="#">Beijing</option>
                      <option value="#">Lagos</option>
                      <option value="#">Delhi</option>
                      <option value="#">Tianjin</option>
                      <option value="#">Rio de Janeiro</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>You are a</label>
                    <select className="form-control">
                      <option value="#">Employer</option>
                      <option value="#">Employee</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="change-password section">
                <h2>Change password</h2>
                <div className="form-group">
                  <label>Old Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label>New password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Confirm password</label>
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className="preferences-settings section">
                <h2>Preferences Settings</h2>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="logged" />
                    Comments are enabled on my Resume
                  </label>
                  <label>
                    <input type="checkbox" name="receive" />I want to receive
                    newsletter.
                  </label>
                  <label>
                    <input type="checkbox" name="want" />I want to receive
                    advice on portfolio
                  </label>
                </div>
                <div className="buttons">
                  <a href="#" className="btn">
                    Update Profile
                  </a>
                  <a href="#" className="btn cancle">
                    Cancle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="clearfix">
        <section className="footer-top clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h3>Quik Links</h3>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">All Cities</a>
                    </li>
                    <li>
                      <a href="#">Help &amp; Support</a>
                    </li>
                    <li>
                      <a href="#">Advertise With Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h3>How to sell fast</h3>
                  <ul>
                    <li>
                      <a href="#">How to sell fast</a>
                    </li>
                    <li>
                      <a href="#">Membership</a>
                    </li>
                    <li>
                      <a href="#">Banner Advertising</a>
                    </li>
                    <li>
                      <a href="#">Promote your ad</a>
                    </li>
                    <li>
                      <a href="#">Jobs Delivers</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget social-widget">
                  <h3>Follow us on</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook-official" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter-square" />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus-square" />
                        Google+
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube-play" />
                        youtube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget news-letter">
                  <h3>Newsletter</h3>
                  <p>Jobs is Worldest leading Portal platform that brings!</p>
                  <form action="#">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email id"
                    />
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="footer-bottom clearfix text-center">
          <div className="container">
            <p>
              Copyright © <a href="#">Jobs</a> 2017. Developed by
              <a href="http://themeregion.com/">ThemeRegion</a>
            </p>
          </div>
        </div>
      </footer>
      <div className="style-chooser">
        <div className="style-chooser-inner">
          <a href="#" className="toggler">
            <i className="fa fa-cog fa-spin" />
          </a>
          <h4>Presets</h4>
          <ul className="preset-list clearfix">
            <li className="preset1 active" data-preset={1}>
              <a href="#" data-color="preset1" />
            </li>
            <li className="preset2" data-preset={2}>
              <a href="#" data-color="preset2" />
            </li>
            <li className="preset3" data-preset={3}>
              <a href="#" data-color="preset3" />
            </li>
            <li className="preset4" data-preset={4}>
              <a href="#" data-color="preset4" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
