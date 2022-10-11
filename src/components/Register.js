import axios from "axios";
import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { isEmail,isName,isMob,isPasss } from "./validators/Validations";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Register(){

    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [mob,setMob] = useState('');
    const [em,setEm] = useState('');
    const [cem,setCem] = useState('');
    const [pass,setPass] = useState('');
    const [cpass,setCpass] = useState('');
    const [prof,setProf] = useState('');
    const [pract,setPract] = useState('');
    const [termsconditions, setTermsConditions] = useState(false);
    const [nameError,setNameError] = useState(false)
    const [lnameError,setLnameError] = useState(false)
    const [mobError,setMobError] = useState(false)
    const [emError,setEmError] = useState(false)
    const [passError,setPassError] = useState(false)
    const [cpassError,setCPassError] = useState(false)
    const [termsError, setTermsError] = useState(false);

    function handleRegister()
    {
        //alert(prof);
        if(!isName(fname)){
            setNameError(true)
        }
        else if(!isName(lname)){
            
            setLnameError(true)
            
        }
        else if(!isEmail(em)){
            setEmError(true);
        }
        else if(!isMob(mob)){
            setMobError(true)
        }
        else if(!isPasss(pass)){
            setPassError(true)
        }
        else if(pass != cpass)
        {
            setCPassError(true)
        }
        else if(!termsconditions){
            setTermsError(true)
        }
        else{
            let newDate = new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
    
            let separator="/";
            let dt =  `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`;
            const data = {
                name:fname+" "+lname,
                email:em,
                password:pass,
                register_date:dt,
                prof:prof,
                area:pract
    
            }
            console.log(data);
            axios.post("https://entmcq.vertextechnosys.com/api/users",data)
                    .then((res)=>{
                        const data = res.data;
                        console.log(data);
                        const id=data.id;
                        //console.log(id);
                        if(data.status == "success"){
                            //alert("Registered Successfully");
                            localStorage.setItem('register',true);
                            alert("Registered Successfully Please Check Your Mail Confirm Your Varification");
                            axios.get("https://entmcq.vertextechnosys.com/sendmail/"+id)
                            .then((res)=>{
                                const data=res.data;
                                console.log(data);
                                // console.log('testing demo');
                            });
                        }
                        else{
                            toast.error(data.msg);
                            //alert(data.msg);
                        }
                    })
            console.log(data);
        }
        
        
    }

    function handleCheck(e)
    {
        //alert(e.target.checked);
        //console.log(e.target.checked);
        setTermsConditions(e.target.checked);
    }

    function validate()
    {
        // if(!fname){
        //     setNameError(true);
        //     return false;
        // }
        // else if(!lname){
        //     setLnameError(true);
        //     return false;
        // }
        // else if(!em)
        // {
        //     //alert('Email-Id is empty');
        //     setEmError(true)
        //     return false;
        // }
        // else if(!mob){
        //     //alert('Invalid Email id');
        //     setMobError(true)
        //     return false;
        // }
        // else if(!pass){
        //     //alert('Password is empty');
        //     setPassError(true);
        //     return false;
        // }
        
        
        // else if(pass!=cpass){
        //     //alert('Invalid Password');
        //     setCPassError(true);
        //     return false;
        // }
        // else if(!termsconditions){
        //     setTermsError(true);
        // }
        // if(em){
        //     const err = /\S+@\S+\.\S+/.test(em)
        //     console.log(err);
        //     setEmError(!err)
        //     if(!err)
        //         return err
        // }
        // if(pass){
        //     if (validator.isStrongPassword(pass, {
        //         minLength: 8, minLowercase: 1,
        //         minUppercase: 1, minNumbers: 1, minSymbols: 1
        //       })) {
        //         setPassError(false)
        //       } else {
        //         return false
        //         setPassError(true)
        //       }

        // }
        return termsconditions;
    }

    return (
<React.Fragment>
    <ToastContainer/>
    <div class="container-fluid">
        <div class="row">
            <Header/>
        </div>
    </div>
    <div class="container my-5">
        <div class="row align-items-center">
            <div class="col-sm-4 bg-main p-4 d-none d-lg-block">
                <img src="assets/images/login.svg" class="img-fluid" alt="Register"/>
            </div>
            <div class="col-sm-8 p-4">
                <div class="form-container">
                    <h3 class="mb-3">Register</h3>
                    <div class="row">
                    <div class="col-sm-6 mb-3">
                            <label class="form-label">First Name <span class="text-danger">* { nameError ? ( "Invalid Name" ) : ("")}</span></label>
                            <input type="text" class="form-control" placeholder="First Name" value={fname} onChange={(fname)=>{setFname(fname.target.value)
                            setNameError(false)}} />
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Last Name <span class="text-danger">* { lnameError ? ( "Invalid Name" ) : ("")}</span></label>
                            <input type="text" class="form-control" placeholder="Last Name" value={lname} onChange={(lname)=>{setLname(lname.target.value)
                                setLnameError(false)}} />
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Email ID <span class="text-danger">* { emError ? ( "Invalid Email" ) : ("")}</span></label>
                            <input type="email" class="form-control" placeholder="Email ID" value={em} onChange={(em)=>{setEm(em.target.value)
                            setEmError(false)}} />
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Mobile Number <span class="text-danger">* { mobError ? ( "Invalid Mobile" ) : ("")}</span></label>
                            <input type="text" class="form-control" placeholder="Mobile Number" value={mob} onChange={(mob)=>{setMob(mob.target.value)
                            setMobError(false)}} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Password <span class="text-danger">* { passError ? ( "Password is not strong" ) : ("")}</span></label>
                            <div class="input-group">
                                <input type="password" class="form-control" placeholder="Password" value={pass} onChange={pass=>setPass(pass.target.value)} />
                                {/* <button class="btn"><i class="bi bi-eye"></i></button> */}
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Password Confirmation <span
                                    class="text-danger">* { cpassError ? ( "Password is not matching" ) : ("")}</span></label>
                                    <div class="input-group">
                            <input type="password" class="form-control"
                                placeholder="Password Confirmation" value={cpass} onChange={cpass=>setCpass(cpass.target.value)} />
                                {/* <button class="btn"><i class="bi bi-eye"></i></button> */}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Your Profession Is<span class="text-danger">*</span></label>
                            <select class="form-select"  onChange={prof=>setProf(prof.target.value)} value={prof}
                            
                            >
                                <option value="">Select</option>
                                <option value="Profession-I">Profession-I</option>
                                <option value="Profession-II">Profession-II</option>
                                <option value="Profession-III">Profession-III</option>
                            </select>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Your area of practive is<span
                                    class="text-danger">* </span></label>
                                    <select class="form-select"  onChange={pract=>setPract(pract.target.value)} value={pract}>
                                        <option value="">Select</option>
                                        <option value="Area-I">Area-I</option>
                                        <option value="Area-II">Area-II</option>
                                        <option value="Area-III">Area-III</option>
                                    </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" onChange={handleCheck} id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                             I agree with the <a href="#" class="text-main" >Terms & Conditions</a>
                             <span class="text-danger">* { termsError ? ( "Please accept terms & conditions" ) : ("")}</span>
                            </label>
                          </div>
                    </div>
                    <button type="button" class="btn btn-main" onClick={handleRegister}>Register</button>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</React.Fragment>
    )
}

export default Register;