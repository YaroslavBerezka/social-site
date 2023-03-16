import "./App.css";
import { compose } from "redux";
import store from "./redux/redux-store";
import React, { useEffect } from "react";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import { withRouter } from "./hoc/withRouter";
import Navbar from "./components/Navbar/Navbar";
import { connect, Provider } from "react-redux";
import Settings from "./components/Settings/Settings";
import { initializeApp } from "./redux/reducers/app-reducer";
import UsersContainer from "./components/Users/UsersContainer";
import Preloader from "./components/common/Preloader/Preloader";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

const App = (props) => {
  const {initializeApp, initialized} = props;

  useEffect(() => {
    initializeApp();
  }, []);
  
    
    if(!initialized) {
      return <Preloader />
    } 
    
    return(
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
              <React.Suspense fallback={<div> <Preloader /> </div>}>
                <Routes>
                  <Route path="/profile/:userId?" 
                    element={<ProfileContainer />} />
                  <Route path="/dialogs/*" 
                    element={<DialogsContainer />}/>
                  <Route path="/users" 
                    element={<UsersContainer/>}/>
                  <Route path="/news" 
                    element={<News />}/>
                  <Route path="/music" 
                    element={<Music />}/>
                  <Route path="/settings" 
                    element={<Settings />}/>
                  <Route path="/login" 
                    element={<Login />}/>
                </Routes>
              </React.Suspense>
            </div>
        </div>
    );
  
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter,
)(App);

export const SocialApp = (props) => {
  return  <BrowserRouter>
              <Provider store={store}>
                <AppContainer/>
              </Provider>
          </BrowserRouter>
};