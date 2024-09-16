import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header id="header" className="clearfix">
    <nav className="navbar navbar-default navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa fa-align-justify" />
          </span>
        </button>
        <Link to="/" className="navbar-brand">
          <img className="img-fluid" src="/images/logo.png" alt="Logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Job list</Link>
            </li>
            <li>
              <Link to="/jobs/job-details">Job Details</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/profile/resume">Resume</Link>
            </li>
            {/* <li className="dropdown">
              <a
                href="javascript:void(0);"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Pages
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="profile.html">Profile</a>
                </li>
                <li>
                  <a href="post-resume.html">Post Resume</a>
                </li>
                <li>
                  <a href="post.html">Job Post</a>
                </li>
                <li>
                  <a href="edit-resume.html">Edit Resume</a>
                </li>
                <li>
                  <a href="profile-details.html">profile Details</a>
                </li>
                <li>
                  <a href="bookmark.html">Bookmark</a>
                </li>
                <li>
                  <a href="applied-job.html">Applied Job</a>
                </li>
                <li>
                  <a href="delete-account.html">Close Account</a>
                </li>
                <li>
                  <a href="signup.html">Job Signup</a>
                </li>
                <li>
                  <a href="signin.html">Job Signin</a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
        <div className="nav-right">
          <ul className="sign-in">
            <li>
              <i className="fa fa-user" />
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Register</Link>
            </li>
          </ul>
          <Link to="/jobs/post" className="btn">
            Post Your Job
          </Link>
        </div>
      </div>
    </nav>
  </header>
  )
}