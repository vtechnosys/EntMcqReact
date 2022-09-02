import React from "react";

function Header()
{
    return(
        <React.Fragment>
    <nav className="navbar navbar-expand-lg bg-white border-bottom pt-2 pb-0" id="topbar">
        <div className="container">
            <div className="d-flex w-100">
                <div className="flex-shrink-0">
                    <img src="/assets/images/ENT-Final-Logo.png" className="dashboard-logo"/>
                </div>
                <div className="flex-grow-1 ms-4">
                    <div className="row border-bottom pb-2 justify-content-end gx-1">
                        <div className="col-sm-4">
                            <select className="form-select">
                                <option value="">Select Question Bank</option>
                            </select>
                        </div>
                        <div className="col-sm-auto">
                            <div className="d-flex" id="avatar">
                                <a className="btn bg-white mx-2" href="#" title="Help Center"><i
                                        className="bi bi-info-circle"></i></a>
                                <div className="dropdown">
                                    <button className="btn bg-white dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Welcome Balakrishna
                                    </button>
                                    <ul className="dropdown-menu shadow">
                                        <li><a className="dropdown-item" href="/dashboard/settings">
                                                <i className="bi bi-person me-3"></i>Profile
                                            </a></li>
                                        <li><a className="dropdown-item" href="/dashboard/settings">
                                                <i className="bi bi-archive me-3"></i>My Products
                                            </a></li>
                                        <li><a className="dropdown-item" href="/dashboard/settings">
                                                <i className="bi bi-unlock me-3"></i>Reset Password
                                            </a></li>
                                        <li><a className="dropdown-item" href="/dashboard/settings">
                                                <i className="bi bi-key me-3"></i>Access Codes
                                            </a></li>
                                        <li><a className="dropdown-item" href="/logout">
                                                <i className="bi bi-box-arrow-right me-3"></i>Logout
                                            </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Quiz
                                </a>
                                <ul className="dropdown-menu shadow">
                                    <li><a className="dropdown-item" href="#">New Custom Quiz</a></li>
                                    <li><a className="dropdown-item" href="#">Quick Start Quiz</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="quizzes.html">My Quizzes</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Performance
                                </a>
                                <ul className="dropdown-menu shadow">
                                    <li><a className="dropdown-item" href="/dashboard/performance-timeline">Performance Timeline</a></li>
                                    <li><a className="dropdown-item" href="/dashboard/performance">Performance By Subject</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center">
                            <select className="form-select me-2">
                                <option value="">Browse Questions</option>
                            </select>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search"/>
                                <button className="btn">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </nav>
        </React.Fragment>
    )
}

export default Header;