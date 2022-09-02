import React from "react";
import Header from "./Header";

function Performance()
{
    return(
<React.Fragment>
    <Header/>
    <div class="container" id="wrapper-content">
        <div class="page-heading">
            <h6>Performance By Subject</h6>
        </div>

        <div class="row gx-2 mb-2">
            <div class="col-sm-8">
                <div class="card h-100 plaincard">
                    <div class="card-header">
                        Overall Performance
                    </div>
                    <div class="card-body">
                        <div class="row gx-1">
                            <div class="col-sm-6 border-end">
                                Pie Chart
                            </div>
                            <div class="col-sm-6">
                                Bar Chart
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card plaincard h-100">
                    <div class="card-header">
                        Response Time <i class="bi bi-question-circle ms-2"></i>
                    </div>
                    <div class="card-body">
                        <div class="card card-body mb-2 border-0 bg-success bg-opacity-10 text-success h-50">
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="mb-0">Your Average</p>
                                <h2 class="mb-0">01:52</h2>
                            </div>
                        </div>
                        <div class="card card-body border-0 bg-primary bg-opacity-10 text-primary h-50">
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="mb-0">Board Exam Average</p>
                                <h2 class="mb-0">02:25</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card plaincard">
                    <div class="card-body">
                        <div class="row gx-2 table-head">
                            <div class="col-sm">Subject</div>
                            <div class="col-sm-1">Score</div>
                            <div class="col-sm-2"></div>
                            <div class="col-sm-1">Correct</div>
                            <div class="col-sm-1">Incorrect</div>
                            <div class="col-sm-1">Unanswered</div>
                            <div class="col-sm-1">Average Time</div>
                        </div>
                        <div class="row gx-2 table-row align-items-center">
                            <div class="col-sm">Clinical Pathology - Blood Banking</div>
                            <div class="col-sm-1">0%</div>
                            <div class="col-sm-2">
                                <div class="progress" style={{height:10}}>
                                    <div class="progress-bar bg-success" role="progressbar"
                                        aria-label="Success example" style={{width: 25+'%'}} aria-valuenow="25"
                                        aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-1">-</div>
                            <div class="col-sm-1">-</div>
                            <div class="col-sm-1">4</div>
                            <div class="col-sm-1">0:00</div>
                        </div>
                        <div class="row gx-2 table-row align-items-center">
                            <div class="col-sm">Clinical Pathology - Chemical Pathology</div>
                            <div class="col-sm-1">0%</div>
                            <div class="col-sm-2">
                                <div class="progress" style={{height:10}}>
                                    <div class="progress-bar bg-success" role="progressbar"
                                        aria-label="Success example" style={{width: 50+'%'}} aria-valuenow="50"
                                        aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-1">-</div>
                            <div class="col-sm-1">-</div>
                            <div class="col-sm-1">4</div>
                            <div class="col-sm-1">0:00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</React.Fragment>
    )
}

export default Performance;