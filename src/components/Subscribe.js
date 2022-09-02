import React,{useEffect,useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import Pricing from "./Pricing";
import "./Pricing.css";
import { BiCheckboxSquare } from "react-icons/bi";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';



function Subscribe(){
    const [loginError,setLoginError] = useState(false)
    const [uid,setUid] = useState(()=>{
        const st = localStorage.getItem("info");
        return st || ""
    });
    const [logs,setLogs] = useState(()=>{
        const st = localStorage.getItem("login");
        
        return st || ""
    });
    
    const sid = useParams();
    function handleLogin()
    {
        //alert('testing');
        console.log(sid)
        if(logs == "")
        {
            //setLoginError(true);
            toast.error('Please login to subscribe plan');
            return false;
        }
        const sdata = {
            user_id:uid,
            package_id:sid.id
        }
        console.log(sdata);
        axios.post("https://entmcq.vertextechnosys.com/api/subscription",sdata)
                .then((res)=>{
                    const data = res.data;
                        console.log(data);
                        if(data.status == "success"){
                            window.location.href="/dashboard"
                        }
                    console.log(res);
                })
    }
    return(
        
<React.Fragment>
    <ToastContainer/>
<div class="container-fluid">
        <div class="row">
            <Header/>

        </div>
    </div>

    <div class="container-fluid" id="aboutus">
        <div class="row">
            <div class="col-sm-12">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-sm-12 d-flex justify-content-between">
                            <h1>Subscribe</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0" id="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Subscribe</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container pb-5" id="main-content">
        <div class="row">
            {/* <div class="col-sm-6">
                <h3 class="mb-4">Specialist:</h3>
                <p>Welcome – This website is especially created and designed to enable you to prepare for the FRCS(ORL-HNS) Part One Examination.</p>
                <p>It is made and updated by trainees who have recently successfully part the FRCS(ORL-HNS) examination on their first sitting and is the ONLY website for this niche examination that exists.</p>
                <p>As an adjunct to your learning, it will enable you to apply theory into examination practice, consolidate your learning and practice prior to the big day.</p>
                <p class="fw-bold">Our unique features:</p>
                <ul>
                    <li>The only website that exists specifically for this particular examination, unlike other generic multiple choice websites</li>
                    <li>Designed and maintained by UK doctors who have passed this examination</li>
                    <li>Option for practicing by sub-specialty or random generated options</li>
                    <li>Option to time yourself and perform &lsquo;mock exams&rsquo; in timed modes</li>
                    <li>Has answers to questions as well as more information/detail or links to resources</li>
                    <li>Option to be paid by us if you submit questions for our SBA question bank</li>
                </ul>
            </div>
            <div class="col-sm-6">
                <img src="/assets/images/aboutus.svg" class="img-fluid"/>
            </div>*/}
            <div class="col-sm-12">
            { loginError ?  (<h3 class="mb-4" style={{color:'red'}}>Please Login First for subscription</h3>) :
            ("")}
            {/* <PricingTable  highlightColor='#023e44'>
                <PricingSlot  onClick={handleLogin} buttonText='TRY IT FREE' buttonClass='btn btn-main px-4 py-2' title='FREE' priceText='$0/month'>
                    <PricingDetail> <b>15</b> Questions</PricingDetail>
                    <PricingDetail> <b>5</b> Subjects</PricingDetail>
                    <PricingDetail> <b>5</b> Quizzes</PricingDetail>
                    <PricingDetail strikethrough> <b>Quiz tracking</b></PricingDetail>
                </PricingSlot>
                <PricingSlot highlighted  buttonText='Subscribe' title='BASIC' buttonClass='btn btn-main px-4 py-2' priceText='$24/month'>
                    <PricingDetail> <b>50</b> Questions</PricingDetail>
                    <PricingDetail> <b>15</b> Subjects</PricingDetail>
                    <PricingDetail> <b>15</b> Quizzes</PricingDetail>
                    <PricingDetail> <b>Quiz tracking</b></PricingDetail>
                </PricingSlot>
                <PricingSlot   buttonText='Subscribe' title='PROFESSIONAL' buttonClass='btn btn-main px-4 py-2' priceText='$99/month'>
                    <PricingDetail> <b>150</b> Questions</PricingDetail>
                    <PricingDetail> <b>25</b> Subjects</PricingDetail>
                    <PricingDetail> <b>25</b> Quizzes</PricingDetail>
                    <PricingDetail> <b>Quiz tracking</b></PricingDetail>
                </PricingSlot>
                <PricingSlot   buttonText='Subscribe' title='ENTERPRISE' buttonClass='btn btn-main px-4 py-2' priceText='$200/month'>
                    <PricingDetail> <b>15</b> Questions</PricingDetail>
                    <PricingDetail> <b>55</b> Subjects</PricingDetail>
                    <PricingDetail> <b>55</b> Quizzes</PricingDetail>
                    <PricingDetail> <b>Quiz tracking</b></PricingDetail>
                </PricingSlot>
            </PricingTable> */}
            <div className="App">
      <header className="App-header"></header>
      <div className="tables centered">
        <div className="rows">
          <div className="column">
            <ul className="price">
              <li className="header">
                <br />
                <br />
                Features
              </li>
              <li>Centralized Teams</li>
              <li>Version History</li>
              <li>Plugin Administrator</li>
              <li>Facebook & Instagram Ads</li>
              <li>Design System Analytics</li>
              <li>Unlimited cloud storage</li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Free
                <br />
                <span className="dollar">0</span>
                <p>per user per month</p>
                <div className="button_cont" align="center">
                  <button type="button" onClick={handleLogin} className="btns" rel="nofollow noopener">
                    Free Trail
                  </button>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Master
                <br />
                <span className="dollar">25</span>
                <p>per user per month</p>
                <div className="button_cont" align="center">
                <button type="button" className="btns" rel="nofollow noopener">
                Master
                  </button>
                  
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Organization
                <br />
                <span className="dollar">50</span>
                <p>per user per month</p>
                <div className="button_cont" align="center">
                <button type="button" className="btns" rel="nofollow noopener">
                    Premium
                  </button>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
                {/* <div class="mb-3">
                    <button type="submit" class="btn btn-main px-4 py-2" onClick={handleLogin}> Free Trial </button>
                </div> */}
                {/* <table>
                    <tr>
                        <th>Plan</th>
                        <th>Master</th>
                        <th>Prepare</th>
                        <th>Cram</th>
                        <th>Free Trial</th>
                    </tr>
                    <tr>
                        <td>Most Up-to-Date Board Review Questions</td>
                        <td>$129</td>
                        <td>Prepare</td>
                        <td>Cram</td>
                        <td>Free Trial</td>
                    </tr>
                    <tr>
                        <td>Detailed Explanations and Rationales</td>
                        <td>$129</td>
                        <td>Prepare</td>
                        <td>Cram</td>
                        <td>Free Trial</td>
                    </tr>
                    <tr>
                        <td>Targeted to ARRT Exam Blueprint</td>
                        <td>$129</td>
                        <td>Prepare</td>
                        <td>Cram</td>
                        <td>Free Trial</td>
                    </tr>
                    <tr>
                        <td>Most Up-to-Date Board Review Questions</td>
                        <td>$129</td>
                        <td>Prepare</td>
                        <td>Cram</td>
                        <td>Free Trial</td>
                    </tr>
                    <tr>
                        <td>Most Up-to-Date Board Review Questions</td>
                        <td>$129</td>
                        <td>Prepare</td>
                        <td>Cram</td>
                        <td>Free Trial</td>
                    </tr>
                </table> */}
            </div> 

            
        </div>
    </div>
    <Footer/>
    
</React.Fragment>
    )
}

export default Subscribe;