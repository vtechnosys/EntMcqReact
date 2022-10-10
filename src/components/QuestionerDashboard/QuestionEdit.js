



import React, { useState, useRef, useMemo, useEffect } from 'react';

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import axios from 'axios';

import { Triangle } from 'react-loader-spinner';
import TableRows from '../ui/TableRows';
import { useParams } from 'react-router-dom'
import Dashboard from "./Dashboard";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function QuestionEdit()
{
    const qid = useParams();
    const [subjects, setSubjects] = useState([]);
  const [subid, setSubid] = useState('');
  const [qtitle, setQTitle] = useState('');
  const [title, setTitle] = useState('');
  const [explain, setExplain] = useState('');
  const [qstatus, setQstatus] = useState('inactive');
  const [level, setLevel] = useState('');
  const [showProcess, setShowProcess] = useState(true);
  const [error, setError] = useState(false)
  const [rowsData, setRowsData] = useState([{ans:'',setans:false}]);
  const [trial,setTrial]=useState('No');
  const [mock,setMock]=useState('No');
  const [quick,setQuick]=useState('No');


   const [isQuestionError,setQuestionError]=useState(false);
   const [isTitleError,setTitleError]=useState(false);
   const [isSubjectError,setSubjectError]=useState(false);
   const [isExplainError,setExplainError]=useState(false);
   const [isLevelError,setLevelError]=useState(false);
   const [isTrialError,setTrialError]=useState(false);

   const warn = { borderWidth: 1, borderColor: '#f44336' }
   const nowarn = { borderWidth: 1, borderColor: '#d9dee3' }
   function fetchSubject() {
    setShowProcess(true)
    axios.get('https://entmcq.vertextechnosys.com/api/fetchCategory')
      .then((res) => {
        const data = res.data;
        setSubjects(data);
        setShowProcess(false)
      })
  }
  function fetchQuestion() {
    axios.get('https://entmcq.vertextechnosys.com/api/question/' + qid.qid)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setTitle(data.questions.title);
        setExplain('' + data.questions.explanation);
        setQTitle(data.questions.qtitle);
        setLevel(data.questions.qmode);
        //setExplain('welcome')
        setQstatus(data.questions.status);
        setSubid(data.questions.sub_id);

        setTrial(data.questions.trial);
        setMock(data.questions.mock);
        setQuick(data.questions.quick);
        // console.log(data.mock);
        var ansopt = data.questions.answer_option
        var ans = data.ans;
        var ansdata = []
        ans.map((obj) => {
          if (ansopt == obj.id) {
            ansdata.push({
              'ans': obj.answer,
              'setans': true
            })
          }
          else {
            ansdata.push({
              'ans': obj.answer,
              'setans': false
            })
          }

        })
        // console.log(ansdata);
        setRowsData(ansdata);
        //setRowsData(JSON.parse(data.));
        // console.log(explain);
        // console.log(qid)
      })

  }
  function handleTitleChange(content) {
    setTitle(content);
    //console.log(content);
  }

  function handleExplainChnage(content) {
    setExplain(content);
  }

  
  function handleClick() {
    if(qtitle==""){
      toast.error('Enter Question Title');
      setQTitle();
      setQuestionError(true)
    }else if(subid=="")
    {
      toast.error('Select Subject');
      setSubid('');
      setSubjectError(true)
    }else if(title==""){
      toast.error('Enter Question');
      setTitle('');
      setTitleError(true)
    }else if(explain=="")
    {
      toast.error('Enter Explanation');
      setExplain('');
      setExplainError(true)
    }else if(level=="")
    {
      toast.error('Choose Level');
      setLevel('');
      setLevelError(true)
    }else if(trial=="")
    {
      toast.error('Choose Trial');
      setTrial('');
      setTrialError(true)
    }
    else
    {
      
      const qusData = {
        id:qid.qid,
      title: title,
      answer_option: rowsData,
      explanation: explain,
      doctor_id: '20',
      qmode: level,
      qtitle: qtitle,
      sub_id: subid,
      trial:trial,
      mock:mock,
      quick:quick
      }
      console.log(qusData);
      setShowProcess(true)
      axios.put('https://entmcq.vertextechnosys.com/api/question/' + qid.qid, qusData)
      .then((resp) => {
        const data = resp.data;
         console.log(data)
        if (data.status == 'success') {
          window.location.href = '/view_questions';
        }
        else {
          toast.error('Invalid Details');
        }
      })
    }
      
  }
  const noStyle = {
    display: 'none',
  }

  const yesStyle = {
    display: 'block',
  }



  const addTableRows = () => {

    const rowsInput = {
      ans: '',
      setans:false

    }
    setRowsData([...rowsData, rowsInput])

  }
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  }

  const handleChange = (index, evnt) => {

    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    console.log(value)
    console.log(rowsInput);
    setRowsData(rowsInput);



  }
  const handleChangesetevent = (index)=>{
  // const {name, value } = index;
    const rowsInput = [...rowsData];
    
    var ft='';
    var rowele='';
    var kp='';

    const newState = rowsInput.map((obj)=>{
      ft=obj.ans;
      
      
      rowele=rowsInput[index]['ans'];
      
      if(rowele === ft)
      {
        return {...obj,setans:true};
        
      }
      else
      {
        return {...obj,setans:false};
      }
      return obj;  

    });
    setRowsData(newState)

    console.log(rowsData);
        
  };
  function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  }

  useEffect(() => {
    fetchSubject();
    fetchQuestion();
    console.log(showProcess)
  }, []);

    return(
        <React.Fragment>
       

      <div className="layout-wrapper layout-content-navbar" style={showProcess ? noStyle : yesStyle}></div>
        <div className="layout-container"></div>
            <Dashboard/>
            {error && (<div
            class="bs-toast toast toast-placement-ex m-2 show bg-warning top-0 end-0 fade show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-delay="2000"

          >
            <div class="toast-header">
              <i class="bx bx-bell me-2"></i>
              <div class="me-auto fw-semibold">Alert</div>
              {/* <small>11 mins ago</small> */}
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={() => { setError(false) }}></button>
            </div>
            <div class="toast-body">somefields are empty</div>
          </div>)}
            <main>
            <div class="row mb-3 gx-2">
            
            
            
            
            
            <div class="col-sm-6">
            <div class="card-header" style={{padding:10}}>Question Title</div>
                <div class="card plain-card">
                    
                        {/* <div class="d-flex justify-content-between align-items-center"> */}
                            {/* <div class="quiz-details">
                                <small>Select your subjects, no. of questions, and more.</small>
                            </div> */}
                            <input type='text'
                            class="form-control"
                            id="exampleFormControlSelect1"
                            aria-label="Default select example"
                            style={isQuestionError ? warn : nowarn}
                            onChange={(qtitle) => {setQTitle(qtitle.target.value)
                            setQuestionError(false)
                            }}
                            value={qtitle}/>
                        {/* </div> */}
                    
                    
                </div>
            </div>
            <div class="col-sm-6">
            <div class="card-header" style={{padding:10}}>Category</div>
                <div class="card plain-card">
                    
                <select
                            class="form-select"
                            id="exampleFormControlSelect1"
                            aria-label="Default select example"
                            style={isSubjectError ? warn : nowarn}
                            onChange={(subid) => {setSubid(subid.target.value)
                            setSubjectError(false)
                            }}
                            value={subid}
                          >
                            <option value="">Select Category</option>
                            {
                              subjects.map((obj) => {
                                return (
                                  <option value={obj.id}>{obj.name}</option>
                                )
                              })
                            }

                          </select>
                    
                    
                </div>
            </div>
            <div class="row mb-3 gx-2">
            <div class="col-sm-12">
                <div class="card-header" style={{padding:10}}>Question</div>
                <div class="card plain-card">
                    
                        {/* <div class="d-flex justify-content-between align-items-center"> */}
                            {/* <div class="quiz-details">
                                <small>Select your subjects, no. of questions, and more.</small>
                            </div> */}
                            <SunEditor setOptions={{ height: 300, }} onChange={handleTitleChange} style={isTitleError ? warn : nowarn} setContents={title} />
                        {/* </div> */}
                    
                    
                </div>
            </div>
            </div>
            <div class="row mb-3 gx-2">
            <div class="col-sm-12">
                <div class="card-header" style={{padding:10}}>Explaination</div>
                <div class="card plain-card">
                    
                    {/* <div class="d-flex justify-content-between align-items-center"> */}
                        {/* <div class="quiz-details">
                            <small>Select your subjects, no. of questions, and more.</small>
                        </div> */}
                        <SunEditor setContents={explain} setOptions={{ height: 700, }} style={isExplainError ? warn : nowarn} onChange={handleExplainChnage} />
                    {/* </div> */}
                
                
            </div>
            </div>
            </div>
           
            
            
            <label htmlFor="exampleFormControlSelect1" className="form-label" style={{ marginTop: 20, }}>Difficulty level</label>
                        <div className="col-sm-4 mb-3">

                          <input type='radio' name='level' id="exampleFormControlSelect1" aria-label="Default select example"
                            onChange={level => setLevel(level.target.value)}
                            value="hard"
                            checked={level == "hard"}
                            style={isLevelError ? warn : nowarn}
                          /> Hard

                        </div>
                        <div className="col-sm-4 mb-3">

                          <input type='radio' name='level' id="exampleFormControlSelect1" aria-label="Default select example"
                            onChange={level => setLevel(level.target.value)}
                            value='moderate'
                            checked={level == "moderate"}
                            style={isLevelError ? warn : nowarn}
                          /> Moderate
                        </div>
                        <div className="col-sm-4 mb-3">

                          <input type='radio' name='level' id="exampleFormControlSelect1"
                            onChange={level => setLevel(level.target.value)}
                            value='easy'
                            checked={level == "easy"}
                            style={isLevelError ? warn : nowarn}
                          /> Easy
                        </div>
            <div class="row mb-3 gx-2">
            <div class="col-sm-12">
            <table className="table">
                            <thead>
                              <tr>
                                <th>Add Answers</th>
                                <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                              </tr>
                            </thead>
                            <tbody>
                              <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} handleChangesetevent={handleChangesetevent}/>
                            </tbody>
                          </table>
            </div>
            </div>
            <label htmlFor="exampleFormControlSelect1" className="form-label" style={{ marginTop: 20, }}>Trial</label>
                        <div className="col-sm-2 mb-3">

                          <input type='radio' name='trial' id="exampleFormControlSelect1" aria-label="Default select example"
                            onChange={trial => setTrial(trial.target.value)}
                            value="trial" checked={trial == "trial"} style={isTrialError ? warn : nowarn} /> Yes

                        </div>
                        <div className="col-sm-2 mb-3">

                          <input type='radio' name='trial' id="exampleFormControlSelect1" aria-label="Default select example"
                            onChange={trial => setTrial(trial.target.value)}
                            value='No' checked={trial == "No"} style={isTrialError ? warn : nowarn} /> No
                        </div>

                        <label htmlFor="exampleFormControlSelect1" className="form-label" style={{ marginTop: 20, }}>Mock</label>
                        <div className="col-sm-2 mb-3">

                          <input type='radio' name='mock' id="exampleFormControlSelect1" aria-label="Default select example"
                            onChange={mock => setMock(mock.target.value)}
                            value="mock" checked={mock === "mock"} /> Yes

                        </div>
                        <div className="col-sm-2 mb-3">

                          <input type='radio' name='mock' id="exampleFormControlSelect1" aria-label="Default select example"
                            onChange={mock => setMock(mock.target.value)}
                            value='No' checked={mock === "No"} /> No
                        </div>

                        <label htmlFor="exampleFormControlSelect1" className="form-label" style={{ marginTop: 20, }}>Quick</label>
                        <div className="col-sm-2 mb-3">

                          <input type='radio' name='quick' id="exampleFormControlSelect1" aria-label="Default select example"
                            onChange={quick => setQuick(quick.target.value)}
                            value="quick" checked={quick === "quick"} /> Yes

                        </div>
                        <div className="col-sm-2 mb-3">

                          <input type='radio' name='quick' id="exampleFormControlSelect1" aria-label="Default select example"
                            onChange={quick => setQuick(quick.target.value)}
                            value='No' checked={quick === "No"} /> No
                        </div>
        <div className="mb-3">
                          <button className="btn btn-primary d-grid w-100" type="submit" style={{ backgroundColor: "#188ccc" }} onClick={handleClick}>Submit</button>
                        </div>
                        </div>

    </main>
    <ToastContainer />
      {AddLibrary("/assets/vendor/libs/jquery/jquery.js")}
      {AddLibrary("/assets/vendor/libs/popper/popper.js")}
      {AddLibrary("/assets/vendor/js/bootstrap.js")}
      {AddLibrary("/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js")}
      {AddLibrary("/assets/vendor/js/menu.js")}

      {AddLibrary("/assets/vendor/libs/apex-charts/apexcharts.js")}
      {AddLibrary("/assets/js/main.js")}
      {AddLibrary("/assets/js/dashboards-analytics.js")}
        </React.Fragment>
    )
}
export default QuestionEdit;