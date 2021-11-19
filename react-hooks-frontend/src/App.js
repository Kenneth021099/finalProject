import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentsComponent from './components/ListStudentComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Routes>
                <Route path = "/" element = {<ListStudentsComponent/>}/>
                <Route path = "/students" element = {<ListStudentsComponent/>}/>
            </Routes>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
