import React from "react";
import Dashboard from "./Dashboard";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,
    LinearScale,
    PointElement,
    LineElement,Title,);



function PerformanceTimeline()
{
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
    const data = {
        labels: ['Answered', 'Unanswered', 'unseen'],
        datasets: [
          {
            label: 'Performance',
            data: [7, 2, 1],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
              
            ],
            borderWidth: 1,
          },
        ],
      };
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
        <div class="card card-body bg-danger border-0 bg-opacity-10 text-danger mb-3">
            <div class="d-flex justify-content-between align-items-center">
                <div class="card h-100 plain-card" style={{width:600}}>
                    <div class="card-header">Performance</div>
                    <div class="card-body">
                        <Line data={data} />
                    </div>
                    
                </div>
                <div class="card plain-card h-100" style={{width:600}}>
                    <div class="card-header">Question Status</div>
                    <div class="card-body text-center">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="card card-body bg-success bg-opacity-10 text-success border-0">
                                    <h2 class="mb-1">7</h2>
                                    <p class="mb-0">Answered</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card card-body bg-primary bg-opacity-10 text-primary border-0">
                                    <h2 class="mb-1">2</h2>
                                    <p class="mb-0">Unanswered</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card card-body bg-danger bg-opacity-10 text-danger border-0">
                                    <h2 class="mb-1">1</h2>
                                    <p class="mb-0">Unseen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        
        <div class="row gx-2">
            <div class="col-sm-9">
                <div class="card h-100 plain-card">
                    <div class="card-header">Quizzes</div>
                    <div class="card-body">
                        <table class="table dashboard-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Created</th>
                                    <th>Correct</th>
                                    <th>Incorrect</th>
                                    <th>Unanswered</th>
                                    <th># of Q's</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p class="mb-2"><b>[Test]</b> Bioanalysis (ABB) 08-03-2022 Trial</p>
                                        <div class="progress" style={{height: 5}}>
                                            <div class="progress-bar" role="progressbar" aria-label="Example 1px high"
                                                style={{width: 25+'%'}} aria-valuenow="25" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>Aug 3, 2022 8:19AM</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>
                                        <button type="button"
                                            class="btn bg-main-light text-main btn-sm">Continue</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    </main>
    {AddLibrary('/assets/js/main.js')}
        </React.Fragment>
    )
}
export default PerformanceTimeline;