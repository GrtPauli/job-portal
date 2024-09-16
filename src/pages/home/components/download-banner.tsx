export default function DownloadBanner() {
  return (
    <section id="download" className="clearfix parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2>Download on App Store</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a href="" className="download-app">
              <img src="images/icon/16.png" alt="Image" className="img-fluid" />
              <span className="pull-left">
                <span>available on</span>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a href="" className="download-app">
              <img src="images/icon/17.png" alt="Image" className="img-fluid" />
              <span className="pull-left">
                <span>available on</span>
                <strong>App Store</strong>
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a href="" className="download-app">
              <img src="images/icon/18.png" alt="Image" className="img-fluid" />
              <span className="pull-left">
                <span>available on</span>
                <strong>Windows Store</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
