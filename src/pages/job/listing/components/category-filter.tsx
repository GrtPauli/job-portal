export default function JobCategoryFilter() {
  return (
    <div className="col-lg-3 col-md-4">
    <div className="accordion">
      <div className="panel-group" id="tr-accordion">
        <div className="card panel-faq">
          <div className="card-header">
            <button
              data-toggle="collapse"
              data-target="#accordion-one"
              aria-expanded="true"
              aria-controls="accordion-one"
            >
              Categories
            </button>
          </div>
          <div
            id="accordion-one"
            className="collapse show"
            data-parent="#tr-accordion"
          >
            <div className="panel-body">
              <h5>
                <a href="categories-main.html">
                  <i className="fa fa-caret-down" /> All Categories
                </a>
              </h5>
              <a href="#">
                <i className="icofont icofont-man-in-glasses" />
                Engineer/Architects
              </a>
              <ul>
                <li>
                  <a href="#">
                    Software <span>(129)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Architecture <span>(8342)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    UI &amp; UX Designer <span>(782)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Telecommunication <span>(5247)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Civil Engineer <span>(634)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Chemical Engineer <span>(453)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Program Development <span>(7986)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Mechanical Engineer <span>(742)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Industrial Engineer <span>(149)</span>
                  </a>
                </li>
              </ul>
              <div className="see-more">
                <button type="button" className="show-more one">
                  <i
                    className="fa fa-plus-square-o"
                    aria-hidden="true"
                  />
                  See More
                </button>
                <ul className="more-category one">
                  <li>
                    <a href="#">
                      Fron end developer<span>(289)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Back end developer<span>(5402)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      IT Department Manager<span>(3829)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      QA Department Manager<span>(352)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card panel-faq">
          <div className="card-header">
            <button
              className="collapsed"
              data-toggle="collapse"
              data-target="#accordion-two"
              aria-expanded="true"
              aria-controls="accordion-two"
            >
              Date Posted
            </button>
          </div>
          <div
            id="accordion-two"
            className="collapse"
            data-parent="#tr-accordion"
          >
            <div className="panel-body">
              <label htmlFor="today">
                <input type="checkbox" name="today" id="today" />
                Today
              </label>
              <label htmlFor="7-days">
                <input type="checkbox" name="7-days" id="7-days" />{" "}
                7 days
              </label>
              <label htmlFor="30-days">
                <input
                  type="checkbox"
                  name="30-days"
                  id="30-days"
                />
                30 days
              </label>
            </div>
          </div>
        </div>
        <div className="card panel-faq">
          <div className="card-header">
            <button
              className="collapsed"
              data-toggle="collapse"
              data-target="#accordion-three"
              aria-expanded="true"
              aria-controls="accordion-three"
            >
              Salary Range
            </button>
          </div>
          <div
            id="accordion-three"
            className="collapse"
            data-parent="#tr-accordion"
          >
            <div className="panel-body">
              <div className="price-range">
                <div className="price">
                  <span>
                    $100 - <strong>$700</strong>
                  </span>
                  <div className="dropdown category-dropdown pull-right">
                    <a data-toggle="dropdown" href="#">
                      <span className="change-text">USD</span>
                      <i className="fa fa-caret-square-o-down" />
                    </a>
                    <ul className="dropdown-menu category-change">
                      <li>
                        <a href="#">USD</a>
                      </li>
                      <li>
                        <a href="#">AUD</a>
                      </li>
                      <li>
                        <a href="#">EUR</a>
                      </li>
                      <li>
                        <a href="#">GBP</a>
                      </li>
                      <li>
                        <a href="#">JPY</a>
                      </li>
                    </ul>
                  </div>
                  <input
                    type="text"
                    defaultValue=""
                    data-slider-min={0}
                    data-slider-max={700}
                    data-slider-step={5}
                    data-slider-value="[250,450]"
                    id="price"
                  />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card panel-faq">
          <div className="card-header">
            <button
              className="collapsed"
              data-toggle="collapse"
              data-target="#accordion-four"
              aria-expanded="true"
              aria-controls="accordion-four"
            >
              Employment Type
            </button>
          </div>
          <div
            id="accordion-four"
            className="collapse"
            data-parent="#tr-accordion"
          >
            <div className="panel-body">
              <label htmlFor="full-time">
                <input
                  type="checkbox"
                  name="full-time"
                  id="full-time"
                />
                Full Time
              </label>
              <label htmlFor="part-time">
                <input
                  type="checkbox"
                  name="part-time"
                  id="part-time"
                />
                Part Time
              </label>
              <label htmlFor="contractor">
                <input
                  type="checkbox"
                  name="contractor"
                  id="contractor"
                />
                Contractor
              </label>
              <label htmlFor="intern">
                <input type="checkbox" name="intern" id="intern" />
                Intern
              </label>
              <label htmlFor="seasonal">
                <input
                  type="checkbox"
                  name="seasonal"
                  id="seasonal"
                />
                Seasonal / Temp
              </label>
            </div>
          </div>
        </div>
        <div className="card panel-faq">
          <div className="card-header">
            <button
              className="collapsed"
              data-toggle="collapse"
              data-target="#accordion-five"
              aria-expanded="true"
              aria-controls="accordion-five"
            >
              Experience Level
            </button>
          </div>
          <div
            id="accordion-five"
            className="collapse"
            data-parent="#tr-accordion"
          >
            <div className="panel-body">
              <label htmlFor="training">
                <input
                  type="checkbox"
                  name="training"
                  id="training"
                />
                Training
              </label>
              <label htmlFor="entry-level">
                <input
                  type="checkbox"
                  name="entry-level"
                  id="entry-level"
                />
                Entry Level
              </label>
              <label htmlFor="mid-senior">
                <input
                  type="checkbox"
                  name="mid-senior"
                  id="mid-senior"
                />
                Mid-Senior Level
              </label>
              <label htmlFor="top-level">
                <input
                  type="checkbox"
                  name="top-level"
                  id="top-level"
                />
                Top Level
              </label>
            </div>
          </div>
        </div>
        <div className="card panel-faq">
          <div className="card-header">
            <button
              className="collapsed"
              data-toggle="collapse"
              data-target="#accordion-six"
              aria-expanded="true"
              aria-controls="accordion-six"
            >
              Company
            </button>
          </div>
          <div
            id="accordion-six"
            className="collapse"
            data-parent="#tr-accordion"
          >
            <div className="panel-body">
              <input
                type="text"
                placeholder="Search Company"
                className="form-control"
              />
              <label htmlFor="apple">
                <input type="checkbox" name="apple" id="apple" />
                Apple
              </label>
              <label htmlFor="dropbox">
                <input
                  type="checkbox"
                  name="dropbox"
                  id="dropbox"
                />
                Dropbox
              </label>
              <label htmlFor="micromax">
                <input
                  type="checkbox"
                  name="micromax"
                  id="micromax"
                />
                Micromax
              </label>
              <label htmlFor="nokia">
                <input type="checkbox" name="nokia" id="nokia" />
                Nokia
              </label>
              <label htmlFor="microsoft">
                <input
                  type="checkbox"
                  name="microsoft"
                  id="microsoft"
                />
                Microsoft
              </label>
              <label htmlFor="samsung">
                <input
                  type="checkbox"
                  name="samsung"
                  id="samsung"
                />
                Samsung
              </label>
              <div className="see-more">
                <button type="button" className="show-more two">
                  <i
                    className="fa fa-plus-square-o"
                    aria-hidden="true"
                  />
                  See More
                </button>
                <div className="more-category two">
                  <label htmlFor="blackBerry">
                    <input
                      type="checkbox"
                      name="blackBerry"
                      id="blackBerry"
                    />
                    BlackBerry
                  </label>
                  <label htmlFor="motorola">
                    <input
                      type="checkbox"
                      name="motorola"
                      id="motorola"
                    />
                    Motorola
                  </label>
                  <label htmlFor="lenovo">
                    <input
                      type="checkbox"
                      name="lenovo"
                      id="lenovo"
                    />
                    Lenovo
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card panel-faq">
          <div className="card-header">
            <button
              className="collapsed"
              data-toggle="collapse"
              data-target="#accordion-seven"
              aria-expanded="true"
              aria-controls="accordion-seven"
            >
              Location
            </button>
          </div>
          <div
            id="accordion-seven"
            className="collapse"
            data-parent="#tr-accordion"
          >
            <div className="panel-body">
              <input
                type="text"
                placeholder="Search Location"
                className="form-control"
              />
              <label htmlFor="angeles">
                <input
                  type="checkbox"
                  name="angeles"
                  id="angeles"
                />
                Los Angeles, CA
              </label>
              <label htmlFor="kingdom">
                <input
                  type="checkbox"
                  name="kingdom"
                  id="kingdom"
                />
                United Kingdom
              </label>
              <label htmlFor="states">
                <input type="checkbox" name="states" id="states" />
                United States
              </label>
              <label htmlFor="columbia">
                <input
                  type="checkbox"
                  name="columbia"
                  id="columbia"
                />
                British Columbia
              </label>
              <label htmlFor="australia">
                <input
                  type="checkbox"
                  name="australia"
                  id="australia"
                />
                Australia
              </label>
              <label htmlFor="germany">
                <input
                  type="checkbox"
                  name="germany"
                  id="germany"
                />
                Germany
              </label>
              <div className="see-more">
                <button type="button" className="show-more three">
                  <i
                    className="fa fa-plus-square-o"
                    aria-hidden="true"
                  />
                  See More
                </button>
                <div className="more-category three">
                  <label htmlFor="belgium">
                    <input
                      type="checkbox"
                      name="belgium"
                      id="belgium"
                    />
                    Belgium
                  </label>
                  <label htmlFor="brazil">
                    <input
                      type="checkbox"
                      name="brazil"
                      id="brazil"
                    />
                    Brazil
                  </label>
                  <label htmlFor="denmark">
                    <input
                      type="checkbox"
                      name="denmark"
                      id="denmark"
                    />
                    Denmark
                  </label>
                  <label htmlFor="indonesia">
                    <input
                      type="checkbox"
                      name="indonesia"
                      id="indonesia"
                    />
                    Indonesia
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  )
}
