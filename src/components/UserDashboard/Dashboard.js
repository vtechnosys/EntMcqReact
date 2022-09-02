
import React, {useEffect, useState} from "react";
import axios from "axios";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard()
{
    const [subjects,setSubjects]=useState([])
    const [sid,setSid] = useState('');
    const [logstatus,setLogstatus] = useState(()=>{
        const st = localStorage.getItem("login");
        return st || ""
    });
    const [uid,setUid] = useState(()=>{
        const st = localStorage.getItem("info");
        return st || ""
    });

    function isLog()
    {
        if(logstatus == ""){
            window.location.href = "/login";
        }
        else{
            const sts = localStorage.getItem('status');
            if(sts){
                toast('Login Successfull');
                localStorage.removeItem('status');
            }
        }
    }
    function fetchSubjects()
      {
        axios.get('https://entmcq.vertextechnosys.com/api/fetchSubscription/'+uid)
              .then((res)=>{
                const data = res.data;
                setSid(data[data.length-1].pid)
                setSubjects(data);
                console.log(data);
              })
      }
      function AddCC(urlOfTheLibrary) {
        const script = document.createElement('link');
        script.href = urlOfTheLibrary;
        script.rel ="stylesheet";
        script.type="text/css";
        document.head.appendChild(script);
      }
      useEffect(()=>{
        isLog()
        fetchSubjects();
      },[])
    return(
<React.Fragment>
{AddCC('/assets/css/Sidebar.css')}
<ToastContainer/>
<header className="header">
        <div className="header__container border-bottom">
            <img src="/assets/images/ENT-Final-Logo.png" alt="" className="header__img" />
            <a href="/" className="header__logo">
                <img src="/assets/images/ENT-Final-Logo.png" alt=""/>
            </a>
            <div className="header__search">
                <select className="header__input" value={sid} onChange={sid=>{setSid(sid.target.value)}}>
                    <option value="">Select Question Bank</option>
                    {
                        subjects.map((obj)=>{
                            
                            return (<option value={obj.pid}>{obj.qname}</option>)
                        })
                    }
                </select>
            </div>
            <div>
                <a href="#" className="btn btn-outline-secondary btn-sm">
                    <i className='bx bx-help-circle'></i>
                </a>
            </div>
            <div className="header__toggle">
                <i className="bx bx-menu" id="header-toggle"></i>
            </div>
        </div>
        <div className="breadcrumb__container">
            <div className="d-none d-lg-block">
                <div className="row w-100 justify-content-between align-items-center">
                    <div className="col-sm-6">
                        <div className="d-flex align-items-center">
                            <div className="border-end border-secondary pe-3 me-3 fw-bold">Welcome to, Dashboard</div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="/dashboard"></a></li>
                                    {/* <!-- <li className="breadcrumb-item active" aria-current="page">Library</li> --> */}
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="d-flex align-items-center">
                            <div className="header__search me-3">
                                <select className="header__input">
                                    <option value="">Browse Question</option>
                                </select>
                            </div>
                            <div className="header__search searchbox">
                                <input type="search" placeholder="Search" className="header__input"/>
                                <i className="bx bx-search header__icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div className="nav" id="navbar">
        <nav className="nav__container">
            <div>
                <a href="#" className="nav__link nav__logo">
                    <i className="bx bxs-disc nav__icon"></i>
                    <span className="nav__logo-name">ENTMCQ</span>
                </a>
                <div className="nav__list">
                    <div className="nav__items">
                        <h3 className="nav__subtitle">Menu</h3>
                        <a href="/dashboard" className="nav__link active">
                            <i className="bx bx-home nav__icon"></i>
                            <span className="nav__name">Dashboard</span>
                        </a>
                        <div className="nav__dropdown">
                            <a href="#" className="nav__link">
                                <i className='bx bx-test-tube nav__icon'></i>
                                <span className="nav__name">Quizzes</span>
                                <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                            </a>
                            <div className="nav__dropdown-collapse">
                                <div className="nav__dropdown-content">
                                    <a href="/dashboard/custom-quiz" className="nav__dropdown-item">New Custom Quiz</a>
                                    <a href="#" className="nav__dropdown-item">Quick Start Quiz</a>
                                    <a href="quizzes.html" className="nav__dropdown-item">My Quizzes</a>
                                </div>
                            </div>
                        </div>
                        <div className="nav__dropdown">
                            <a href="#" className="nav__link">
                                <i className='bx bx-line-chart nav__icon'></i>
                                <span className="nav__name">Performance</span>
                                <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                            </a>
                            <div className="nav__dropdown-collapse">
                                <div className="nav__dropdown-content">
                                    <a href="/dashboard/performance-timeline" className="nav__dropdown-item">Timeline</a>
                                    <a href="/dashboard/performance" className="nav__dropdown-item">Subject</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nav__items">
                        <h3 className="nav__subtitle">Profile</h3>
                        <div className="nav__dropdown">
                            <a href="#" className="nav__link">
                                <i className="bx bx-cog nav__icon"></i>
                                <span className="nav__name">Settings</span>
                                <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                            </a>
                            <div className="nav__dropdown-collapse">
                                <div className="nav__dropdown-content">
                                    <a href="#" className="nav__dropdown-item">Profile</a>
                                    <a href="#" className="nav__dropdown-item">My Products</a>
                                    <a href="#" className="nav__dropdown-item">Reset Password</a>
                                    <a href="#" className="nav__dropdown-item">Access Codes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="/logout" className="nav__link nav__logout">
                <i className="bx bx-log-out nav__icon"></i>
                <span className="nav__name">Log Out</span>
            </a>
        </nav>
    </div>
    
</React.Fragment>
    )
}

export default Dashboard;