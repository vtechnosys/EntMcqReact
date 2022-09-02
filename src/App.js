import logo from './logo.svg';

import Home from './components/Home';

import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
// import Dashboard from './components/Dashboard/Dashboard';
import UHome from './components/UserDashboard/Home';
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
        <Route path='dashboard/performance-timeline' element={<PerformanceTimeline/>} />
        <Route path='dashboard/performance' element={<PerformanceSubject/>} />
        <Route path='dashboard/quizzes' element={<Quizzes/>} />
        <Route path='dashboard/settings' element={<Settings/>} />
        <Route path='dashboard/custom-quiz' element={<UserQuiz/>}/>
        <Route path='logout' element={<Logout/>} />

      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App;
