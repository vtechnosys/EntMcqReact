import axios from "axios";
import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { isEmail,isName,isMob,isJobprofile,isHospitalName,isHospitalAddress,isBankname,isAccountHoldername,isAccountnumber,isIfsccode,isMobilenumber,isPasss} from "./validators/QuestionValidation";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Register(){

    const [name,setFname] = useState('');
    const [mob,setMob] = useState('');
    const [em,setEm] = useState('');
    const [jobprofile,setJobprofile]=useState('');
    const [hospitalname,setHospitalName] = useState('');
    const [hospitaladdress,setHospitalAddress] = useState('');
    const [accountholder,setAccountHolder] = useState('');
    const [accountnumber,setAccountNumber] = useState('');
    const [ifsccode,setIfscCode] = useState('');
    const [contactnumber,setContactNumber] = useState('');
    const [bankname,setBankName] = useState('');
    const [pass,setPass] = useState('');
    const [termsconditions, setTermsConditions] = useState(false);
    const [termsError, setTermsError] = useState(false);
    const [nameError,setNameError] = useState(false)
    const [mobError,setMobError] = useState(false)
    const [emError,setEmError] = useState(false)
    const [jobError,setJobError] = useState(false)
    const [hospitalnameError,setHospitalnameError] = useState(false)
    const [hospitaladdressError,setHospitaladdressError]=useState(false)
    const [accountholderError,setAccountHolderError]=useState(false)
    const [accountnumberError,setAccountNumberError]=useState(false)
    const [ifscError,setIfscError]=useState(false)
    const [contactnumberError,setContactNumberError]=useState(false)
    const [banknameError,setBankNameError]=useState(false)
    const [passError,setPassError] = useState(false)
    const [datavalue, setDatavalue] = useState([]);
    function handleRegister()
    {
        if(!isName(name)){
            setNameError(true)
        }
        else if(!isEmail(em)){
            setEmError(true);
        }
        else if(!isMob(mob)){
            setMobError(true)
        }
        else if(!isJobprofile(jobprofile)){
            setJobError(true)
        }
        else if(!isHospitalName(hospitalname)){
            setHospitalnameError(true)
        }
        else if(!isHospitalAddress(hospitaladdress)){
            setHospitaladdressError(true)
        }
        else if(!isBankname(bankname)){
            setBankNameError(true)
        }
        else if(isAccountHoldername(accountholder)){
            setAccountHolderError(true)
        }
        else if(isAccountnumber(accountnumber)){
            setAccountNumberError(true)
        }
        else if(isIfsccode(ifsccode)){
            setIfscError(true)
        }
        else if(isMobilenumber(contactnumber)){
            setContactNumberError(true)
        }
        else if(!isPasss(pass)){
            setPassError(true)
        }
        else{
            //alert('code');
            var hospitaldata = []
            hospitaldata.push({
                hospitalname:hospitalname,
                hospitaladdress:hospitaladdress
            });
            var bankdetail=[]
            bankdetail.push({
                bankname:bankname,
                accountholder:accountholder,
                contactnumber:contactnumber,
                ifsccode:ifsccode,
                accountnumber:accountnumber
            });
            setDatavalue(hospitaldata);
            const data = {
                name:name,
                email:em,
                contact:mob,
                job_profile:jobprofile,
                hospitaldetails:hospitaldata,
                bankdetails:bankdetail,
                password:pass
            }
           // console.log(data);
            
            axios.post("https://entmcq.vertextechnosys.com/api/questioner_reg",data)
            
                    .then((res)=>{
                        const data = res.data;
                        //console.log(data);
                        const id=data[0].id;
                        //console.log(data[0]['status']);
                        if(data[0].status == "success"){
                            
                            
                            localStorage.setItem('questioner_register',true);
                            alert("Registered Successfully Please Check Your Mail Confirm Your Varification");
                            axios.get("https://entmcq.vertextechnosys.com/sendmailtest/"+id)
                            .then((res)=>{
                                // const data=res.data;
                                // console.log(data);
                                // console.log('testing demo');
                            });
                        }
                        else{
                            toast.error(data.msg);
                            //alert(data.msg);
                        }
                    })
                  ///  alert("Registered Successfully Please Check Your Mail Confirm Your Varification");
                            
            //console.log(data);
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
                    <h3 class="mb-3">Questioner Register</h3>
                    <div class="row">
                    <div class="col-sm-6 mb-3">
                            <label class="form-label">Full Name <span class="text-danger">* { nameError ? ( "Invalid Name" ) : ("")}</span></label>
                            <input type="text" class="form-control" placeholder="Full Name" value={name} onChange={(name)=>{setFname(name.target.value)
                            setNameError(false)}} />
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Email ID <span class="text-danger">* { emError ? ( "Invalid Email" ) : ("")}</span></label>
                            <input type="email" class="form-control" placeholder="Email ID" value={em} onChange={(em)=>{setEm(em.target.value)
                            setEmError(false)}} />
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Mobile Number <span class="text-danger">* { mobError ? ( "Invalid Mobile" ) : ("")}</span></label>
                            <input type="text" class="form-control" placeholder="Mobile Number" value={mob} onChange={(mob)=>{setMob(mob.target.value)
                            setMobError(false)}} />
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Job Profile <span class="text-danger">* { jobError ? ( "Invalid Job Profile" ) : ("")}</span></label>
                            <input type="email" class="form-control" placeholder="Job Profile" value={jobprofile} onChange={(jobprofile)=>{setJobprofile(jobprofile.target.value)
                            setJobError(false)}} />
                        </div>
                    </div>
                    <div class="row">
                    <label class="form-label">Hospital Details <span class="text-danger"></span></label>
                    <div class="col-sm-6 mb-3">
                            <label class="form-label">Name<span class="text-danger">* { hospitalnameError ? ( "Invalid Name" ) : ("")}</span></label>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Name" value={hospitalname} onChange={(hospitalname)=>{setHospitalName(hospitalname.target.value) 
                                setHospitalnameError(false)}} />
                                {/* <button class="btn"><i class="bi bi-eye"></i></button> */}
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Address <span
                                    class="text-danger">* { hospitaladdressError ? ( "Invalid Address" ) : ("")}</span></label>
                                    <div class="input-group">
                            <textarea type="" class="form-control"
                                placeholder="Address" value={hospitaladdress} 
                                onChange={(hospitaladdress)=>{setHospitalAddress(hospitaladdress.target.value)
                                setHospitaladdressError(false)}} />
                               
                            </div>
                        </div>
                    </div>
                    <div class="row">
                    <label class="form-label">Bank Details <span class="text-danger"></span></label>
                    
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Account Holder Name<span
                                    class="text-danger">* { accountholderError ? ( "Invalid Account Holder Name" ) : ("")}</span></label>
                                    <div class="input-group">
                            <input type="text" class="form-control"
                                placeholder="Account Holder Name" value={accountholder} onChange={(accountholder)=>{setAccountHolder(accountholder.target.value)
                                setAccountHolderError(false)}} />
                                {/* <button class="btn"><i class="bi bi-eye"></i></button> */}
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Account Number<span class="text-danger">* { accountnumberError ? ( "Invalid Account Number" ) : ("")}</span></label>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Account Number" value={accountnumber} onChange={(accountnumber)=>{setAccountNumber(accountnumber.target.value)
                                setAccountNumberError(false)}} />
                                {/* <button class="btn"><i class="bi bi-eye"></i></button> */}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                    
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">IFSC Code<span class="text-danger">* { ifscError ? ( "Invalid IFSC" ) : ("")}</span></label>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="IFSC Code" value={ifsccode} onChange={(ifsccode)=>{setIfscCode(ifsccode.target.value)
                                setIfscError(false)}} />
                                {/* <button class="btn"><i class="bi bi-eye"></i></button> */}
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Mobile Number<span
                                    class="text-danger">* { contactnumberError ? ( "Invalid Contact Number" ) : ("")}</span></label>
                                    <div class="input-group">
                            <input type="text" class="form-control"
                                placeholder="Mobile Number" value={contactnumber} onChange={(contactnumber)=>{setContactNumber(contactnumber.target.value)
                                setContactNumberError(false)}} />
                                {/* <button class="btn"><i class="bi bi-eye"></i></button> */}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                    <div class="col-sm-6 mb-3">
                            <label class="form-label">Bank Name<span class="text-danger">* { banknameError ? ( "Invalid Bank Name" ) : ("")}</span></label>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Bank Name" value={bankname} onChange={(bankname)=>{setBankName(bankname.target.value)
                                setBankNameError(false)}} />
                                
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label class="form-label">Password <span class="text-danger">* { passError ? ( "Password is not strong" ) : ("")}</span></label>
                            <div class="input-group">
                                <input type="password" class="form-control" placeholder="Password" value={pass} onChange={pass=>setPass(pass.target.value)} />
                                {/* <button class="btn"><i class="bi bi-eye"></i></button> */}
                            </div>
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