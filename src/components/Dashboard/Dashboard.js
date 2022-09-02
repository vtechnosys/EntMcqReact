import React from "react";
import Header from "./Header";

function Dashboard()
{
    return(
<React.Fragment>
    <Header/>
    <div className="container" id="wrapper-content">
        <div className="row" id="demo-version">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-header bg-success bg-opacity-10 p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="alert-heading text-success">
                                    <i className="bi bi-unlock me-2"></i> Unlock Full Access
                                </h6>
                                <p className="alert-message fw-bold">4 Trial Questions Available</p>
                                <p className="alert-message mb-0">Upgrade to get more than <b>450 board-review questions</b>
                                    and detailed explanations,
                                    including correct and incorrect answers, targeted to the ABBexam blueprint.</p>
                            </div>
                            <div>
                                <button className="btn btn-success btn-sm shadow-none" type="button">
                                    Upgrade Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="icon">
                                            <i className="bi bi-person-check"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6>Ask a Physician <sup>TM</sup></h6>
                                            <p>Get access to our medical experts to answer all of your questions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="icon">
                                            <i className="bi bi-graph-up-arrow"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6>Advanced Analytics & Peer Rank</h6>
                                        <p>Target areas of weakness and know how you stack up against your peers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="icon">
                                            <i className="bi bi-pass"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6>100% Pass Guarantee</h6>
                                            <p>Study with confidence knowing we guarantee it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row gx-2 mb-2">
            <div className="col-sm-3">
                <div className="card plaincard">
                    <div className="card-header">
                        Start Quiz
                    </div>
                    <div className="card-body">
                        <p className="fw-bold">Custom Quiz</p>
                        <p>Select your subjects, number of questions, and more.</p>
                        <button type="button" className="btn btn-main btn-sm w-100">New Custom Quiz</button>
                        <hr/>
                        <p className="fw-bold">Quick Start Quiz</p>
                        <p>10 unanswered questions, all subjects, tutor mode.</p>
                        <button type="button" className="btn btn-main btn-sm w-100">New Quick Start Quiz</button>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card h-100 plaincard">
                    <div className="card-header">
                        Performance
                    </div>
                    <div className="card-body">
                        <div className="row gx-1">
                            <div className="col-sm-6 border-end">
                                Pie Chart
                            </div>
                            <div className="col-sm-6">
                                Bar Chart
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-end">
                        <a href="#">More Info</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card plaincard h-100">
                    <div className="card-header">
                        Question Status
                    </div>
                    <div className="card-body">
                        <div className="card card-body mb-2 border-0 bg-success bg-opacity-10 text-success">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">Answered</p>
                                <h2 className="mb-0">25</h2>
                            </div>
                        </div>
                        <div className="card card-body mb-2 border-0 bg-danger bg-opacity-10 text-danger">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">Unanswered</p>
                                <h2 className="mb-0">25</h2>
                            </div>
                        </div>
                        <div className="card card-body border-0 bg-primary bg-opacity-10 text-primary">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">Unseen</p>
                                <h2 className="mb-0">25</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-12">
                <div className="card plaincard">
                    <div className="card-header">Quizzes</div>
                    <div className="card-body">
                        <div className="row gx-2 table-head">
                            <div className="col-sm">Name</div>
                            <div className="col-sm">Created</div>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-1">Correct</div>
                            <div className="col-sm-1">Incorrect</div>
                            <div className="col-sm-1">Unanswered</div>
                            <div className="col-sm-1">No. of Q's.</div>
                            <div className="col-sm-1">Action</div>
                        </div>
                        <div className="row gx-2 table-row align-items-center">
                            <div className="col-sm"><b>[Test]</b>Bioanalysis (ABB) 08-03-2022 Trial</div>
                            <div className="col-sm">Aug 3, 2022 8:19AM</div>
                            <div className="col-sm-1">
                                <div className="progress" style={{height:10}}>
                                    <div className="progress-bar bg-success"  role="progressbar"
                                        aria-label="Success example" style={{width: 25+'%'}} aria-valuenow="25"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-sm-1">-</div>
                            <div className="col-sm-1">-</div>
                            <div className="col-sm-1">4</div>
                            <div className="col-sm-1">4</div>
                            <div className="col-sm-1">
                                <button type="button" className="btn btn-light btn-sm">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</React.Fragment>
    )
}
export default Dashboard