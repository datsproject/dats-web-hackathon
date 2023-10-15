export default function SideBar({setPage}:{setPage:Function}) {
  return (
    <>
      <div className="sidebar-wrapper" data-simplebar="true">
    <div className="sidebar-header">
        <div>
            <img src="assets/images/dats-logo.png" width="175px" alt="logo icon"/>
        </div>
        {/* <!-- <div>
            <h4 className="logo-text">Dats</h4>
        </div> --> */}
        <div className="toggle-icon ms-auto"><i className='bx bx-arrow-to-left'></i>
        </div>
    </div>

    <ul className="metismenu" id="menu">
        <li>
            <a onClick={()=>setPage('/')} href="/">
                <div className="parent-icon"><i className='bx bx-home-circle'></i>
                </div>
                <div className="menu-title">Dashboard</div>
            </a>
        </li>

        <li className="menu-label">Services</li>

        <li>
            <a onClick={()=>setPage('ddos')} href="#ddos">
                <div className="parent-icon">
                    <i className='bx bx-chevrons-right'></i>
                </div>
                <div className="menu-title">DDOS Test</div>
            </a>
        </li>
        <li>
            <a onClick={()=>setPage('cyber')} href="#cyber">
                <div className="parent-icon"><i className='bx bx-chevrons-right'></i>
                </div>
                <div className="menu-title">Cyber Sec. Research</div>
            </a>
        </li>

        <li>
            <a onClick={()=>setPage('vulnerability')} href="#vulnerability">
                <div className="parent-icon"> <i className='bx bx-chevrons-right'></i>
                </div>
                <div className="menu-title"> Vulnerability Scanning</div>
            </a>
        </li>

        <li>
            <a onClick={()=>setPage('super')} href="#super">
                <div className="parent-icon"> <i className='bx bx-chevrons-right'></i>
                </div>
                <div className="menu-title"> Super Computer</div>
            </a>
        </li>

        <li>
            <a onClick={()=>setPage('blockchain')} href="#blockchain">
                <div className="parent-icon"> <i className='bx bx-chevrons-right'></i>
                </div>
                <div className="menu-title"> Blockchain Security</div>
            </a>
        </li>

        <li className="menu-label">Others</li>

        <li>
            <a onClick={()=>setPage('refferal')} href="#refferal">
                <div className="parent-icon"> <i className='bx bx-chevrons-right'></i>
                </div>
                <div className="menu-title"> Refferal</div>
            </a>
        </li>

        {/* <!-- <li>
            <a onClick={()=>setPage('')} href="javascript:;" className="has-arrow">
                <div className="parent-icon"><i className="bx bx-category"></i>
                </div>
                <div className="menu-title">Categories</div>
            </a>
            <ul>
                <li> <a onClick={()=>setPage('')} href="pages/ddos.html"><i className="bx bx-right-arrow-alt"></i> DDos Test</a>
                </li>
                <li> <a onClick={()=>setPage('')} href="pages/cyber.html"><i className="bx bx-right-arrow-alt"></i> Cyber Sec. Research</a>
                </li>
                <li> <a onClick={()=>setPage('')} href="pages/vulnerability.html"><i className="bx bx-right-arrow-alt"></i> Vulnerability
                        Scanning</a>
                </li>
                <li> <a onClick={()=>setPage('')} href="pages/super.html"><i className="bx bx-right-arrow-alt"></i> Super Computer</a>
                </li>
                <li><a onClick={()=>setPage('')} href="pages/blockchain.html"><i className="bx bx-right-arrow-alt"></i> Blockchain
                        Security</a>
                </li>
            </ul>
        </li> --> */}

        {/* <!-- <li className="menu-label">Pages</li>
        <li>
            <a onClick={()=>setPage('')} href="pages/settings.html">
                <div className="parent-icon">
                    <i className='bx bx-cog'></i>
                </div>
                <div className="menu-title">Settings</div>
            </a>
        </li>
        <li>
            <a onClick={()=>setPage('')} href="pages/login-info.html">
                <div className="parent-icon"><i className='bx bx-cookie'></i>
                </div>
                <div className="menu-title">Login Info</div>
            </a>
        </li>

        <li>
            <a onClick={()=>setPage('')} href="pages/progress-payments.html">
                <div className="parent-icon"> <i className='bx bx-trending-up'></i>
                </div>
                <div className="menu-title"> Progress Payments</div>
            </a>
        </li> --> */}

    </ul>

</div>
    </>
  );
}
