import React from "react";
import Header from "./Header";

function Quizzes()
{
    return(
<React.Fragment>
<div class="container" id="wrapper-content">
        <div class="page-heading">
            <h6>My Quizzes</h6>
        </div>

        <div class="d-flex justify-content-between align-items-center w-100">
            <div class="nav nav-tabs" id="myTab" role="tablist">
                <button class="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane"
                    type="button" role="tab" aria-controls="all-tab-pane" aria-selected="true">All</button>
                <button class="nav-link" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completed-tab-pane"
                    type="button" role="tab" aria-controls="completed-tab-pane" aria-selected="false">Completed</button>
                <button class="nav-link" id="inprogress-tab" data-bs-toggle="tab" data-bs-target="#inprogress-tab-pane"
                    type="button" role="tab" aria-controls="inprogress-tab-pane"
                    aria-selected="false">In-Progress</button>
            </div>
            <div>
                <a href="quizzes/archived.html" class="archieved-link">View Archived Quizzes</a>
            </div>
        </div>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab"
                tabindex="0">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card plaincard">
                            <div class="card-body">
                                <div class="row gx-2 table-head">
                                    <div class="col-sm">Name</div>
                                    <div class="col-sm">Created</div>
                                    <div class="col-sm-1"></div>
                                    <div class="col-sm-1">Correct</div>
                                    <div class="col-sm-1">Incorrect</div>
                                    <div class="col-sm-1">Unanswered</div>
                                    <div class="col-sm-1">No. of Q's.</div>
                                    <div class="col-sm-1">Action</div>
                                    <div class="col-sm-1"></div>
                                </div>
                                <div class="row gx-2 table-row align-items-center">
                                    <div class="col-sm"><b>[Test]</b>Bioanalysis (ABB) 08-03-2022 Trial</div>
                                    <div class="col-sm">Aug 3, 2022 8:19AM</div>
                                    <div class="col-sm-1">
                                        <div class="progress" style="height:10px">
                                            <div class="progress-bar bg-success" role="progressbar"
                                                aria-label="Success example" style="width: 25%" aria-valuenow="25"
                                                aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-1">-</div>
                                    <div class="col-sm-1">-</div>
                                    <div class="col-sm-1">4</div>
                                    <div class="col-sm-1">4</div>
                                    <div class="col-sm-1">
                                        <button type="button" class="btn btn-light btn-sm">
                                            Continue
                                        </button>
                                    </div>
                                    <div class="col-sm-1">
                                        <button type="button" class="btn bg-primary bg-opacity-10 text-primary btn-sm">
                                            Archive
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="completed-tab-pane" role="tabpanel" aria-labelledby="completed-tab"
                tabindex="0">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card plaincard">
                            <div class="card-body">
                                <div class="row gx-2 table-head">
                                    <div class="col-sm">Name</div>
                                    <div class="col-sm">Created</div>
                                    <div class="col-sm-1"></div>
                                    <div class="col-sm-1">Correct</div>
                                    <div class="col-sm-1">Incorrect</div>
                                    <div class="col-sm-1">Unanswered</div>
                                    <div class="col-sm-1">No. of Q's.</div>
                                </div>
                                <div class="row gx-2 table-row align-items-center">
                                    <div class="col-sm"><b>[Test]</b>Bioanalysis (ABB) 08-03-2022 Trial</div>
                                    <div class="col-sm">Aug 3, 2022 8:19AM</div>
                                    <div class="col-sm-1">
                                        <div class="progress" style="height:10px">
                                            <div class="progress-bar bg-success" role="progressbar"
                                                aria-label="Success example" style="width: 25%" aria-valuenow="25"
                                                aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-1">-</div>
                                    <div class="col-sm-1">-</div>
                                    <div class="col-sm-1">4</div>
                                    <div class="col-sm-1">4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="inprogress-tab-pane" role="tabpanel" aria-labelledby="inprogress-tab"
                tabindex="0">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card plaincard">
                            <div class="card-body">
                                <div class="row gx-2 table-head">
                                    <div class="col-sm">Name</div>
                                    <div class="col-sm">Created</div>
                                    <div class="col-sm-1"></div>
                                    <div class="col-sm-1">Correct</div>
                                    <div class="col-sm-1">Incorrect</div>
                                    <div class="col-sm-1">Unanswered</div>
                                    <div class="col-sm-1">No. of Q's.</div>
                                    <div class="col-sm-1">Action</div>
                                </div>
                                <div class="row gx-2 table-row align-items-center">
                                    <div class="col-sm"><b>[Test]</b>Bioanalysis (ABB) 08-03-2022 Trial</div>
                                    <div class="col-sm">Aug 3, 2022 8:19AM</div>
                                    <div class="col-sm-1">
                                        <div class="progress" style="height:10px">
                                            <div class="progress-bar bg-success" role="progressbar"
                                                aria-label="Success example" style="width: 25%" aria-valuenow="25"
                                                aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-1">-</div>
                                    <div class="col-sm-1">-</div>
                                    <div class="col-sm-1">4</div>
                                    <div class="col-sm-1">4</div>
                                    <div class="col-sm-1">
                                        <button type="button" class="btn btn-light btn-sm">
                                            Continue
                                        </button>
                                    </div>
                                </div>
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

export default Quizzes;