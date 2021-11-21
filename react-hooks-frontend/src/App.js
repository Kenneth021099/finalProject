import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentsComponent from './components/ListStudentComponent';
import AddStudentComponent from './components/AddStudentComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Routes>
                <Route exact path = "/" element = {<ListStudentsComponent/>}/>
                <Route path = "/students" element = {<ListStudentsComponent/>}/>
                <Route path = "/add-students" element = {<AddStudentComponent/>}/>
                <Route path = "/edit-students/:id" element = {<AddStudentComponent/>}/>
            </Routes>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
