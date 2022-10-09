import React,{useState} from 'react';

function Header(){
    
    const [logstatus,setLogstatus] = useState(()=>{
        const st = localStorage.getItem("login");
        return st || ""
    });
    //console.log(logstatus);
    return(
    <React.Fragment>
        <div className="col-sm-12 px-0">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        <a className="navbar-brand d-flex align-items-end d-lg-block" href="index.html">
                            <img src="/assets/images/ENT-Final-Logo.png" alt="logo"/>
                            <p>The FRCS(ORL-HNS)<br/> Revision Aid</p>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav mx-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/about-us/">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Medical Student</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/specialist">More Specialist</a>
                                    </li>
                                    {logstatus =="" ?
                                        (
                                            <React.Fragment>
                                                <li class="nav-item">
                                                    <a class="nav-link login" href="/login">Login</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link register" href="/register">Register</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link register" href="/questioner_register">Questioner Register</a>
                                                </li>
                                            </React.Fragment>
                                            
                                        )
                                        
                                    :
                                    
                                    (<li class="nav-item">
                                        <a class="nav-link login" href="/dashboard">My Dashboard</a>
                                        </li>)
                                    }
                                    
                                    
                                </ul>
                                <div className="d-flex" role="search">
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-search"></i></span>
                                        <input className="form-control me-2" type="search" placeholder="Search"
                                            aria-label="Search"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Header;