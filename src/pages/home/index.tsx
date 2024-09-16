import { Footer, Navbar } from "../../components";
import { DownloadBanner, HomeHero, InfoSummary, JobCategories, LatestJobs, WorkshopTraining } from "./components";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <div className="page">
        <div className="container">
          <JobCategories />
          <LatestJobs />
          <WorkshopTraining/>
          <InfoSummary/>
        </div>
      </div>

      <DownloadBanner/>
      <Footer/>
    </div>
  );
}
