import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import store from "./redux/redux-store"

export const SocialApp: React.FC<IProps> = React.memo((props) => {
    return  <BrowserRouter>
                <Provider store={store}>
                  <App />
                </Provider>
            </BrowserRouter>
});

interface IProps {

};
