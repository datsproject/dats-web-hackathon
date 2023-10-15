import { useState } from "react";

export default function Ddos() {
  const [selectedMbitRangeValue, setSelectedMbitRangeValue] = useState(1);

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
                DDos Test
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
                  name="approveDdosService"
                  type="checkbox"
                  value=""
                  id="approveDdosService"
                />
                <label
                  className="form-check-label"
                  htmlFor="approveDdosService"
                >
                  I approve participation in the DDOS Test service
                </label>
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="rangeMbit" className="form-label">
                Internet Traffic Scale (1mbit-128mbit)
              </label>

              <div className="d-flex justify-content-between">
                <div className="p-1">1 mbit</div>

                <div className="p-1">128 mbit</div>
              </div>
              <input
                type="range"
                className="form-range"
                id="rangeMbit"
                min="1"
                max="128"
                onChange={(e: any) =>
                  setSelectedMbitRangeValue(e.target.value)
                } /* onInput="showRangeValue(this.value)" onchange="showRangeValue(this.value)" */
              />
            </div>
            <div className="mb-5">
              <h5>
                <span
                  id="selectedMbitRangeValue"
                  className="badge bg-warning text-dark"
                >
                  {selectedMbitRangeValue} mbit{" "}
                </span>
              </h5>
            </div>
            <div className="mb-3">
              <button id="saveDdos" className="btn btn-light" type="submit">
                Save Changes
              </button>
              <button
                id="processingDdos"
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
