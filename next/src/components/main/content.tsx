export default function Content() {
  return (
    <>
      <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
        <div className="col">
          <div className="card radius-10">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0">Earnings</p>
                  <h4 className="my-1">$N/A</h4>
                  <p className="mb-0 font-13">
                    <i className="bx bxs-up-arrow align-middle"></i>$N/A Last 1
                    Week
                  </p>
                </div>
                <div className="widgets-icons ms-auto">
                  <i className="bx bxs-wallet"></i>
                </div>
              </div>
              <div id="chart1"></div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card radius-10">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0">Completed Tasks</p>
                  <h4 className="my-1">N/A</h4>
                  <p className="mb-0 font-13">
                    <i className="bx bxs-up-arrow align-middle"></i>N/A Tasks -
                    Last 1 Week
                  </p>
                </div>
                <div className="widgets-icons ms-auto">
                  <i className="bx bxs-group"></i>
                </div>
              </div>
              <div id="chart2"></div>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="card radius-10">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0">Pending Tasks</p>
                  <h4 className="my-1">N/A</h4>
                  <p className="mb-0 font-13">
                    <i className="bx bxs-down-arrow align-middle"></i>Next 1
                    Week
                  </p>
                </div>
                <div className="widgets-icons ms-auto">
                  <i className="bx bxs-binoculars"></i>
                </div>
              </div>
              <div id="chart3"></div>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="card radius-10">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0">Participation Rate</p>
                  <h4 className="my-1">N/A</h4>
                  <p className="mb-0 font-13">
                    <i className="bx bxs-down-arrow align-middle"></i>Last 12
                    months statistics
                  </p>
                </div>
                <div className="widgets-icons ms-auto">
                  <i className="bx bx-pie-chart"></i>
                </div>
              </div>
              <div id="chart3_1"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-xl-2">
        <div className="col d-flex">
          <div className="card radius-10 w-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <h5 className="mb-1"></h5>
                  <p className="mb-0 font-13"></p>
                </div>
                <div className="font-22 ms-auto">
                  <button
                    id="mintNft"
                    className="btn btn-sm btn-light px-5 radius-30"
                    type="button"
                  >
                    <i className="bx bx-coin"></i> Mint NFT
                  </button>
                  <button
                    id="processingMintNft"
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

              <div id="nftImageDiv" className="text-center justify-center flex">
                <img
                  id="nftImage"
                  src="https://nftcrypto.io/wp-content/uploads/2023/05/NFTs-for-Dummies-Nftcrypto.io_.png"
                  className="rounded-circle object-cover h-fit "
                  alt=""
                  width="400"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col d-flex">
          <div className="card radius-10 w-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <h5 className="mb-1">Notifications</h5>
                  <p className="mb-0 font-13">
                    <i className="bx bxs-calendar"></i>
                    Last 30 days notifications
                  </p>
                </div>
              </div>

              <div className="table-responsive mt-4">
                <table className="table align-middle mb-0 table-hover">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="ms-2">
                            <h6 className="mb-1 font-14">Notification Title</h6>
                            <p className="mb-0 font-13">
                              Notification short description.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>2 Days</td>
                      <td>
                        <div className="badge rounded-pill bg-light text-white w-100">
                          Completed
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="ms-2">
                            <h6 className="mb-1 font-14">Notification Title</h6>
                            <p className="mb-0 font-13">
                              Notification short description.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>2 Days</td>
                      <td>
                        <div className="badge rounded-pill bg-light text-white w-100">
                          Completed
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="ms-2">
                            <h6 className="mb-1 font-14">Notification Title</h6>
                            <p className="mb-0 font-13">
                              Notification short description.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>2 Days</td>
                      <td>
                        <div className="badge rounded-pill bg-light text-white w-100">
                          Completed
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="ms-2">
                            <h6 className="mb-1 font-14">Notification Title</h6>
                            <p className="mb-0 font-13">
                              Notification short description.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>2 Days</td>
                      <td>
                        <div className="badge rounded-pill bg-light text-white w-100">
                          Completed
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-8 d-flex">
          <div className="card radius-10 w-100">
            <div className="card">
              <div className="card-body">
                <div
                  id="world-map-markers"
                  style={{
                    height: "300px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4">
          <div className="card radius-10 overflow-hidden">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="">
                  <p className="mb-1">Progress Payments</p>
                  <h4 className="mb-0">N/A%</h4>
                </div>
              </div>
            </div>
            <div id="chart13"></div>
          </div>
        </div>
      </div>
    </>
  );
}
