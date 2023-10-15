export default function Cyber() {

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log("You clicked submit.");
  }
  return (
    <>
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="javascript:;">
                  <i className="bx bx-home-alt"></i>
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Cyber Sec. Research
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="col-xl-9">
        <div className="card">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="mb-5 mt-3">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  name="switchApproveCyberSecurityResearch"
                  id="switchApproveCyberSecurityResearch"
                />
                <label
                  className="form-check-label"
                  htmlFor="switchApproveCyberSecurityResearch"
                >
                  I approve participation in the Cyber Security Research Service
                </label>
              </div>
            </div>

            <div className="mb-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  name="chkWebSecurity"
                  id="chkWebSecurity"
                />
                <label className="form-check-label" htmlFor="chkWebSecurity">
                  Web Security
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  name="chkServerSecurity"
                  id="chkServerSecurity"
                />
                <label className="form-check-label" htmlFor="chkServerSecurity">
                  Server Security
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  name="chkNetworkSecurity"
                  id="chkRansomwareResearch"
                />
                <label
                  className="form-check-label"
                  htmlFor="chkRansomwareResearch"
                >
                  Ransomware Research
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  name="chkMalwareResearch"
                  id="chkMalwareResearch"
                />
                <label
                  className="form-check-label"
                  htmlFor="chkMalwareResearch"
                >
                  Malware Research
                </label>
              </div>
            </div>

            <div className="mb-3">
              <button id="saveCyber" className="btn btn-light" type="submit">
                Save Changes
              </button>
              <button
                id="processingCyber"
                className="btn btn-light d-none"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Processing...
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
