import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { AppMenu } from "./components/AppMenu"
import reportWebVitals from "./reportWebVitals"
import { Container } from "@material-ui/core"

ReactDOM.render(
  <React.StrictMode>
    <AppMenu />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
