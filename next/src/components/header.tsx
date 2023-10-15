import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Header() {
  return (
    <>
      <header>
        <div className="topbar d-flex align-items-center">
          <nav className="navbar navbar-expand">
            <div className="mobile-toggle-menu">
              <i className="bx bx-menu"></i>
            </div>
            <div className="search-bar flex-grow-1 text-center">
              <i className="bx bx-info-circle"></i> No value is displayed in the
              process of the testnet
            </div>

            {/* <div id="connectedProfile" className="user-box dropdown">
              <a
                className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  id="picture"
                  src="/assets/images/metamask.png"
                  className="user-img"
                  alt="user avatar"
                />
                <div className="user-info ps-3">
                  <p id="accountAddress" className="user-name mb-0">
                    Fullname
                  </p>
                  <p className="designattion mb-0 text-green">Connected</p>
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-user"></i>
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    <i className="bx bx-cog"></i>
                    <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    <i className="bx bx-home-circle"></i>
                    <span>My Tasks</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    <i className="bx bx-dollar-circle"></i>
                    <span>My Earnings</span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider mb-0"></div>
                </li>
                <li>
                  <a id="logout" className="dropdown-item" href="javascript:;">
                    <i className="bx bx-log-out-circle"></i>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div> */}
            <WalletMultiButton />
            {/* <div id="connectToMetamask" className="user-box">
              <a
                className="d-flex align-items-center nav-link"
                href="#"
                role="button"
              >
                <img
                  id="picture"
                  src="/assets/images/metamask.png"
                  className="user-img"
                  alt="user avatar"
                />
                <div className="user-info ps-3">
                  <p id="fullname" className="user-name mb-0">
                    Connect to Metamask
                  </p>
                </div>
              </a>
            </div> */}
          </nav>
        </div>
      </header>
    </>
  );
}
