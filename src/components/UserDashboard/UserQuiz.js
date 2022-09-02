import React,{useState} from 'react';
import Dashboard from "./Dashboard";
import axios from 'axios';
function UserQuiz(){
    function AddLibrary(urlOfTheLibrary) {
        const script = document.createElement('script');
        script.src = urlOfTheLibrary;
        script.async = true;
        document.body.appendChild(script);
      }
    const [quizname,setQuizname]=useState('');
    const [noquestion,setQuestion]=useState('');
    const [mode,setMode]=useState('');
    const [timemode,setTimemode]=useState('');
    
    const [userinfo, setUserInfo] = useState({
        
        difficultylevel: [],
        response: [],
      });
      
    const [userinfor, setUserInfor] = useState({
        
        subject: [],
        response: [],
      });
    const handlesubject=(e)=>{
        const {value,checked}=e.target;
        const { subject } = userinfor;
        const vl = e.target.value;
          const info = {
            name:vl
          }
          //console.log(info);
        if (checked) {
          
          setUserInfor({
            subject: [...subject, info],
            response: [...subject, info],
            
          });
        }
        else {
            setUserInfor({
                subject: subject.filter((e) => e !== info),
              response: subject.filter((e) => e !== info),
            });
            
          }
    }
    const difficultylevel = (e) =>{
        const {value,checked}=e.target;
        const { difficultylevel } = userinfo;
        const vl = e.target.value;
        //alert(vl);
          const info = {
            name:vl
          }
        console.log(info);
        if (checked) {
          
          setUserInfo({
            difficultylevel: [...difficultylevel, info],
            response: [...difficultylevel, info],
            
          });
        }
        else {
            setUserInfo({
                difficultylevel: difficultylevel.filter((e) => e !== info),
              response: difficultylevel.filter((e) => e !== info),
            });
            
          }
    }
    //console.log(userinfo.response);
    const difficultyinfo=userinfo.response;
    const subjectinfo=userinfor.response;
    function Addquiz()
    {
        //alert(difficultyinfo);
        const subData = {
            quiz_name:quizname,
            mode:mode,
            difficulty:difficultyinfo,
            subject:subjectinfo,
            no_of_question:noquestion,
            time_mode:'24 hours',
            time_type:'24',
            total_sec:'sec'
          };
          axios.post('http://entmcq.vertextechnosys.com/api/quiz',subData)
                .then((res) =>{
                  console.log(res);
                  //alert("Subject added successfully");
                  const data = res.data;
                  if(data[0].status=="success")
                    alert("Quiz added successfully");
                  else{
                    alert("Quiz failed");
                  }
                  
                })
    }
    return(
        <React.Fragment>
            <Dashboard/>
            <main>
        <div class="row">
            <div class="col-sm-12">
                <div class="data-container form-container">
                    <div class="card plain-card">
                        <div class="card-header">Quiz Mode</div>
                        <div class="card-body">
                            <div class="row border-bottom mb-2 pb-2">
                                <div class="col-sm-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name=""
                                            id="flexRadioDefault1" value="Text" onChange={mode =>setMode(mode.target.value)}/>
                                        <label class="form-check-label fw-bold" for="flexRadioDefault1">
                                            Text
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-9 border-start">
                                    <p class="mb-0"><i class='bx bx-help-circle me-2'></i>Answers and explanations
                                        available
                                        <strong class="text-uppercase">after</strong> the quiz
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" value="Tutor" onChange={mode =>setMode(mode.target.value)}/>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            <p class="mb-0 fw-bold">Tutor</p>
                                            <small><b>First</b> response to a question is used to determine
                                                score</small>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault3" value="Study/Open Book" onChange={mode =>setMode(mode.target.value)}/>
                                        <label class="form-check-label" for="flexRadioDefault3">
                                            <p class="mb-0 fw-bold">Study / Open Book</p>
                                            <small><b>Final</b> response to a question is used to determine
                                                score</small>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-9 border-start">
                                    <p class="mb-0"><i class='bx bx-help-circle me-2'></i>Answers and explanations
                                        available
                                        <strong class="text-uppercase">during</strong> the quiz
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-header">Question Status</div>
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-sm-5">
                                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1"
                                            autocomplete="off" checked/>
                                        <label class="btn btn-outline-primary" for="btnradio1">All (30)</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2"
                                            autocomplete="off"/>
                                        <label class="btn btn-outline-primary" for="btnradio2">Unanswered (0)</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3"
                                            autocomplete="off"/>
                                        <label class="btn btn-outline-primary" for="btnradio3">Incorrect (0)</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio4"
                                            autocomplete="off"/>
                                        <label class="btn btn-outline-primary" for="btnradio4">Correct (0)</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio5"
                                            autocomplete="off"/>
                                        <label class="btn btn-outline-primary" for="btnradio5">Unseen (20)</label>
                                    </div>
                                </div>
                                <div class="col-sm-2 border-start border-end">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Marked (0)
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-5">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Keyword Search Filter"/>
                                        <button class="btn btn-light" type="button">
                                            <i class='bx bx-search-alt-2'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-header">Difficulty Level</div>
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="border-end pe-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="All(20)" onChange={difficultylevel}/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            All (20)
                                        </label>
                                    </div>
                                </div>
                                <div class="ps-3">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" value="Har(20)" onChange={difficultylevel}/>
                                        <label class="form-check-label" for="flexCheckDefault1">
                                            Hard (20)
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" value="Moderate(20)" name="difficultylevel" onChange={difficultylevel}/>
                                        <label class="form-check-label" for="flexCheckDefault2">
                                            Moderate (20)
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" value="Easy(20)" onChange={difficultylevel} name="difficultylevel"/>
                                        <label class="form-check-label" for="flexCheckDefault3">
                                            Easy (20)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-header">Select Subject</div>
                        <div class="card-body">
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" value="trial sample questions" onChange={handlesubject} id="flexCheckDefault"/>
                                <label class="form-check-label fw-bold" for="flexCheckDefault">
                                    Trial Sample Questions (22)
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="form-check me-5">
                                    <input class="form-check-input" type="checkbox" value="All Subjects"  id="flexCheckDefault"/>
                                    <label class="form-check-label fw-bold" for="flexCheckDefault">
                                        All Subjects
                                    </label>
                                </div>
                                <button class="btn bg-danger text-danger bg-opacity-10 btn-sm py-1">
                                    <i class='bx bx-x-circle me-2'></i> Clear
                                </button>
                            </div>
                            <ul class="list-group list-group-flush column-2">
                                <li class="list-group-item">
                                    <input class="form-check-input me-1" type="checkbox" onChange={handlesubject} value="First
                                        checkbox"
                                        id="firstCheckboxStretched"/>
                                    <label class="form-check-label stretched-link" for="firstCheckboxStretched">First
                                        checkbox</label>
                                </li>
                                <li class="list-group-item">
                                    <input class="form-check-input me-1" type="checkbox" onChange={handlesubject} value="Second
                                        checkbox"
                                        id="secondCheckboxStretched"/>
                                    <label class="form-check-label stretched-link" for="secondCheckboxStretched">Second
                                        checkbox</label>
                                </li>
                                <li class="list-group-item">
                                    <input class="form-check-input me-1" type="checkbox" onChange={handlesubject} value="Third
                                        checkbox"
                                        id="thirdCheckboxStretched"/>
                                    <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Third
                                        checkbox</label>
                                </li>
                                <li class="list-group-item">
                                    <input class="form-check-input me-1" type="checkbox" onChange={handlesubject} value="Fourth
                                        checkbox"
                                        id="firstCheckboxStretched"/>
                                    <label class="form-check-label stretched-link" for="firstCheckboxStretched">Fourth
                                        checkbox</label>
                                </li>
                            </ul>
                        </div>

                        <div class="card-header">Number of Questions (Max 22)</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-2">
                                    <p>Questions Available (22)</p>
                                    <div class="d-flex">
                                        <div class="btn-group me-3 pe-3 border-end" role="group"
                                            aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1"
                                                autocomplete="off" />
                                            <label class="btn btn-outline-primary" for="btnradio1">10</label>

                                            <input type="radio" class="btn-check" name="btnradio"  id="btnradio2"
                                                autocomplete="off"/>
                                            <label class="btn btn-outline-primary" for="btnradio2">25</label>
                                        </div>
                                        <input type="number" class="form-control" value={noquestion} onChange={noquestion=>setQuestion(noquestion.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-header">Timed Mode</div>
                        <div class="card-body">
                            <div class="btn-group me-3 pe-3 border-end" role="group"
                                aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio" value="Untimed" onChange={timemode=>setTimemode(timemode.target.value)} autocomplete="off"
                                    checked/>
                                <label class="btn btn-outline-primary" for="btnradio1">Untimed</label>

                                <input type="radio" class="btn-check" name="btnradio" value="Timed" onChange={timemode=>setTimemode(timemode.target.value)} autocomplete="off"/>
                                <label class="btn btn-outline-primary" for="btnradio2">Timed</label>
                            </div>
                        </div>

                        <div class="card-header">Quiz Name</div>
                        <div class="card-body">
                            <input type="text" class="form-control" placeholder="Quiz Name" value={quizname} onChange={quizname=>setQuizname(quizname.target.value)}/>
                        </div>

                        <div class="card-footer border-top">
                            <div class="d-flex justify-content-between">
                                <button type="button" class="btn btn-secondary">Cancel</button>
                                <button type="button" class="btn btn-main" onClick={Addquiz}>Start Quiz</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    {AddLibrary('/assets/js/main.js')}
        </React.Fragment>
    )
}
export default UserQuiz;