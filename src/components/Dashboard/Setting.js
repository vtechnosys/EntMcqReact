import React from "react";
import Header from "./Header";


function Settings()
{
    return(
<React.Fragment>
    <Header/>
    <div class="container" id="wrapper-content">
        <div class="page-heading">
            <h6>Settings</h6>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <div class="card card-body plaincard p-0">
                    <div class="row align-items-start">
                        <div class="col-sm-3">
                            <h6 class="fw-bold mb-0 p-3">Balakrishna Yemul</h6>
                            <div class="nav flex-column nav-pills p-3" id="v-pills-tab" role="tablist"
                                aria-orientation="vertical">
                                <button class="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-profile" type="button" role="tab"
                                    aria-controls="v-pills-profile" aria-selected="true">
                                    <span class="icon"><i
                                        class="bi bi-person-square"></i></span>Profile</button>
                                <button class="nav-link" id="v-pills-myproducts-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-myproducts" type="button" role="tab"
                                    aria-controls="v-pills-myproducts" aria-selected="false"><span class="icon"><i
                                        class="bi bi-bookmarks"></i></span>My Products</button>
                                <button class="nav-link" id="v-pills-resetpassword-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-resetpassword" type="button" role="tab"
                                    aria-controls="v-pills-resetpassword" aria-selected="false"><span class="icon"><i
                                        class="bi bi-lock"></i></span>Reset Password</button>
                                <button class="nav-link" id="v-pills-accesscode-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-accesscode" type="button" role="tab"
                                    aria-controls="v-pills-accesscode" aria-selected="false"><span class="icon"><i
                                        class="bi bi-key"></i></span>Access Code</button>
                            </div>
                        </div>
                        <div class="col-sm-9 border-start">
                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade show active py-3" id="v-pills-profile" role="tabpanel"
                                    aria-labelledby="v-pills-profile-tab" tabindex="0">
                                    <div class="card plaincard">
                                        <div class="card-header">Profile</div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-7">
                                                    <div class="form-container">
                                                        <div class="mb-3">
                                                            <label class="form-label">Email ID</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Email ID"/>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-sm-6">
                                                                <label class="form-label">First Name</label>
                                                                <input type="text" class="form-control"
                                                                    placeholder="First Name"/>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <label class="form-label">Last Name</label>
                                                                <input type="text" class="form-control"
                                                                    placeholder="Last Name"/>
                                                            </div>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label class="form-label">Profession</label>
                                                            <select class="form-select">
                                                                <option value="">Select Profession</option>
                                                            </select>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label class="form-label">Speciality</label>
                                                            <select class="form-select">
                                                                <option value="">Select Speciality</option>
                                                            </select>
                                                        </div>
                                                        <div class="text-end">
                                                            <button class="btn btn-main" type="button">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade py-3" id="v-pills-myproducts" role="tabpanel"
                                    aria-labelledby="v-pills-myproducts-tab" tabindex="0">
                                    <div class="card plaincard mb-3">
                                        <div class="card-header">My Products</div>
                                        <div class="card-body">
                                            <div class="card card-body">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <h6 class="fw-bold mb-1">Bioanalysis (ABB)</h6>
                                                        <p class="mb-0">Expires on 7th August 2022</p>
                                                    </div>
                                                    <div>
                                                        <span
                                                            class="small bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill">
                                                            Expired
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade py-3" id="v-pills-resetpassword" role="tabpanel"
                                    aria-labelledby="v-pills-resetpassword-tab" tabindex="0">
                                    <div class="card plaincard">
                                        <div class="card-header">
                                            Reset Password
                                            <p class="small mb-0 fw-normal text-muted">All Fields <i>are required</i>
                                            </p>
                                        </div>
                                        <div class="card-body pt-0">
                                            <div class="row">
                                                <div class="col-sm-7">
                                                    <div class="form-container">
                                                        <div class="mb-3">
                                                            <label class="form-label">Current Password</label>
                                                            <div class="input-group">
                                                                <input type="password" class="form-control"
                                                                    placeholder="Current Password"/>
                                                                <button class="btn btn-light"><i class="bi bi-eye-slash"></i></button>
                                                            </div>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label class="form-label">New Password</label>
                                                            <div class="input-group">
                                                                <input type="password" class="form-control"
                                                                    placeholder="Must be minimum of 6 characters"/>
                                                                <button class="btn btn-light">
                                                                    <i class="bi bi-eye-slash"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label class="form-label">Confirm New Password</label>
                                                            <div class="input-group">
                                                                <input type="password" class="form-control"
                                                                    placeholder="Must be minimum of 6 characters"/>
                                                                <button class="btn btn-light">
                                                                    <i class="bi bi-eye-slash"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="text-end">
                                                            <button class="btn btn-main" type="button">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade py-3" id="v-pills-accesscode" role="tabpanel"
                                    aria-labelledby="v-pills-accesscode-tab" tabindex="0">
                                    <div class="card plaincard">
                                        <div class="card-header">
                                            Redeem a Product Access Code
                                            <p class="small mb-0 fw-normal text-muted">If you have purchased a BoardVitals plan that has yet to be activated, please input your access code below to begin your subscription
                                            </p>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-7">
                                                    <div class="form-container">
                                                        <div class="mb-3">
                                                            <label class="form-label">Enter access code</label>
                                                            <input type="text" class="form-control"
                                                                    placeholder="Access Code"/>
                                                        </div>
                                                        <div class="text-end">
                                                            <button class="btn btn-main" type="button">Get Access</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Settings;