import React from "react";
import Dashboard from "./Dashboard";




function CustomQuiz()
{
    
      //ChartJS.resize(600, 200);
    function AddLibrary(urlOfTheLibrary) {
        const script = document.createElement('script');
        script.src = urlOfTheLibrary;
        script.async = true;
        document.body.appendChild(script);
      }
    return(
        <React.Fragment>
            <Dashboard/>
            <main>
            <div class="row mb-3 gx-2">
            <div class="card-header" style={{padding:10}}>Quiz Name</div>
            <div className="header__search me-3" style={{padding:10}}>
                
                <input type="text"/>
            </div>
            <hr style={{marginTop:10,marginBottom:10,}}/>
            <div class="card-header" style={{padding:10}}>Quiz Mode</div>
            
            <div class="col-sm-3">
                <div class="card plain-card">
                    <div class="card-header">Test</div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="quiz-details">
                                <small>Select your subjects, no. of questions, and more.</small>
                            </div>
                            <input type="radio" name="rmode"/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card plain-card">
                    <div class="card-header">Tutorial</div>
                    
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="quiz-details">
                                <small>10 unanswered questions, all subjects, tutor mode.</small>
                            </div>
                            <input type="radio" name="rmode"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card plain-card">
                    <div class="card-header">Study / Open Book</div>
                    
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="quiz-details">
                                <small>10 unanswered questions, all subjects, tutor mode.</small>
                            </div>
                            <input type="radio" name="rmode"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{marginTop:10,marginBottom:10,}}/>
            
            <div class="col-sm-3">
            <div class="card-header" style={{padding:10}}>Question Status</div>
            <div className="header__search me-3">
                
                <select className="header__input">
                    <option value="">All</option>
                    <option value="">Unanswered</option>
                    <option value="">Incorrect</option>
                    <option value="">Correct</option>
                    <option value="">Unseen</option>
                </select>
            </div>
            </div>

            <div class="col-sm-3">
            <div class="card-header"  style={{padding:10}}>Difficulty Level</div>
            <div className="header__search me-3">
                <select className="header__input">
                    <option value="">All</option>
                    <option value="">Hard</option>
                    <option value="">Moderate</option>
                    <option value="">Easy</option>
                </select>
            </div>
            </div>
            
            <hr style={{marginTop:10,marginBottom:10,}}/>
            <div class="card-header"  style={{padding:10}}>Select Subjects</div>
            
            <div className="col-sm-4"><input type="radio" name="trial"/>Trail </div>
                <div className="col-sm-4"  > <input type="radio" name="trial"/>All</div>
            <div className="col-sm-6" style={{marginTop:10}}>
                <input type="checkbox" name="trial"/> Subject 1

            </div>
            <div className="col-sm-6">
                <input type="checkbox" name="trial"/> Subject 1

            </div>
            <div className="col-sm-6">
                <input type="checkbox" name="trial"/> Subject 1
                
            </div>
            <div className="col-sm-6">
                <input type="checkbox" name="trial"/> Subject 1

            </div>
            <div className="col-sm-6">
                <input type="checkbox" name="trial"/> Subject 1
                
            </div>
            <div className="col-sm-6">
                <input type="checkbox" name="trial"/> Subject 1

            </div>
            <div className="col-sm-6">
                <input type="checkbox" name="trial"/> Subject 1
                
            </div>
            <hr style={{marginTop:10,marginBottom:10,}}/>
            <div class="col-sm-3">
            <div class="card-header" style={{padding:10}}>No. of Questions</div>
            <div className="header__search me-3" style={{padding:10}}>
                
                <input type="text"/>
            </div>
            </div>

            <div class="col-sm-3">
            <div class="card-header"  style={{padding:10}}>Time mode</div>
            <div className="header__search me-3">
            <div class="card-header"  style={{padding:10}}><input type="radio" name="trial"/> Untimed</div><div class="card-header"  style={{padding:10}}> <input type="radio" name="trial"/> Timed</div>
             
            </div>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-main px-4 py-2"> Start Quiz </button>
            </div>

        </div>

    </main>
    {AddLibrary('/assets/js/main.js')}
        </React.Fragment>
    )
}
export default CustomQuiz;