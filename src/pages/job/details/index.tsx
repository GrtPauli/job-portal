import { Navbar } from "../../../components";

export default function JobDetailsPage() {
  return (
    <div>
      <Navbar/>
      <section className="job-bg page job-details-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="job-list.html">Engineer/Architects</a>
              </li>
              <li>UI &amp; UX Designer</li>
            </ol>
            <h2 className="title">Creative &amp; Design</h2>
          </div>
          <div className="banner-form banner-form-full job-list-form">
            <form action="#" className="clearfix">
              <div className="dropdown category-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span className="change-text">Job Category</span>
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="dropdown-menu category-change">
                  <li>
                    <a href="#">Customer Service</a>
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
              <div className="dropdown category-dropdown language-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span className="change-text">Job Location</span>
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="dropdown-menu category-change language-change">
                  <li>
                    <a href="#">Location 1</a>
                  </li>
                  <li>
                    <a href="#">Location 2</a>
                  </li>
                  <li>
                    <a href="#">Location 3</a>
                  </li>
                </ul>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Type your key word"
              />
              <button type="submit" className="btn btn-primary" value="Search">
                Search
              </button>
            </form>
          </div>
          <div className="job-details">
            <div className="section job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <img
                      src="/images/job/4.png"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <span>
                      <a href="#" className="title">
                        Human Resource Manager
                      </a>
                    </span>
                    @ <a href="#"> Dropbox Inc</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true" />
                          San Francisco, CA, US
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          Full Time
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-money" aria-hidden="true" />
                        $25,000 - $35,000
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true" />
                          HR/Org. Development
                        </a>
                      </li>
                      <li>
                        <i
                          className="fa fa-hourglass-start"
                          aria-hidden="true"
                        />
                        Application Deadline : Jan 10, 2017
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="social-media">
                <div className="button">
                  <a href="#" className="btn btn-primary">
                    <i className="fa fa-briefcase" aria-hidden="true" />
                    Apply For This Job
                  </a>
                  <a href="#" className="btn btn-primary bookmark">
                    <i className="fa fa-bookmark-o" aria-hidden="true" />
                    Bookmark
                  </a>
                </div>
                <ul className="share-social">
                  <li>Share this ad</li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-facebook-official"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-google-plus-square"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-pinterest-square"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-tumblr-square" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="job-details-info">
              <div className="row">
                <div className="col-sm-8">
                  <div className="section job-description">
                    <div className="description-info">
                      <h1>Description</h1>
                      <p>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </span>
                      </p>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni।
                      </p>
                    </div>
                    <div className="responsibilities">
                      <h1>Key Responsibilities:</h1>
                      <p>
                        -Execute all visual design stages of website design from
                        concept to final hand-off to development-Create print
                        advertisements, social media advertisements, client
                        collateral &amp; digital resizes according to Client
                        demands With direction of the Creative team, input into
                        new design ideas for client branding-Update &amp; keep
                        all agency collateral materials, including keeping
                        records of Client's logos, fonts, images, etc.
                      </p>
                    </div>
                    <div className="requirements">
                      <h1>Minimum Requirements</h1>
                      <ul>
                        <li>Bachelor's Degree</li>
                        <li>
                          2-5 years of relevant experience ( or equivalent
                          educational experience)
                        </li>
                        <li>
                          Experience developing in Wordpress and other web
                          design platforms
                        </li>
                        <li>HTML, CSS and JavaScript experience a plus</li>
                        <li>
                          In depth knowledge &amp; technical experience of
                          Photoshop, Illustrator, InDesign, Adobe PDF, Keynote,
                          PowerPoint, Microsoft Word &amp; Excel
                        </li>
                        <li>
                          Exceptional eye for design, deep understanding of
                          creativity and ability to recognize fresh approaches
                          to Advertising
                        </li>
                        <li>
                          Must be fluent in Spanish; working written and spoken
                          proficiency
                        </li>
                        <li>
                          **All applicants must be eligible to work in the U.S.
                          without sponsorship
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="section job-short-info">
                    <h1>Short Info</h1>
                    <ul>
                      <li>
                        <span className="icon">
                          <i className="fa fa-bolt" aria-hidden="true" />
                        </span>
                        Posted: 1 day ago
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa fa-user-plus" aria-hidden="true" />
                        </span>
                        Job poster: <a href="#">Lance Ladaga</a>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa fa-industry" aria-hidden="true" />
                        </span>
                        Industry: <a href="#">Marketing and Advertising</a>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa fa-line-chart" aria-hidden="true" />
                        </span>
                        Experience: <a href="#">Entry level</a>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa fa-key" aria-hidden="true" />
                        </span>
                        Job function: Advertising,Design, Art/Creative
                      </li>
                    </ul>
                  </div>
                  <div className="section company-info">
                    <h1>Company Info</h1>
                    <ul>
                      <li>
                        Compnay Name: <a href="#">Dropbox Inc</a>
                      </li>
                      <li>Address: London, United Kingdom</li>
                      <li>Compnay SIze: 2k Employee</li>
                      <li>
                        Industry: <a href="#">Technology</a>
                      </li>
                      <li>Phone: +1234 567 8910</li>
                      <li>
                        Email:
                        <a href="#">
                          <span
                            className="__cf_email__"
                            data-cfemail="7811161e17381c0a17081a1700561b1715"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                      </li>
                      <li>
                        Website: <a href="#">www.dropbox.com</a>
                      </li>
                    </ul>
                    <ul className="share-social">
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-facebook-official"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-twitter-square"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-google-plus-square"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-linkedin-square"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="something-sell" className="clearfix parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="title">
                Add your resume and let your next job find you.
              </h2>
              <h4>
                Post your Resume for free on <a href="#">Jobs.com</a>
              </h4>
              <a href="post-resume.html" className="btn btn-primary">
                Add Your Resume
              </a>
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
