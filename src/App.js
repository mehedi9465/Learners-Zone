import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import EnrollmentState from './components/enrollment_State/EnrollmentState';
import Home from './components/home/Home';
import Notfound from './components/notFound/Notfound';
import CourseCart from './components/courseCart/CourseCart';
import Courses from './components/courses/Courses'
import Services from './components/services/Services';

function App() {

  return (
    <div className="App">
     <Router>
       <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/enrollmentState">
            <EnrollmentState></EnrollmentState>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/courseCart">
            <CourseCart></CourseCart>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
