import React from "react";
import "./App.css";
import Header from "./components/HeaderFolder/Header";
import Sidebar from "./components/SidebarFolder/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./components/MailFolder/Mail";
import EmailList from "./components/EmailListFolder/EmailList";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Router path="/mail">
              <Mail />
            </Router>
            <Router path="/">
              <EmailList />
            </Router>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
