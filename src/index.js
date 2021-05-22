import React from "react";
import ReactDOM from "react-dom";
import {
    AdaptivityProvider,
    ConfigProvider,
    useAdaptivity,
    AppRoot,
    SplitLayout,
    SplitCol,
    ViewWidth,
    View,
    Panel,
    PanelHeader,
    Header,
    Group,
    SimpleCell
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <ConfigProvider>
        <AdaptivityProvider>
            <App/>
        </AdaptivityProvider>
    </ConfigProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
