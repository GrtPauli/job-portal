import { Navbar } from "../../../components";

export default function PostJobPage() {
  return (
    <div>
      <Navbar/>
      <section className="job-bg ad-details-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Job Post</li>
            </ol>
            <h2 className="title">Post Your Job</h2>
          </div>
          <div className="job-postdetails">
            <div className="row">
              <div className="col-lg-8">
                <form action="#">
                  <fieldset>
                    <div className="section postdetails">
                      <h4>
                        Post Your Job
                        <span className="pull-right">* Mandatory Fields</span>
                      </h4>
                      <div className="row form-group add-title">
                        <label className="col-sm-3 label-title">
                          Job Category
                        </label>
                        <div className="col-sm-9">
                          <div className="dropdown category-dropdown">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">
                                Select a category
                              </span>
                              <i className="fa fa-angle-down pull-right" />
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">Select a category</a>
                              </li>
                              <li>
                                <a href="#">Software Engineer</a>
                              </li>
                              <li>
                                <a href="#">Program Development</a>
                              </li>
                              <li>
                                <a href="#">Project Manager</a>
                              </li>
                              <li>
                                <a href="#">Graphics Designer</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3">
                          Job Type<span className="required">*</span>
                        </label>
                        <div className="col-sm-9 user-type">
                          <input
                            type="radio"
                            name="sellType"
                            defaultValue="full-time"
                            id="full-time"
                          />
                          <label htmlFor="full-time">Full Time</label>
                          <input
                            type="radio"
                            name="sellType"
                            defaultValue="part-time"
                            id="part-time"
                          />
                          <label htmlFor="part-time">Part Time</label>
                          <input
                            type="radio"
                            name="sellType"
                            defaultValue="freelance"
                            id="freelance"
                          />
                          <label htmlFor="freelance">Freelance</label>
                          <input
                            type="radio"
                            name="sellType"
                            defaultValue="contract"
                            id="contract"
                          />
                          <label htmlFor="contract">Contract</label>
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Title for your jonb<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ex, Human Resource Manager"
                          />
                        </div>
                      </div>
                      <div className="row form-group item-description">
                        <label className="col-sm-3 label-title">
                          Description<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <textarea
                            className="form-control"
                            id="textarea"
                            placeholder="Write few lines about your jobs"
                            rows={8}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="row characters">
                        <div className="col-sm-9 col-sm-offset-3">
                          <p>5000 characters left</p>
                        </div>
                      </div>
                      <div className="row form-group add-title location">
                        <label className="col-sm-3 label-title">
                          Location<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <div className="dropdown category-dropdown pull-left">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">Country</span>
                              <i className="fa fa-angle-down pull-right" />
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">Argentina</a>
                              </li>
                              <li>
                                <a href="#">Australia</a>
                              </li>
                              <li>
                                <a href="#">Belgium</a>
                              </li>
                              <li>
                                <a href="#">Brazil</a>
                              </li>
                              <li>
                                <a href="#">Cambodia</a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown category-dropdown pull-right">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">State</span>
                              <i className="fa fa-angle-down pull-right" />
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">State 1</a>
                              </li>
                              <li>
                                <a href="#">State 2</a>
                              </li>
                              <li>
                                <a href="#">State 3</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row form-group select-price">
                        <label className="col-sm-3 label-title">
                          Salary<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <label>$USD</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Min"
                          />
                          <span>-</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Max"
                          />
                          <input
                            type="radio"
                            name="price"
                            defaultValue="negotiable"
                            id="negotiable"
                          />
                          <label htmlFor="negotiable">Negotiable </label>
                        </div>
                      </div>
                      <div className="row form-group add-title">
                        <label className="col-sm-3 label-title">
                          Salary Type<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <div className="dropdown category-dropdown">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">Per Hour</span>
                              <i className="fa fa-angle-down pull-right" />
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">Per Hour</a>
                              </li>
                              <li>
                                <a href="#">Daily</a>
                              </li>
                              <li>
                                <a href="#">Monthly</a>
                              </li>
                              <li>
                                <a href="#">Yearly</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row form-group add-title">
                        <label className="col-sm-3 label-title">
                          Exprience<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <div className="dropdown category-dropdown">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">Mid Level</span>
                              <i className="fa fa-angle-down pull-right" />
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">Entry Level</a>
                              </li>
                              <li>
                                <a href="#">Mid Level</a>
                              </li>
                              <li>
                                <a href="#">Mid-Senior Level</a>
                              </li>
                              <li>
                                <a href="#">Top Level</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row form-group brand-name">
                        <label className="col-sm-3 label-title">
                          Job Function<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="human, reosurce, job, hrm"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="section company-information">
                      <h4>Company Information</h4>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Industry<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Marketing and Advertising"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Company Name<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="ex, Jhon Doe"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">Email ID</label>
                        <div className="col-sm-9">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="ex, jhondoe@mail.com"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Mobile Number<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="mobileNumber"
                            className="form-control"
                            placeholder="ex, +912457895"
                          />
                        </div>
                      </div>
                      <div className="row form-group address">
                        <label className="col-sm-3 label-title">
                          Address<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="ex, alekdera House, coprotec, usa"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="section">
                      <h4>Make Your Post Premium</h4>
                      <p>
                        More replies means more interested buyers. With lots of
                        interested buyers, you have a better chance of selling
                        for the price that you want.<a href="#">Learn more</a>
                      </p>
                      <ul className="premium-options">
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            defaultValue="day-one"
                            id="day-one"
                          />
                          <label htmlFor="day-one">Regular Post</label>
                          <span>$20.00</span>
                        </li>
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            defaultValue="day-two"
                            id="day-two"
                          />
                          <label htmlFor="day-two">Regular Post</label>
                          <span>$30.00</span>
                        </li>
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            defaultValue="day-three"
                            id="day-three"
                          />
                          <label htmlFor="day-three">Top Post for 7 days</label>
                          <span>$50.00</span>
                        </li>
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            defaultValue="day-four"
                            id="day-four"
                          />
                          <label htmlFor="day-four">
                            Daily Bump Up for 7 days
                          </label>
                          <span>$100.00</span>
                        </li>
                      </ul>
                    </div>
                    <div className="checkbox section agreement">
                      <label htmlFor="send">
                        <input type="checkbox" name="send" id="send" />
                        You agree to our <a href="#">Terms of Use</a> and
                        <a href="#">Privacy Policy</a> and acknowledge that you
                        are the rightful owner of this item and using Jobs to
                        find a genuine buyer.
                      </label>
                      <button type="submit" className="btn btn-primary">
                        Post Your Job
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="section quick-rules">
                  <h4>Quick rules</h4>
                  <p className="lead">
                    Posting an ad on <a href="#">jobs.com</a> is free! However,
                    all ads must follow our rules:
                  </p>
                  <ul>
                    <li>Make sure you post in the correct category.</li>
                    <li>
                      Do not post the same ad more than once or repost an ad
                      within 48 hours.
                    </li>
                    <li>Do not upload pictures with watermarks.</li>
                    <li>
                      Do not post ads containing multiple items unless it's a
                      package deal.
                    </li>
                    <li>
                      Do not put your email or phone numbers in the title or
                      description.
                    </li>
                    <li>Make sure you post in the correct category.</li>
                    <li>
                      Do not post the same ad more than once or repost an ad
                      within 48 hours.
                    </li>
                    <li>Do not upload pictures with watermarks.</li>
                    <li>
                      Do not post ads containing multiple items unless it's a
                      package deal.
                    </li>
                  </ul>
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
