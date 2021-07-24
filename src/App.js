import logo from './logo.svg';
import './App.css';
import Sidebar from './component/sidebar';
import Topbar from './component/topbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard1 from './pages/dashboard';
import Errorpage from './pages/error';
import Analaytics from './pages/analaytics';
import Widget from './pages/widget';
import Events from './pages/events';
import AllProfessor from './pages/allProfessor';
import Addprofessor from './pages/addprofessor';
import Department from './pages/department';

function App() {
  return (
    <>
      <Router>
        <Sidebar></Sidebar>
        <div class="all-content-wrapper">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="logo-pro">
                  <a href="index.html"><img class="main-logo" src="img/logo/logo.png" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="header-advance-area">
            <Topbar></Topbar>
            <Switch>
              <Route path="/" component={Dashboard1} exact={true}></Route>
              <Route path="/analytics" component={Analaytics} exact={true}></Route>
              <Route path="/widgets" component={Widget}></Route>
              <Route path="/events" component={Events}></Route>
              <Route path="/allprofessor" component={AllProfessor}></Route>
              <Route path="/addprofessor" component={Addprofessor}></Route>
              <Route path="/departments" component={Department}></Route>
              


              <Route component={Errorpage}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
