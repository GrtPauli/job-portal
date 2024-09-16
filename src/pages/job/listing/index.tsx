import { Footer, Navbar } from "../../../components";
import { AddResumeBanner } from "../components";
import { JobCategoryFilter, Jobs, JobSearch } from "./components";

export default function JobListingPage() {
  return (
    <div>
      <Navbar />
      <section className="job-bg page job-list-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Engineer/Architects</li>
            </ol>
            <h2 className="title">Software Engineer</h2>
          </div>
          <JobSearch/>
          
          <div className="category-info">
            <div className="row">
              <JobCategoryFilter/>
              <Jobs/>
            </div>
          </div>
        </div>
      </section>

      <AddResumeBanner/>
      <Footer />
    </div>
  );
}
