export default function Blockchain() {
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
                Blockchain Security
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="col-xl-9">
        <div className="card">
          <div className="card-body">
            <div className="mb-5 mt-3">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  name="switchApproveBlockchain"
                  id="switchApproveAttackPrevention"
                />
                <label
                  className="form-check-label"
                  htmlFor="switchApproveAttackPrevention"
                >
                  I approve participation in the Blockchain & Web3 Security
                </label>
              </div>
            </div>

            <div className="mb-3">
              <button
                id="saveBlockchain"
                className="btn btn-light"
                type="submit"
              >
                Save Changes
              </button>
              <button
                id="processingBlockchain"
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
          </div>
        </div>
      </div>
    </>
  );
}
