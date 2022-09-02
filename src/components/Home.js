import React from "react";

import HeaderIndex from "./HeaderIndex";
import Footer from "./Footer";

function Home(){
    return(
<React.Fragment>

        
    <div className="container-fluid">
        <div className="row" id="home-banner">
            <HeaderIndex/>
            <div className="col-sm-12">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <h1>Prepare For The<br/>
                                FRCS(ORL-HNS)<br/>
                                Part One Examination.</h1>
                            <div className="text-center text-lg-start">
                                <a className="btn bg-orange text-white px-5 py-3 rounded-pill" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row gy-3" id="features">
                <div className="col-sm-4">
                    <div className="card card-body h-100 shadow-lg">
                        <i className="bi bi-briefcase"></i>
                        <h4>Professional <br/>
                            Mentor</h4>
                        <p>Designed and maintained by
                            UK doctors who have passed
                            this examination</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card card-body h-100 shadow-lg">
                        <i className="bi bi-shop-window"></i>
                        <h4>Mock<br/>
                            Exams</h4>
                        <p>Option to time yourself and
                            perform mock exams in
                            timed modes</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card card-body h-100 shadow-lg">
                        <i className="bi bi-journal-text"></i>
                        <h4>Online<br/>
                            Exam</h4>
                        <p>This examination is Single <br/>
                            Best Answer</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container" id="categories">
            <div className="section-heading text-center">
                <h3>Categories</h3>
            </div>
            <div className="row gy-3">
                <div className="col-sm-3 col-6">
                    <div className="card card-body h-100 shadow-lg">
                        <img src="assets/images/ear.png"/>
                        <p>Otology</p>
                    </div>
                </div>
                <div className="col-sm-3 col-6">
                    <div className="card card-body h-100 shadow-lg">
                        <img src="assets/images/headneck.png"/>
                        <p>Head and Neck</p>
                    </div>
                </div>
                <div className="col-sm-3 col-6">
                    <div className="card card-body h-100 shadow-lg">
                        <img src="assets/images/face.png"/>
                        <p>Rhinology and
                            Facial Plastics</p>
                    </div>
                </div>
                <div className="col-sm-3 col-6">
                    <div className="card card-body h-100 shadow-lg">
                        <img src="assets/images/ent.png"/>
                        <p>Paediatric ENT</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container" id="search-box">
            <div className="card card-body p-4">
                <div className="row">
                    <div className="col-sm-4 mb-3 mb-lg-0">
                        <select className="form-select">
                            <option value="">Select Occupation</option>
                        </select>
                    </div>
                    <div className="col-sm-4 mb-3 mb-lg-0">
                        <select className="form-select">
                            <option value="">Select Occupation</option>
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-main w-100">Find Your Question Bank</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mb-5">
            <div className="section-heading text-center">
                <h3>About Company</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-7 text-center mb-4">
                    <h5>Welcome – This website is especially created and designed to enable you to prepare for the FRCS(ORL-HNS) Part One Examination.</h5>
                    <p>It is made and updated by trainees who have recently successfully part the FRCS(ORL-HNS) examination on their first sitting and is the ONLY website for this niche examination that exists.</p>
                    <p>As an adjunct to your learning, it will enable you to apply theory into examination practice, consolidate your learning and practice prior to the big day.</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-sm-5">
                    <img src="assets/images/doctor-tab.jpg" className="img-fluid mb-3 mb-lg-0"/>
                </div>
                <div className="col-sm-7">
                    <p className="fw-bold">Our unique features:</p>
                    <ul className="static-list">
                        <li>The only website that exists specifically for this particular examination, unlike other generic multiple choice websites</li>
                        <li>Designed and maintained by UK doctors who have passed this examination</li>
                        <li>Option for practicing by sub-specialty or random generated options</li>
                        <li>Option to time yourself and perform &lsquo;mock exams&rsquo; in timed modes</li>
                        <li>Has answers to questions as well as more information/detail or links to resources</li>
                        <li>Option to be paid by us if you submit questions for our MCQ/SBA bank</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container" id="achievements">
            <div className="section-heading text-center">
                <h3>Achievement</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-7 text-center mb-4">
                    <h5>Our Only Concern Is Your Education</h5>
                    <p>This website is by no means a recommendation as your only preparation method for your upcoming
                        examination.</p>
                </div>
            </div>
            <div className="row align-items-center g-3">
                <div className="col-sm-3 col-6 text-center">
                    <img src="/assets/images/group.png"/>
                    <h2>353k</h2>
                    <p>Happy Students</p>
                </div>
                <div className="col-sm-3 col-6 text-center">
                    <img src="/assets/images/communication.png"/>
                    <h2>129+</h2>
                    <p>Expert Instructors</p>
                </div>
                <div className="col-sm-3 col-6 text-center">
                    <img src="/assets/images/computer.png"/>
                    <h2>15k+</h2>
                    <p>Popular Courses</p>
                </div>
                <div className="col-sm-3 col-6 text-center">
                    <img src="/assets/images/ui-design.png"/>
                    <h2>152k</h2>
                    <p>Mobile Apps Users</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid" id="subscribe">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-sm-6">
                    <h3 className="mb-3 mb-lg-0">Subscribe For Latest
                        Newsletter</h3>
                </div>
                <div className="col-sm-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Your Email"/>
                        <button className="btn bg-orange text-white" type="button">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container py-4">
        <div className="row align-items-center justify-content-between">
            <div className="col-sm-6 text-center text-lg-start">
                <h4>Join the world's largest learning 
                    platform today</h4>
            </div>
            <div className="col-sm-6 text-center text-lg-end">
                <button className="btn bg-orange text-white" type="button">Learn More</button>
            </div>
        </div>
    </div>
    <Footer/>
    
</React.Fragment>
    )
}

export default Home;