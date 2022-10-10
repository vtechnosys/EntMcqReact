import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header';
import DataTable from 'react-data-table-component';
import Dashboard from "./Dashboard";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function ViewQuestion() {
  const [quesitons, setQuesitons] = useState([]);
  const [subjects, setSubjects] = useState([])
  const [sub, setSub] = useState('');
  var cnt = 0;
  const clms = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true,
      compact: false,
      maxWidth: '10px',
      cell: row => (

        <div>{cnt++}</div>
      )
    },
    {
      name: 'Title',
      selector: row => row.qtitle,
      sortable: true,
      wrap: true,
      maxWidth: '400px',
      cell: row => (
        <div dangerouslySetInnerHTML={{ __html: row.qtitle }} />
      )
    },
    {
      name: 'Subject Name',
      selector: row => row.sname,
      sortable: true,
      wrap: true,
      maxWidth: '20px',
      cell: row => (
        <div>{row.sname}</div>
      )
    },
    {
      name: 'Doctor Name',
      selector: row => row.dname,
      sortable: true,
      wrap: true,
      maxWidth: '120px',
      cell: row => (
        <div>{row.dname}</div>
      )
    },
    {
      name: 'Qst. Type',
      selector: row => row.trial,
      sortable: true,
      wrap: true,
      maxWidth: '50px',
      cell: row => (
        <div>{row.trial}</div>
      )
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      maxWidth: '150px',
      conditionalCellStyles: [
        {
          when: row => row.status === 'active',
          style: {
            color: '#696cff'
          }
        },
        {
          when: row => row.status === 'inactive',
          style: {
            color: '#ffab00'
          }
        }
      ]
    },
    {
      name: "Actions",
      button: true,
      maxWidth: '200px',
      cell: (row) => (
        <div>
          <button class="dropdown-item" onClick={() => editOption(row.id)}
          ><i class="bx bx-edit-alt me-1"></i> Edit</button>
          <button class="dropdown-item" onClick={() => deleteOption(row.id)}
          ><i class="bx bx-trash me-1"></i> Delete</button>
        </div>
      )
    }
  ]
  function fetchQuestions() {
    axios.get('https://entmcq.vertextechnosys.com/api/question')
      .then((res) => {
        const data = res.data;
        setQuesitons(data);
      });
  }
  function fetchSubjects() {
    axios.get('https://entmcq.vertextechnosys.com/api/fetchCategory')
      .then((res) => {
        const data = res.data;
        setSubjects(data);
      })
  }
  function addAnsws(id) {
    window.location.href = "/answers/" + id;
  }
  function viewAnsws(id) {
    window.location.href = "/viewAnswers/" + id;
  }
  function editOption(id) {
    window.location.href = "/edit_question/" + id;
  }

  function deleteOption(id) {
    axios.delete('https://entmcq.vertextechnosys.com/api/question/' + id)
      .then((res) => {
        console.log(res);
        //alert("Subject added successfully");
        const data = res.data;
        if (data.status == "success") {
          window.location.href = "/view_questions";

        }

        else {
          toast.error('Invalid Details');
        }
        //fetchSubjects();
      })
  }

  function setTrial(id) {
    axios.get('https://entmcq.vertextechnosys.com/api/trial/' + id)
      .then((res) => {
        console.log(res);
        //alert("Subject added successfully");
        const data = res.data;
        if (data.msg == "success") {
          alert("Question is now Trial ");
          window.location.reload();

        }

        else {
          alert("Subject Delete failed");
        }
        //fetchSubjects();
      })
  }

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(
    false
  );
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = quesitons.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );
  const handleChange = (e) => {
    setFilterText(e.target.value)
    //console.log(sub);
    // filteredItems = quesitons.filter(
    //   item =>
    //     JSON.stringify(item)
    //       .toLowerCase()
    //       .indexOf(sub.toLowerCase()) !== -1
    // );
  }
  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };

  function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  }
  useEffect(() => {
    fetchQuestions()
    fetchSubjects()
  }, [])
  return (
    <React.Fragment>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Dashboard />
          <div class="layout-page">

           




            <div class="content-wrapper">


              <div class="container-xxl flex-grow-1 container-p-y">
                <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Dashboard /</span> Questions Details</h4>
                <a href="/add_questions" class="btn btn-danger col-sm-2"><i class="bx bx-plus me-1"></i> Add new</a>
                <select
                  class="form-select col-sm-3"
                  id="exampleFormControlSelect1"
                  aria-label="Default select example"
                  value={sub} onChange={handleChange}
                  style={{ width: 25 + "%", display: 'inline-block', marginLeft: 20, }}>
                  <option value="">Select Category</option>
                  {

                    subjects.map((obj) => {
                      return (
                        <option value={obj.name}>{obj.name}</option>
                      )
                    })
                  }
                </select>
                <div class="col-sm-3 input-group" style={{ width: 30 + "%", float: 'right' }}>
                  <input type="text" class="form-control" placeholder="Search Question" value={filterText} onChange={(e) => { setFilterText(e.target.value) }} />
                  <button class="btn btn-outline-primary" type="button" id="button-addon2" style={{ margin: 0 }} onClick={handleClear}>X</button>
                </div>
                <div class="row mt-4">
                  <div class="col-md-12">
                    <div class="card mb-4">
                      <h5 class="card-header">View Questions</h5>
                      <div class="card-body">
                        <div class="table-responsive text-nowrap">
                          <DataTable
                            columns={clms}
                            data={filteredItems}
                            pagination
                          />
                        </div>
                      </div>
                    </div>
                  </div>



                </div>







              </div>

              <footer class="content-footer footer bg-footer-theme">
                <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">

                </div>
              </footer>


              <div class="content-backdrop fade"></div>
            </div>

          </div>

        </div>


        <div class="layout-overlay layout-menu-toggle"></div>
      </div>
      {AddLibrary("/assets/vendor/libs/jquery/jquery.js")}
      {AddLibrary("/assets/vendor/libs/popper/popper.js")}
      {AddLibrary("/assets/vendor/js/bootstrap.js")}
      {AddLibrary("/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js")}
      {AddLibrary("/assets/vendor/js/menu.js")}

      {AddLibrary("/assets/vendor/libs/apex-charts/apexcharts.js")}
      {AddLibrary("/assets/js/main.js")}
      {AddLibrary("/assets/js/dashboards-analytics.js")}
    </React.Fragment>
  );
}

export default ViewQuestion;
