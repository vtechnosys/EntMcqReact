import React, { useState,useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login()
{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [usertype,setUsertype]=useState('Register');
    function checkRegister(){
        const regi = localStorage.getItem('register')
        if(regi){
            toast.success("Registered Successfull");
            localStorage.removeItem('register');
        }
    }
    function checkRegisterQuestioner(){
        const regiq = localStorage.getItem('questioner_register')
        if(regiq){
            toast.success("Registered Successfull");
            localStorage.removeItem('questioner_register');
        }
    }
    function handleLogin()
    {
        const logData = {
            "email":email,
            "ps":pass,
            "usertype":usertype,
        }
        console.log(logData);
        axios.post('https://entmcq.vertextechnosys.com/api/login',logData)
             .then((resp)=>{
                console.log(resp.data);
                const data = resp.data;
                if(data.status == "success")
                {
                    
                    localStorage.setItem('login',"success");
                    localStorage.setItem('status',true);
                    localStorage.setItem('info',data.info.id);
                    window.location.href="/dashboard";
                }
                else{
                    
                    //alert(data.msg);
                    toast.error(data.msg);
                }
             })
        //console.log(logData);
    }

    useEffect(()=>{
        checkRegister();
        checkRegisterQuestioner();
    },[])

    return(
<React.Fragment>
    <ToastContainer/>
    <div class="container-fluid">
        <div class="row">
            <Header/>
        </div>
    </div>
    {/* <div class="container my-5">
        <div class="row align-items-center">
            
            <div class="col-sm-9" style={{marginLeft: 'auto',marginRight:'auto'}}>
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-6 p-5 d-none d-sm-none d-lg-block">
                                <img src="assets/images/login.svg" class="img-fluid"/>
                            </div>
                            <div class="col-sm-6 p-5">
                                <h3 class="fw-bold mb-4">Sign In</h3>
                                <div class="form-container">
                                    <div class="mb-3">
                                        <label class="form-label">User Name <span class="text-danger">*</span></label>
                                        <input type="text" placeholder="UserName" class="form-control" value={email} onChange={em=>setEmail(em.target.value)}/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Password <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <input placeholder="Password" class="form-control" type="password" value={pass} onChange={ps=>setPass(ps.target.value)} />
                                            <button type="button" class="btn btn-light bg-transparent">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-6">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Remeber Me
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 text-end">
                                            <a href="#" class="text-main text-decoration-none">Forget Password</a>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <button type="submit" class="btn btn-main px-4 py-2" onClick={handleLogin}> Log In </button>
                                    </div>
                                    <div class="text-center small">
                                        New User? <a href="register.html" class="text-main text-decoration-none">Register Here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    <div class="container my-1 my-lg-5">
        <div class="row align-items-center">
            
            <div class="col-sm-9" style={{marginLeft: 'auto',marginRight:'auto'}}>
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-6 py-3  px-5  d-none d-sm-none d-lg-block">
                                <img src="/assets/images/login.svg" class="img-fluid"/>
                            </div>
                            <div class="col-sm-6 p-5">
                                <h3 class="fw-bold mb-4">Sign In</h3>
                                <div class="form-container">
                                    <div class="mb-3">
                                        <label class="form-label">User Name <span class="text-danger">*</span></label>
                                        <input type="text" placeholder="UserName" class="form-control" value={email} onChange={em=>setEmail(em.target.value)} />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Password <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <input placeholder="Password" class="form-control" type="password" value={pass} onChange={ps=>setPass(ps.target.value)} />
                                            <button type="button" class="btn btn-light bg-transparent">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">User Type <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <select class="form-control" value={usertype} onChange={usertype=>setUsertype(usertype.target.value)}>
                                            <option value="Register">Register</option>
                                            <option value="Questioner_register">Questioner Register</option>
                                            </select>
                                            
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-6">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Remeber Me
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 text-end">
                                            <a href="#" class="text-main text-decoration-none">Forget Password</a>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <button type="submit" class="btn btn-main px-4 py-2" onClick={handleLogin}> Log In </button>
                                    </div>
                                    <div class="text-center small">
                                        New User? <a href="/register" class="text-main text-decoration-none">Register Here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/> 
    
</React.Fragment>
    )
}

export default Login;