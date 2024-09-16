export default function Footer() {
  return (
    <footer id="footer" className="clearfix">
      <section className="footer-top clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Quik Links</h3>
                <ul>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">All Cities</a>
                  </li>
                  <li>
                    <a href="">Help &amp; Support</a>
                  </li>
                  <li>
                    <a href="">Advertise With Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>How to sell fast</h3>
                <ul>
                  <li>
                    <a href="">How to sell fast</a>
                  </li>
                  <li>
                    <a href="">Membership</a>
                  </li>
                  <li>
                    <a href="">Banner Advertising</a>
                  </li>
                  <li>
                    <a href="">Promote your ad</a>
                  </li>
                  <li>
                    <a href="">Jobs Delivers</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget social-widget">
                <h3>Follow us on</h3>
                <ul>
                  <li>
                    <a href="">
                      <i className="fa fa-facebook-official" />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-twitter-square" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-google-plus-square" />
                      Google+
                    </a>
                  </li>
                  <li>
                    <a href="">
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
            Copyright © <a href="">Jobs</a> 2017. Developed by{" "}
            <a href="http://themeregion.com/">ThemeRegion</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
