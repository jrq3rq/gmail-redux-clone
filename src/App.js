import React from "react";
import "./App.css";
import Header from "./components/HeaderFolder/Header";
import Sidebar from "./components/SidebarFolder/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./components/MailFolder/Mail";
import EmailList from "./components/EmailListFolder/EmailList";
import SendMail from "./components/SendMailFolder/SendMail";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        <SendMail />
      </div>
    </Router>
  );
}

export default App;
