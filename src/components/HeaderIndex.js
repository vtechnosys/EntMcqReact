import React,{useState} from 'react';

function HeaderIndex(){
    const [logstatus,setLogstatus] = useState(()=>{
        const st = localStorage.getItem("login");
        return st || ""
    });
    return(
        <React.Fragment>
            <div class="col-sm-12 px-0">
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a class="navbar-brand d-flex align-items-end d-lg-block" href="index.html">
                            <img src="/assets/images/ENT-Final-Logo.png" alt="logo"/>
                            <p>The FRCS(ORL-HNS)<br/> Revision Aid</p>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-start"  id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav mx-auto">
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
                                            </React.Fragment>
                                            
                                        )
                                        
                                    :
                                    
                                    (<li class="nav-item">
                                        <a class="nav-link login" href="/dashboard">My Dashboard</a>
                                        </li>)
                                    }
                                </ul>
                                <div class="d-flex" role="search">
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-search"></i></span>
                                        <input class="form-control me-2" type="search" placeholder="Search"
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

export default HeaderIndex;