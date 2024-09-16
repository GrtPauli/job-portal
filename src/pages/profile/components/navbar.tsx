import { Link } from "react-router-dom";

export default function ProfileNavbar() {
  return (
    <div className="job-profile section">
    <div className="user-profile">
      <div className="user-images">
        <img
          src="/images/user.jpg"
          alt="User Images"
          className="img-fluid"
        />
      </div>
      <div className="user">
        <h2>
          Hello, <a href="#">Jhon Doe</a>
        </h2>
        <h5>
          You last logged in at: 10-01-2017 6:40 AM [ USA time (GMT +
          6:00hrs)]
        </h5>
      </div>
      <div className="favorites-user">
        <div className="my-ads">
          <a href="applied-job.html">
            29<small>Apply Job</small>
          </a>
        </div>
        <div className="favorites">
          <a href="bookmark.html">
            18<small>Favorites</small>
          </a>
        </div>
      </div>
    </div>
    <ul className="user-menu">
      <li className="active">
        <Link to='/profile'>Account Info </Link>
      </li>
      <li>
        <Link to='/profile/resume'>View Resume</Link>
      </li>
      <li>
        <Link to='/profile/edit-resume'>Edit Resume</Link>
      </li>
      <li>
        <Link to='/profile/details'>Profile Details</Link>
      </li>
      <li>
        <Link to='/profile/bookamrks'>Bookmarks</Link>
      </li>
      <li>
        <Link to='/profile/applied-jobs'>Applied Jobs</Link>
      </li>
      <li>
        <Link to='/profile/close-account'>Close Account</Link>
      </li>
    </ul>
  </div>
  )
}
