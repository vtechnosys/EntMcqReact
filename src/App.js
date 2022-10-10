import logo from './logo.svg';
import Home from './components/Home';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
// import Dashboard from './components/Dashboard/Dashboard';
import UHome from './components/UserDashboard/Home';

import Test from './components/QuestionerDashboard/questioner_dashboard';

// import PerformanceTimeline from './components/Dashboard/PerformanceTimeline';
import PerformanceTimeline from './components/UserDashboard/PerformanceTimeline';
import PerformanceSubject from './components/UserDashboard/PerformanceSubject';
// import Performance from './components/Dashboard/Performance';
import Quizzes from './components/Dashboard/Quizzes';
import Settings from './components/Dashboard/Setting';
import Logout from './components/Dashboard/Logout';
import Category from './components/Category';
import Qb from './components/Qb';
import Subscribe from './components/Subscribe';
import CustomQuiz from './components/UserDashboard/CustomQuiz';
import UserQuiz from './components/UserDashboard/UserQuiz';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Questioner_register from './components/Questioner_register';
import AddQuestion from './components/QuestionerDashboard/AddQuestion';
import ViewQuestion from './components/QuestionerDashboard/ViewQuestion';
import QuestionEdit from './components/QuestionerDashboard/QuestionEdit';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='about-us' element={ <About /> } />
        <Route path='specialist' element={<Category/>}/>
        <Route path='specialist/:id' element={<Qb/>}/>
        <Route path='subscribe/:id' element={<Subscribe/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='dashboard' element={<UHome/>}/>
        <Route path="questioner_dashboard" element={<Test/>}/>
        <Route path='dashboard/performance-timeline' element={<PerformanceTimeline/>} />
        <Route path='dashboard/performance' element={<PerformanceSubject/>} />
        <Route path='dashboard/quizzes' element={<Quizzes/>} />
        <Route path='dashboard/settings' element={<Settings/>} />
        <Route path='dashboard/custom-quiz' element={<UserQuiz/>}/>
        <Route path='logout' element={<Logout/>} />
        <Route path='questioner_register' element={<Questioner_register/>}/>
        <Route path='add_questions' element={<AddQuestion/>}/>
        <Route path='view_questions' element={<ViewQuestion/>}/>
        <Route path='edit_question/:qid' element={<QuestionEdit/>}/>
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App;
