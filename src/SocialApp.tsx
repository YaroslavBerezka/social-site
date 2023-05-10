import React from "react";
import { App } from "./App";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";

export const SocialApp: React.FC<PropsType> = React.memo((props) => {
    return  <BrowserRouter>
                <Provider store={store}>
                  <App />
                </Provider>
            </BrowserRouter>
});

type PropsType = {

};
