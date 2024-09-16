export default function HomeHero() {
  return (
    <div className="banner-job">
    <div className="banner-overlay" />
    <div className="container text-center">
      <h1 className="title">The Easiest Way to Get Your New Job</h1>
      <h3>We offer 12000 jobs vacation right now</h3>
      <div className="banner-form">
        <form className="clearfix">
          <input
            type="text"
            className="form-control"
            placeholder="Type your key word"
          />
          <div className="dropdown category-dropdown">
            <a data-toggle="dropdown">
              <span className="change-text">Job Location</span>
              <i className="fa fa-angle-down" />
            </a>
            <ul className="dropdown-menu category-change">
              <li>
                <a >Location 1</a>
              </li>
              <li>
                <a >Location 2</a>
              </li>
              <li>
                <a >Location 3</a>
              </li>
            </ul>
          </div>
          <button type="submit" className="btn btn-primary" value="Search">
            Search
          </button>
        </form>
      </div>
      <ul className="banner-socail list-inline">
        <li>
          <a  title="Facebook">
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a  title="Twitter">
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a  title="Google Plus">
            <i className="fa fa-google-plus" />
          </a>
        </li>
        <li>
          <a  title="Youtube">
            <i className="fa fa-youtube" />
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}
