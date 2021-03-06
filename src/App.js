import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import Detail from './Pages/Detail/Detail/Detail';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Header from './Pages/Shared/Header/Header';
import SpecialDoctors from './Pages/SpecialDoctors/SpecialDoctors';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/doctors">
            <SpecialDoctors></SpecialDoctors>
          </Route>
          <Route path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/detail/:serviceId">
            <Detail></Detail>
          </PrivateRoute>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;