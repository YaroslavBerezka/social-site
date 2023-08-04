import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Route, Routes, } from "react-router-dom"
import "./App.scss"
import { initializeApp } from "./api/thunkMW/thunk-app"
import { HeaderContainer } from "./components/Header/HeaderContainer"
import Music from "./components/Music/Music"
import Navbar from "./components/Navbar/Navbar"
import News from "./components/News/News"
import { NotFound } from "./components/NotFound/NotFound"
import Settings from "./components/Settings/Settings"
import { UsersPage } from "./components/Users/UsersPage"
import Preloader from "./components/common/Preloader/Preloader"
import { DispatchType } from "./redux/redux-store"
import { getInitialized } from "./redux/selectors/app-selectors"

const ChatPage = React.lazy(() => import("./pages/Chat/ChatPage"));
const Login = React.lazy(() => import("./components/Login/Login"));
const GIthub = React.lazy(() => import("./components/GitHub/GIthub"));
const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

export const App: React.FC = React.memo(() => {
  const initialized = useSelector(getInitialized);
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);
  
  if(!initialized) {
      return <Preloader />
  };
    
  return(
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
              <React.Suspense fallback={<div> <Preloader /> </div>}>
                <Routes>
                  <Route path="/" 
                    element={<Navigate to="/profile" />} />

                  <Route path="/profile/:userId?" 
                    element={<ProfileContainer />} />

                  <Route path="/dialogs/*" 
                    element={<Dialogs />} />

                  <Route path="/users" 
                    element={<UsersPage />} />

                  <Route path="/github" 
                    element={<GIthub />} />

                  <Route path="/news" 
                    element={<News />} />

                  <Route path="/music" 
                    element={<Music />} />

                  <Route path="/settings" 
                    element={<Settings />} />

                  <Route path="/login" 
                    element={<Login />} />

                  <Route path="/chat" 
                    element={<ChatPage />} />

                  <Route path="*" 
                    element={<NotFound />} />

                </Routes>
              </React.Suspense>
            </div>
        </div>
  );
});