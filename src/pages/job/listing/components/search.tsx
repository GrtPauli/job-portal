export default function JobSearch() {
  return (
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
  )
}
